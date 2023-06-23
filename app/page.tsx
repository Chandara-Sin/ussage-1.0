import ChatInput from "@/components/Message/ChatInput";
import Header from "@/components/Message/Header";
import MessageSection from "@/components/Message/MessageList";
import { checkAuth } from "@/libs/auth";

const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";

const Home = async () => {
  await checkAuth();
  const { messages } = await fetch(`${baseURL}/api/messages`, {
    cache: "reload",
  }).then((res) => res.json());
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />
      <MessageSection initMessage={messages} />
      <ChatInput />
    </main>
  );
};

export default Home;
