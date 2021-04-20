import { commands } from '../index';
import { Command } from '../core/command';
import { Message } from 'discord.js';

const command: Command = {
    name: "help",
    description: "Help command",
    async execute(message: Message, args: string[]): Promise<Message> {
        if (args.length == 1) {
            const cmd = commands.find(c => c.name === args[0]);
            if (cmd) return message.channel.send(`**${cmd.name}:** ${cmd.description}`);
            else return message.channel.send("Command not found!");
        }
        
        if (args.length > 1) {
            return message.reply('Too many arguments!')
        }

        let helpMessage = "";
        commands.forEach(cmd => {
            if (cmd.name === 'help') return;
            helpMessage += `**${cmd.name}:** ${cmd.description}\n`
        })
        return message.channel.send(helpMessage);
    }
}

export = command;