import * as discord from "discord.js";
import config from "./config";
import {init} from "./core/lib";

export const main = __dirname;
export const client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES]
});
export const {prefix} = config;

init();

client.login(config.token);

import "./events/ready";
import "./events/message";
