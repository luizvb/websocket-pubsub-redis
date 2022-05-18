import { Socket } from "socket.io-client";
import { REDIS } from './Redis'

export default class Listeners {
  io: Socket;
  constructor(io) {
    this.io = io;
    this.io.onAny((eventName, data) => this.onEvent(eventName, data));
  }

  onEvent = (eventName: string, data: any) => {
    try {
        // TODO - SUBSCRIBE ONLY FROM ALLOWED ORIGINS
        // TODO - LIST OF ALLOWED PUBLIC PUBLISH EVENTS
        REDIS[eventName](data)
    } catch (error) {
        console.log('UNKNOWN EVENT', eventName, data);
    }  
  };
}
