import { readdir, readdirSync } from "fs";
import BoranGokden from "./Jahky.Client.js";

class Load {
    /**
     *
     * @param {BoranGokden} client
     */

    static async LoadCommands(client) {
        readdirSync("./src/commands", { encoding: "utf8" })
            .filter((file) => file.endsWith(".js"))
            .forEach(async (files) => {
                const prop = await import(`../commands/${files}`).then(
                    (modules) => modules.default
                );
                if (!prop.name) return;

                client.commands.set(prop.name, prop);
                client.logger.log(`[BORANGOKDEN-COMMAND] ${prop.name} yüklendi!`);
                if (!prop.aliases || prop.aliases.length < 1) return;
                prop.aliases.forEach((otherUses) => {
                    client.aliases.set(otherUses, prop.name);
                });
            });
    }

    /**
     *
     * @param {Jahky} client
     */

    static async LoadEvents(client) {
        readdir("./src/events", (err, files) => {
            if (err) console.log(err);
            files.forEach(async (file) => {
                const event = await import(`../events/${file}`).then(
                    (modules) => modules.default
                );
                event(client);
            });
        });
    }
}

export default Load;
