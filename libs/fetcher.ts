import { IMessageDetail } from "@/interfaces/ChatInputType";

const fetcher = async () => {
  const res = await fetch("/api/messages");
  const { messages } = await res.json();
  return messages as IMessageDetail[];
};

export default fetcher;
