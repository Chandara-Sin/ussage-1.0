import ChatInput from "@/components/Message/ChatInput";
import Header from "@/components/Message/Header";
import MessageSection from "@/components/Message/MessageList";
import { Session } from "next-auth";

const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";

const Home = async () => {
  const session: Session = {
    user: {
      name: "dome",
      email: "dome@odds.team",
      image: "https://avatars.githubusercontent.com/u/66314482?v=4",
    },
    expires: new Date().setDate(new Date().getDate() + 1).toLocaleString(),
  };
  const { messages } = await fetch(`${baseURL}/api/messages`, {
    cache: "reload",
  }).then((res) => res.json());
  return (
    <main className="min-h-screen bg-slate-100">
      <Header session={session} />
      <MessageSection initMessage={messages} session={session} />
      <ChatInput session={session} />
    </main>
  );
};

export default Home;
