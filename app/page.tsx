import ChatInput from "@/components/Message/ChatInput";
import Header from "@/components/Message/Header";
import MessageSection from "@/components/Message/MessageList";

const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";

const Home = async () => {
  const { messages } = await fetch(`${baseURL}/api/messages`).then((res) =>
    res.json()
  );
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />
      <MessageSection initMessage={messages} />
      <ChatInput />
    </main>
  );
};

export default Home;
