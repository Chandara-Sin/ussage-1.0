"use client";

import fetcher from "@/api/message";
import useSWR from "swr";
import Image from "next/image";
import { IMessageDetail } from "@/interfaces/ChatInputType";
import { useEffect } from "react";
import pusher from "@/pusher";

const Message = ({ msg }: { msg: IMessageDetail }) => {
  const isUser = true;
  const { profileImgURL, message } = msg;
  return (
    <article className={`w-fit flex items-end ${isUser ? "ml-auto" : ""}`}>
      <figure className={`flex-shrink-0 ${isUser ? "order-2" : ""}`}>
        <Image
          className="rounded-full mx-2"
          height={10}
          width={36}
          src={profileImgURL}
          alt="profile-img"
        />
      </figure>
      <figure>
        <div className="flex items-end">
          <div
            className={`w-fit px-3 py-2 rounded-lg  ${
              isUser ? "bg-sky-500 ml-auto order-2" : " bg-white"
            }`}
          >
            <p className={`${isUser ? "text-white" : "text-gray-700"}`}>
              {message}
            </p>
          </div>
          <p
            className={`text-[0.65rem] italic px-2 text-gray-300 ${
              isUser ? "text-right" : ""
            }`}
          >
            {new Date(msg.created_at).toLocaleString()}
          </p>
        </div>
      </figure>
    </article>
  );
};

const MessageSection = () => {
  const { data, mutate } = useSWR("/api/messages", fetcher);

  useEffect(() => {
    const channel = pusher.client.subscribe("message");
    channel.bind("new-message", async (msg: IMessageDetail) => {
      if (data?.find((message) => message.id === msg.id)) return;
      if (msg) {
        const optimisticData: IMessageDetail[] = data?.length
          ? [...data, msg]
          : [];
        mutate(fetcher, { optimisticData, rollbackOnError: true });
      } else mutate(fetcher);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, mutate, pusher.client]);

  return (
    <section className="overflow-y-scroll px-2 pt-3 pb-28 space-y-5">
      {data?.map((msg, i) => (
        <Message msg={msg} key={i} />
      ))}
    </section>
  );
};

export default MessageSection;
