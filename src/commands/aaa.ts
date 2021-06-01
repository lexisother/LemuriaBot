import {Message} from "discord.js";
import {CommandNew} from "../core/definitions";

export default new CommandNew({
    name: "aaa",
    description: "test",
    execute(message: Message): Promise<Message> {
        return message.channel.send("heu");
    }
});
