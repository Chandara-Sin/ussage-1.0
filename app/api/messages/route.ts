import redis from "@/store";
import { NextResponse } from "next/server";

const POST = async (_req: Request) => {
  if (_req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }
  try {
    const { message } = await _req.json();
    const reqMsg = { ...message, created_at: Date.now() };
    await redis.hset("messages", reqMsg.id, JSON.stringify(reqMsg));
    return NextResponse.json({ message: reqMsg }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

export { POST };
