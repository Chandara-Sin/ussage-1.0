import { Awaitable, NextAuthOptions, User } from "next-auth";
import { getServerSession } from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { redirect } from "next/navigation";

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter your email",
        },
      },
      authorize: (credentials, req): Awaitable<User | null> => ({
        id: "i/h60e69OKK3W7uzLOSJjR75RQIR4vE2WB7Ol3nnWoI=",
        email: credentials?.email,
        image: "https://avatars.githubusercontent.com/u/66314482?v=4",
        name: "dome",
      }),
    }),
    Google({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "",
};

const checkAuth = async () => {
  const session = await getServerSession();
  if (!session) return redirect("/auth/signin");
  return session;
};

const verifyAuth = async () => {
  const session = await getServerSession();
  if (session) return redirect("/");
};

export { authOptions, checkAuth, verifyAuth };
