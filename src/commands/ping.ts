import {Command} from "../core/definitions";
import {Message} from "discord.js";

export default new Command({
    name: "ping",
    description: "Simple ping command.",
    execute(message: Message): Promise<Message> {
        return message.channel.send("Pong!");
    }
});
