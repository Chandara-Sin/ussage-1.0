"use client";

import { BackArrow } from "@/svg/Icons";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Header = ({ session }: { session: Session | null }) => (
  <header className="sticky top-0 z-50 bg-white rounded-b-3xl flex justify-between items-center p-5 shadow-sm">
    <section className="flex items-center space-x-4">
      <BackArrow className="text-xl mx-4" />
      <figure className="relative w-[50px] h-[50px] mx-2">
        <Image
          src={session?.user?.image ?? ""}
          className="rounded-full object-contain"
          width={50}
          height={50}
          alt="profile-img"
          priority
        />
        <i className="absolute bottom-0 -right-1 h-4 w-4 border-2 border-white rounded-full bg-green-800 z-2" />
      </figure>
      <figure className="flex flex-col">
        <p className="font-mono">{session?.user?.name}</p>
        <p className="font-mono text-gray-500">online</p>
      </figure>
    </section>
    <section className="flex items-center justify-center space-x-8 mx-4">
      <button
        className="bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign out
      </button>
    </section>
  </header>
);

export default Header;
