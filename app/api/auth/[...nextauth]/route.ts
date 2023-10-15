import { Awaitable, NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

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
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
