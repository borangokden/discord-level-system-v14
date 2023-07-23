import BoranGokden from "../Base/Jahky.Client.js";
import { EmbedBuilder } from "discord.js";

/**
 * @param {BoranGokden} client
 */

export default (client) => {
    client.on("ready", async () => {
        client.user.setPresence({
            activities: [{ name: 'YouTube Boran Gökden', type: 'PLAYING' }],
            status: 'online'
          });
        });
};
