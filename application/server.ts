import { Server, Socket } from "socket.io";
import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";
import Listeners from "./handlers/Listeners";
import Emitters from "./handlers/Emitters";

import EventEmitter from "events";

const io = new Server();

export const eventEmitter = new EventEmitter();
export const pubClient = createClient();
export const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  io.listen(3000);
});

io.on("connection", (socket: Socket) => {
  new Listeners(socket);
  new Emitters(socket);
});