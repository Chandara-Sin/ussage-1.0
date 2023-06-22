import redis from "@/store";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const POST = async (_req: Request) => {
  try {
    const { message } = await _req.json();
    const reqMsg = { ...message, id: uuid(), created_at: Date.now() };
    await redis.hset("messages", reqMsg.id, JSON.stringify(reqMsg));
    return NextResponse.json({ message: reqMsg }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

export { POST };
