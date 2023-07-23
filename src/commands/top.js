import BoranGokden from "../Base/Jahky.Client.js";
import { Message, EmbedBuilder, TextChannel, User, Guild } from "discord.js";

export default {
    name: "top",
    aliases: ["top-seviye"],

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

    async execute(client, message, args, embed, channel, author, guild) {
        await guild.members.fetch();

        const top = Array.from(
            guild.members.cache
                .filter((member) => client.db.get(`rank_${member.id}`))
                .keys()
        )
            .sort(
                (a, b) =>
                    client.db.get(`rank_${b}`) - client.db.get(`rank_${a}`)
            )
            .slice(0, 15)
            .map(
                (id, index) =>
                    `${index + 1}. ${guild.members.cache
                        .get(id)
                        .toString()} | (\`\`${client.db.get(
                        `level_${id}`
                    )}. level / ${client.db.get(`rank_${id}`)} xp\`\`)`
            )
            .join("\n");

        channel.send({
            embeds: [
                embed.setDescription(
                    `**${guild.name}** sunucumuzun toplam level verileri aşağıda belirtilmiştir;\n\n${
                        top || "Sunucuda herhangi bir level verisi bulunmamaktadır."
                    }`
                ),
            ],
        });
    },
};
