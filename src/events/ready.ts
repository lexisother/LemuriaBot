import {client} from "../index";

client.on("ready", () => {
    console.log(`Logged in as ${client.user!.tag}`);
});
