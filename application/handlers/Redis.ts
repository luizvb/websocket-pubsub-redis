import { eventEmitter, pubClient, subClient } from "../server";

interface Params {
  channel: string;
  message: any;
}

export const REDIS = {
  SUBSCRIBE: (params: Params) => {
    console.log(`SUBSCRIBE ${params?.channel}`);
    subClient.SUBSCRIBE(params?.channel, (message: any) => {
      eventEmitter.emit("emitter", params?.channel, message);
    });
  },
  UNSUBSCRIBE: (params: Params) => {
    console.log(`UNSUBSCRIBE ${params?.channel}`);
    pubClient.UNSUBSCRIBE(params.channel, (message: any) => console.log(message));
  },
  PUBLISH: (params: Params) => {
    console.log(`PUBLISH ${params?.channel}`);
    pubClient.PUBLISH(params?.channel, params?.message);
  },
};
