import * as discord from 'discord.js';
import glob from 'glob';
import { promisify } from 'util';
import config from './config';
import { Command } from './core/command';

const globPromise = promisify(glob);
export const commands: Command[] = [];

const client = new discord.Client();

client.once('ready', async () => {
  const commandFiles = await globPromise(`${__dirname}/commands/*{.js,.ts}`);

  for (const file of commandFiles) {
    const command = (await require(file)) as Command;
    commands.push(command);
  }
  console.log(`Logged in ${client.user?.tag}`);
});

const { prefix } = config;

client.on('message', (msg) => {
  if (msg.author.bot) return;
  const [commandName, ...args] = msg.content.slice(prefix.length).split(/ +/);
  const command = commands.find((c) => c.name === commandName);
  if (command) {
    command.execute(msg, args);
  }
});

client.login(config.token);
