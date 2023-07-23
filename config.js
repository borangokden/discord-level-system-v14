const config = {
    bot: {
        token: "BOT TOKENINIZ",
        owners: ["KENDI ID'N"],
        footer: "Bot Footer",
        prefix: ["."],
    },

    Guild: {
        GuildName: "BG Deneme",
        GuildID: "SUNUCU ID",
        GuildOwnerRoles: ["KURUCU ROLU ID"]
    },
    ranks: {
        nextXp: 20, // mevcut seviye * nextXp * 7 bir sonraki rankı belirler
        lenght: 10,// mesajın uzunluğu (harf)
        xpToAdd: "1-10",
    },
    channels: {
        log: "LEVEL LOG ID",
    },

    emojis: {
        fill: "<a:borangokden_dolubarorta:1130104289977700453>",//https://cdn.discordapp.com/emojis/896517433102311454.gif?size=96&quality=lossless
        empty: "<:borangokden_bosbarorta:1130104381388357712>",//https://cdn.discordapp.com/emojis/896517301560549457.webp?size=96&quality=lossless
        fillStart: "<a:borangokden_dolubarbaslangic:1130104285783404634>",//https://cdn.discordapp.com/emojis/896518144569536543.gif?size=96&quality=lossless
        emptyEnd: "<:borangokden_bosbarbitis:1130104355937337385>",//https://cdn.discordapp.com/emojis/896517346892582973.webp?size=96&quality=lossless
        fillEnd: "<a:borangokden_dolubarbitis:1130104287314325524>",//https://cdn.discordapp.com/emojis/896517479659077662.gif?size=96&quality=lossless
    },
};

export default config;
