import { Message } from 'discord.js';

export interface Command {
    name: string;
    description: string;
    execute(message: Message, args?: string[]): Promise<Message>;
}

export interface Event {
    name: string;
    once?: boolean;
    execute(...args: unknown[]): Promise<void>
}
