import BoranGokden from "../Base/Jahky.Client.js";
import { EmbedBuilder } from "discord.js";
import config from "../../config.js";
const Get = new Map();

/**
 * @param {BoranGokden} client
 */

export default (client) => {
    client.on("messageCreate", async (message) => {
        const prefix = config.bot.prefix.find((x) =>
            message.content.toLowerCase().startsWith(x)
        );
        if (
            message.author.bot ||
            !message.guild ||
            prefix ||
            message.content.length <= config.ranks.lenght
        )
            return;
        const updateXP = config.ranks.nextXp;
        const level = client.db.get(`level_${message.author.id}`);

        let updateLevelXP;
        if (level) {
            updateLevelXP = (!level ? 1 : level + 1) * updateXP * 7;
        } else {
            updateLevelXP = 100;
        }

        const xpPerLevel = config.ranks.xpToAdd.toString().includes("-")
            ? config.ranks.xpToAdd.split("-")
            : config.ranks.xpToAdd;
        const min = parseInt(xpPerLevel[0]);
        const max = parseInt(xpPerLevel[1]);
        const xpToAdd = Array.isArray(xpPerLevel)
            ? min + Math.floor((max - min) * Math.random())
            : xpPerLevel;
        client.db.add(`rank_${message.author.id}`, xpToAdd);

        const rank = client.db.get(`rank_${message.author.id}`);

        if (rank < updateLevelXP) return;

        client.db.add(`level_${message.author.id}`, 1);
        let currentLevel = client.db.get(`level_${message.author.id}`);
        let newRank = client.ranks.filter((x) => currentLevel === x.level);
        message.member.roles.add(newRank.map(x => x.roles))
        message.guild.channels.cache
            .get(config.channels.log)
            .send(
                `${message.author} kullanıcısı **${currentLevel === 1 ? "0" : currentLevel - 1
                }** seviyesinden **${currentLevel}** seviyesine ulaştı!`
            );
        message.channel.send(
            `Tebrikler! ${message.author} anlık olarak **${level}** seviyesinden **${currentLevel}** seviyesine ulaştın! 🎉`
        );
    });
};
