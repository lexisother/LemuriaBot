import { Command } from '../core/definitions';
import { Message } from 'discord.js';

const command: Command = {
    name: "ping",
    description: "Simple ping command.",
    execute(message: Message): Promise<Message> {
        return message.channel.send('Pong!')
    }
}

export = command;