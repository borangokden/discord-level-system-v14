import { Client, GatewayIntentBits, Collection } from "discord.js";
import logger from "./logger.js";
import config from "../../config.js";
import db from "ceki.db";
const intents = Object.keys(GatewayIntentBits);

class BoranGokden extends Client {
    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildPresences,
            ],
        });
        this.commands = new Collection();
        this.aliases = new Collection();
        this.config = global.config = config;
        global.system = this;
        this.logger = logger;
        this.db = global.db = db;
        this.ranks = [
            { level: 1, roles: "1130108254555476039" },
            { level: 2, roles: "1130108260112932924" },
            { level: 3, roles: "1130108261295734945" },
            
        ];
    }
}

export default BoranGokden;
