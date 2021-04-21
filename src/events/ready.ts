import { client } from '../index';

module.exports = {
    name: 'ready',
    once: true,
    execute() {
        console.log(`Logged in ${client.user?.tag}`);
    }
}