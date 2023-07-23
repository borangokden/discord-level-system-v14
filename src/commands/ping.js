import BoranGokden from "../Base/Jahky.Client.js";
import { Message, EmbedBuilder, TextChannel, User, Guild } from "discord.js";

export default {
    name: "ping",
    aliases: [],

    /**
     *
     * @param {BoranGokden} client
     * @param {Message} message
     * @param {Array<String>} args
     * @param {EmbedBuilder} embed
     * @param {TextChannel} channel
     * @param {User} author
     * @param {Guild} guild
     */

    execute(client, message, args, embed, channel, author, guild) {
        channel.send({
            embeds: [
                embed.setDescription(
                    `Anlık olarak botun pingi: \`" ${client.ws.ping} "\` ms`
                ),
            ],
        });
    },
};
