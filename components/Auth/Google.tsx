"use client";

import { GoogleLogo } from "@/svg/Icons";
import { signIn } from "next-auth/react";

const Google = async () => {
  const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";
  return (
    <button
      className="w-full max-w-md flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-200"
      onClick={(e) => {
        e.preventDefault();
        signIn("google", {
          callbackUrl: baseURL,
          basePath: process.env.NEXTAUTH_URL ?? baseURL,
        });
      }}
    >
      <GoogleLogo width={25} height={25} />
      <span className="mx-2 text-gray-700">Sign in with Google</span>
    </button>
  );
};

export default Google;
