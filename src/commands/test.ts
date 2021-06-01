import { Command } from '../core/definitions';
import { Message } from 'discord.js';

export default new Command({
    name: "test",
    description: "A test command",
    execute(message: Message): Promise<Message> {
        return message.reply("Yes.")
    }
});