import {Command} from "./definitions";
import {Collection} from "discord.js";
import {promises as ffs} from "fs";

// Taken from: https://github.com/keanuplayz/TravBot-v3/blob/5165c5ec4bd564d2415b11218671b164489058b6/src/core/command.ts
export let commands: Collection<string, Command> | null = null;

async function loadCommands(): Promise<Collection<string, Command>> {
    if (commands) return commands;

    commands = new Collection();
    const dir = await ffs.opendir("dist/commands");
    const listMisc: string[] = [];
    let selected;

    // eslint-disable-next-line no-cond-assign
    while ((selected = await dir.read())) {
        if (selected.name.endsWith(".map")) continue;
        loadCommand(selected.name, listMisc);
    }

    dir.close();
    return commands;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, consistent-return
async function loadCommand(filename: string, list: string[]) {
    if (!commands) return console.log('Function "loadCommand" was called without initializing commands!');

    const header = filename.substring(0, filename.indexOf(".js"));
    const command = (await import(`../commands/${header}`)).default as Command | undefined;

    if (!command) return console.log(`Command "${header}" has no default export which is a Command instance!`);

    command.originalCommandName = header;
    list.push(header);

    if (commands.has(header)) console.log(`Command "${header}" already exists!`);
    else commands.set(header, command);

    for (const alias of command.aliases) {
        if (commands.has(alias)) console.log(`Top-level alias "${alias}" from command "${header}" already exists!`);
        else commands.set(alias, command);
    }

    console.log(`Loading command: ${header}`);
}

export async function init(): Promise<void> {
    await loadCommands();
}
