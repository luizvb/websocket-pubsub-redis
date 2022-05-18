import { Emitter } from "@socket.io/redis-emitter";
import { eventEmitter } from "../server";

export default class Emitters {
  io: Emitter
  constructor(io) {
    this.io = io;
    eventEmitter.on("emitter", this.onEvent);
  }

  onEvent = (channel: string, message: any) => {
    console.log(message)
    this.io.emit(channel, message);
  };
}
