import {Message} from "discord.js";
import {prefix} from "../index";
import {commands} from "../core/lib";
import {Event} from "../core/definitions";

const event: Event = {
    name: "message",
    async execute(msg: Message): Promise<void> {
        if (msg.author.bot) return;
        const [commandName, ...args] = msg.content.slice(prefix.length).split(/ +/);
        const command = commands.find((c) => c.name === commandName);
        if (command) {
            command.execute(msg, args);
        }
    }
};

export = event;
