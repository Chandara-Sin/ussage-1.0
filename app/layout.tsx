import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ussage",
  description: "Ussage Chat App",
  openGraph: {
    type: "website",
    url: "ussage-1-0.vercel.app",
    title: "Ussage - Your Ultimate Messaging Companion",
    description:
      "Ussage: Instant messaging, voice/video calls, privacy, and more.",
    siteName: "Ussage",
    images: [
      {
        url: "ussage-1-0.vercel.app",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
