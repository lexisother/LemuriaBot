import { client } from '../index';
import { Event } from '../core/definitions';

const event: Event = {
    name: 'ready',
    once: true,
    async execute(): Promise<void> {
        console.log(`Logged in ${client.user?.tag}`);
    }
}

export = event;