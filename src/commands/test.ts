import { Command } from '../core/command';
import { Message } from 'discord.js';

const command: Command = {
    name: "test",
    description: "A test command",
    execute(message: Message): Promise<Message> {
        return message.reply("Yes.")
    }
}

export = command;