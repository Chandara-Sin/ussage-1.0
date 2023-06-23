import ChatInput from "@/components/Message/ChatInput";
import Header from "@/components/Message/Header";
import MessageSection from "@/components/Message/MessageList";
import { checkAuth } from "@/libs/auth";
import { Session } from "next-auth";

const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";

const Home = async () => {
  // const session = await checkAuth();
  const session: Session = {
    user: {
      name: "dome",
      email: "dome@odds.team",
      image: "string | null",
    },
    expires: new Date(Date.now() + 1).toISOString(),
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
