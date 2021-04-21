import { Message } from "discord.js";
import { prefix } from '../index';
import { commands } from '../core/lib';

module.exports = {
    name: 'message',
    execute(msg: Message) {
        if (msg.author.bot) return;
        const [commandName, ...args] = msg.content.slice(prefix.length).split(/ +/);
        const command = commands.find((c) => c.name === commandName);
        if (command) {
          command.execute(msg, args);
        }
    }
}