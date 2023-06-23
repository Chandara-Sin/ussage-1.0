import { IMessageDetail } from "@/interfaces/ChatInputType";
import pusher from "@/libs/pusher";
import redis from "@/libs/store";
import { NextResponse } from "next/server";

import { v4 as uuid } from "uuid";

const POST = async (_req: Request) => {
  try {
    const { message } = await _req.json();
    const reqMsg = { ...message, id: uuid(), created_at: Date.now() };
    await redis.hset("messages", reqMsg.id, JSON.stringify(reqMsg));
    pusher.server.trigger("messages", "new-messages", reqMsg);
    return NextResponse.json({ message: reqMsg }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

const GET = async (_: Request) => {
  try {
    const res = await redis.hvals("messages");
    const messages: IMessageDetail[] = res
      .map((msg) => JSON.parse(msg))
      .sort((a, b) => a.created_at - b.created_at);
    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

export { POST, GET };
