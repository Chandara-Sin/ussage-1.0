"use client";

import { GoogleLogo } from "@/svg/Icons";
import { signIn } from "next-auth/react";

const Google = () => {
  const baseURL = "http://localhost:3000/api/auth/callback/google";
  return (
    <button
      className="w-full max-w-md flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-200"
      onClick={(e) => {
        e.preventDefault();
        signIn("google", {
          redirect: false,
        });
      }}
    >
      <GoogleLogo width={25} height={25} />
      <span className="mx-2 text-gray-700">Sign in with Google</span>
    </button>
  );
};

export default Google;
