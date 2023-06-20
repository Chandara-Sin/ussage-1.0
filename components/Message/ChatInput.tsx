import { PaperPlan } from "@/svg/Icons";
import React from "react";

const ChatInput = () => (
  <footer className="fixed bottom-0 w-screen z-50 bg-white rounded-t-3xl p-6 shadow-sm">
    <section className="flex items-center bg-gray-100 rounded-xl border-2 border-gray-100 focus:border-b-2 outline-0">
      <input
        className="h-12 w-full bg-transparent border-none appearance-none p-2 text-gray-600 focus:outline-none"
        type="text"
        placeholder="Type here..."
      />
      <hr className="flex-shrink-0 w-[1px] h-8 bg-gray-400 text-transparent" />
      <PaperPlan className="flex-shrink-0 text-blue-400 hover:text-blue-600 cursor-pointer mx-4" />
    </section>
  </footer>
);

export default ChatInput;
