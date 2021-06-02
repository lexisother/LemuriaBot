import {Message} from "discord.js";

export interface CommandOptions {
    name: string;
    description?: string;
    aliases?: string[];
    execute(message: Message, args?: string[]): Promise<Message>;
}

export class Command {
    public name: string;
    public description: string;
    public aliases: string[];
    public originalCommandName: string | null;

    public execute: (message: Message, args?: string[]) => Promise<Message>;

    public constructor(options: CommandOptions) {
        this.name = options.name;
        this.description = options?.description ?? "No description for this command.";
        this.aliases = options.aliases ?? [];
        this.originalCommandName = null;
        this.execute = options.execute;
    }
}
