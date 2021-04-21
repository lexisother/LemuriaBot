import glob from 'glob';
import { promisify } from 'util';
import { client, main } from '../index';
import { Command, Event } from './definitions';

const globPromise = promisify(glob);

export const commands: Command[] = [];
export const events: Event[] = [];

async function loadCommands(): Promise<void> {
    const commandFiles = await globPromise(`${main}/commands/*{.js,.ts}`);

    for (const file of commandFiles) {
      const command = (await require(file)) as Command;
      commands.push(command);
    }
}

async function loadEvents(): Promise<void> {
    const eventFiles = await globPromise(`${main}/events/*{.js,.ts}`);
    for (const file of eventFiles) {
        const event = (await require(file)) as Event;
        events.push(event);
    }

    for (const event of events) {
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
    // for (const file of eventFiles) {
    //     const event = require(`${__dirname}/events/${file}`);
    //     if (event.once) {
    //         client.once(event.name, (...args) => event.execute(...args));
    //     } else {
    //         client.on(event.name, (...args) => event.execute(...args));
    //     }
    // }
}

export async function init(): Promise<void> {
    await loadCommands();
    await loadEvents();
}