import ChatInput from "@/components/Message/ChatInput";
import Header from "@/components/Message/Header";
import MessageSection from "@/components/Message/MessageList";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />
      <MessageSection />
      <ChatInput />
    </main>
  );
};

export default Home;
