import { BackArrow, Phone, Video } from "@/svg/Icons";
import Image from "next/image";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white rounded-b-3xl flex justify-between items-center p-5 shadow-sm">
    <section className="flex items-center space-x-4">
      <BackArrow className="text-xl mx-4" />
      <figure className="relative w-[50px] h-[50px] mx-2">
        <Image
          src="/assets/images/profile-img.jpeg"
          className="rounded-full object-contain"
          width={50}
          height={50}
          alt="profile-img"
          priority
        />
        <i className="absolute bottom-0 -right-1 h-4 w-4 border-2 border-white rounded-full bg-green-800 z-2" />
      </figure>
      <figure className="flex flex-col">
        <p className="font-mono">Chandara</p>
        <p className="font-mono text-gray-500">online</p>
      </figure>
    </section>
    <section className="flex items-center justify-center space-x-8 mx-4">
      <Video className="text-xl text-gray-400" />
      <Phone className="text-xl text-gray-400" />
    </section>
  </header>
);

export default Header;
