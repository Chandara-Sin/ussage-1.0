import ChatInput from "@/components/Message/ChatInput";
import Header from "@/components/Message/Header";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />
      <ChatInput />
    </main>
  );
};

export default Home;
