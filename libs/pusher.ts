import Pusher from "pusher";
import ClientPusher from "pusher-js";

const server = new Pusher({
  appId: process.env.PUSHER_SERVER_APPID ?? "",
  key: process.env.PUSHER_SERVER_KEY ?? "",
  secret: process.env.PUSHER_SERVER_SECRET ?? "",
  cluster: "ap1",
  useTLS: true,
});
const client = new ClientPusher(process.env.PUSHER_CLIENT ?? "", {
  cluster: "ap1",
  forceTLS: true,
});
const pusher = { server, client };

export default pusher;
