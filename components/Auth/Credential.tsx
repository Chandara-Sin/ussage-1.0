"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

const CredentialSignIn = () => {
  const baseURL = process.env.VERCEL_URL ?? "http://localhost:3000";
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signIn("credentials", {
      email: formData.get("email"),
      callbackUrl: baseURL,
    });
  };
  return (
    <form className="w-full max-w-md" onSubmit={handleOnSubmit}>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize font-mono">
        sign In
      </h1>
      <section className="relative flex items-center mt-8">
        <input
          type="email"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Enter your email"
          name="email"
        />
      </section>
      <button
        className="w-full mt-5 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 font-mono"
        type="submit"
      >
        Sign in
      </button>
      <section className="relative flex items-center mt-5">
        <span className="flex-grow border-t border-gray-400"></span>
        <span className="flex-shrink mx-4 text-gray-400">OR</span>
        <span className="flex-grow border-t border-gray-400"></span>
      </section>
    </form>
  );
};

export default CredentialSignIn;
