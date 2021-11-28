import dotenv from "dotenv";
dotenv.config();
import { Client } from "discord.js";

const client = new Client();

client.on("voiceStateUpdate", async (oldState, newState) => {
  if (oldState.channelID === null) {
    // the user is just joining
    if (Math.floor(Math.random() * 3) === 0) {
      const connection = await newState.member?.voice.channel?.join();
      connection?.play("bitch.mp3").on("finish", () => {
        connection?.disconnect();
      });
    }
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.login(process.env.TOKEN);
