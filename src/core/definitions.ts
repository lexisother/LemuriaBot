import {Message} from "discord.js";

export interface Command {
    name: string;
    description: string;
    execute(message: Message, args?: string[]): Promise<Message>;
}

export interface Event {
    name: string;
    once?: boolean;
    execute(...args: unknown[]): Promise<void>;
}

export interface CommandOptions {
    name: string;
    description?: string;
    execute(message: Message, args?: string[]): Promise<Message>;
}

export class CommandNew {
    public name: string;
    public description: string;
    public execute: (message: Message, args?: string[]) => Promise<Message>;

    public constructor(options: CommandOptions) {
        this.name = options.name;
        this.description = options?.description ?? "No description for this command.";
        this.execute = options.execute;
    }
}
