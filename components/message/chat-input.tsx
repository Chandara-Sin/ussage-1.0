"use client";

import fetcher from "@/libs/fetcher";
import { IMessageDetail } from "@/interfaces/ChatInputType";
import { PaperPlan } from "@/svg/Icons";
import { Session } from "next-auth";
import { ChangeEvent, FormEvent, useId, useState } from "react";
import useSWR from "swr";

const ChatInput = ({ session }: { session: Session | null }) => {
  const [message, setMessage] = useState("");
  const { data, mutate } = useSWR("/api/messages", fetcher);
  const id = useId();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMsg = message;
    const msgDetails: IMessageDetail = {
      id,
      message: newMsg,
      created_at: Date.now(),
      username: session?.user?.name || "",
      profileImgURL: session?.user?.image || "",
      email: session?.user?.email || "",
    };
    await handleCreateMessage(msgDetails);
    setMessage("");
  };

  const handleCreateMessage = async (msg: IMessageDetail) => {
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg }),
    });
    const { message } = await res.json();
    const optimisticData: IMessageDetail[] = data?.length
      ? [...data, message]
      : [];
    await mutate(optimisticData, {
      optimisticData,
      rollbackOnError: true,
    });
  };

  return (
    <footer className="fixed bottom-0 w-screen z-50 bg-white rounded-t-3xl p-6 shadow-sm">
      <form
        onSubmit={handleOnSubmit}
        className="flex items-center bg-gray-100 rounded-xl border-2 border-gray-100 focus:border-b-2 outline-0"
      >
        <input
          className="h-12 w-full bg-transparent border-none appearance-none p-2 text-gray-600 focus:outline-none"
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={handleOnChange}
        />
        <hr className="flex-shrink-0 w-[1px] h-8 bg-gray-400 text-transparent" />
        <button className="flex-shrink-0 mx-4" type="submit">
          <PaperPlan
            className={`${
              message
                ? "text-blue-500 hover:text-blue-700 cursor-pointer"
                : "text-blue-200 cursor-auto"
            }`}
          />
        </button>
      </form>
    </footer>
  );
};

export default ChatInput;
