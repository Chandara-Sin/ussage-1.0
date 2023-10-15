import ChatInput from "@/components/message/chat-input";
import Header from "@/components/message/header";
import MessageSection from "@/components/message/message-list";
import { checkAuth } from "@/libs/auth";

const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";

const Home = async () => {
  const session = await checkAuth();
  const { messages } = await fetch(`${baseURL}/api/messages`).then((res) =>
    res.json()
  );
  return (
    <main className="min-h-screen bg-slate-100">
      <Header session={session} />
      <MessageSection initMessage={messages} session={session} />
      <ChatInput session={session} />
    </main>
  );
};

export default Home;
