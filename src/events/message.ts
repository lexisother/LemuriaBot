import {client, prefix} from "../index";
import {commands} from "../core/lib";

client.on("message", (msg) => {
    if (msg.author.bot) return;
    const [commandName, ...args] = msg.content.slice(prefix.length).split(/ +/);
    const command = commands!.find((c) => c.name === commandName);
    if (command) {
        command.execute(msg, args);
    }
});
