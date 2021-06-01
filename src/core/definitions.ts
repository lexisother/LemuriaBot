import {Message} from "discord.js";

export interface CommandOptions {
    name: string;
    description?: string;
    execute(message: Message, args?: string[]): Promise<Message>;
}

export class Command {
    public name: string;
    public description: string;
    public execute: (message: Message, args?: string[]) => Promise<Message>;

    public constructor(options: CommandOptions) {
        this.name = options.name;
        this.description = options?.description ?? "No description for this command.";
        this.execute = options.execute;
    }
}
