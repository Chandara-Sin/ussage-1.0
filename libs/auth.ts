import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const checkAuth = async () => {
  const session = await getServerSession();
  if (!session) return redirect("/auth/signin");
  return session;
};

const verifyAuth = async () => {
  const session = await getServerSession();
  if (session) return redirect("/");
};

export { checkAuth, verifyAuth };
