"use client";

import fetcher from "@/api/message";
import useSWR from "swr";
import Image from "next/image";
import { IMessageDetail } from "@/interfaces/ChatInputType";

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
  const { data } = useSWR("/api/messages", fetcher);
  return (
    <section className="overflow-y-scroll px-2 pt-3 pb-28 space-y-5">
      {data?.map((msg, i) => (
        <Message msg={msg} key={i} />
      ))}
    </section>
  );
};

export default MessageSection;
