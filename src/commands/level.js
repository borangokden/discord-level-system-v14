import BoranGokden from "../Base/Jahky.Client.js";
import {
    Message,
    EmbedBuilder,
    TextChannel,
    User,
    Guild,
} from "discord.js";
import config from "../../config.js";

export default {
    name: "rank",
    aliases: ["seviyem", "seviyesi"],

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
        const member =
            message.mentions.members.first() ||
            guild.members.cache.get(args[0]) ||
            message.member;

        const rank = client.db.get(`rank_${member.user.id}`) || 0;
        const level = client.db.get(`level_${member.user.id}`);
        const updateXP = config.ranks.nextXp;
        let updateLevelXP;
        if (level) {
            updateLevelXP = (!level ? 1 : level + 1) * updateXP * 7;
        } else {
            updateLevelXP = 100;
        }

        channel.send({
            embeds: [
                embed.setDescription(`${member} kullanıcısının seviye bilgileri aşağıda belirtilmiştir:
        
        Mevcut Seviye: **${Math.floor(
            level || 0
        )}**  (\`${rank} / ${updateLevelXP}\`)

        Seviye Grafiği; 
        ${progressBar(rank, updateLevelXP, 10)}
*Sunucumuzda daha fazla aktiflik sağlayarak seviyenizi arttırabilirsiniz.*`),
            ],
        });
    },
};

function progressBar(value, maxValue, size) {
    const progress = Math.round(
        size * (value / maxValue > 1 ? 1 : value / maxValue)
    );
    const emptyProgress = size - progress > 0 ? size - progress : 0;
    const progressText = config.emojis.fill.repeat(progress);
    const emptyProgressText = config.emojis.empty.repeat(emptyProgress);
    return emptyProgress > 0
        ? config.emojis.fillStart +
              progressText +
              emptyProgressText +
              config.emojis.emptyEnd
        : config.emojis.fillStart +
              progressText +
              emptyProgressText +
              config.emojis.fillEnd;
}
