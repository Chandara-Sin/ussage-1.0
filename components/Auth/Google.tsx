"use client";

import { GoogleLogo } from "@/svg/Icons";
import { getProviders, signIn } from "next-auth/react";

const Google = ({
  providers,
}: {
  providers: Awaited<ReturnType<typeof getProviders>>;
}) => {
  const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";
  return (
    <button
      className="w-full max-w-md flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-200"
      onClick={(e) => {
        e.preventDefault();
        signIn(providers?.google.id, {
          callbackUrl: baseURL,
          basePath: process.env.NEXTAUTH_URL ?? baseURL,
        });
      }}
    >
      <GoogleLogo width={25} height={25} />
      <span className="mx-2 text-gray-700">
        Sign in with {providers?.google.name}
      </span>
    </button>
  );
};

export default Google;
