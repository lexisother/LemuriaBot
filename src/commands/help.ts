import {commands} from "../core/lib";
import {Command} from "../core/definitions";
import {Message} from "discord.js";

export default new Command({
    name: "help",
    description: "Help command",
    async execute(message: Message, args: string[]): Promise<Message> {
        if (args.length == 1) {
            const cmd = commands!.find((_k, v) => v === args[0]);
            if (cmd) return message.channel.send(`**${cmd.name}:** ${cmd.description}`);
            else return message.channel.send("Command not found!");
        }

        if (args.length > 1) {
            return message.reply("Too many arguments!");
        }

        let helpMessage = "";
        commands!.forEach((cmd) => {
            if (cmd.name === "help") return;
            helpMessage += `**${cmd.name}:** ${cmd.description}\n`;
        });
        return message.channel.send(helpMessage);
    }
});
