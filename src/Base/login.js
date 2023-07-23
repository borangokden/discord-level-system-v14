import config from "../../config.js";
import BoranGokden from "./Jahky.Client.js";

class Login {
    /**
     *
     * @param {BoranGokden} client
     */

    static async on(client) {
        client
            .login(config.bot.token)
            .then((x) =>
                console.log(
                    `[BORANGOKDEN-BOT] Bota ${client.user.username} adıyla giriş yapılıp discord API bağlantısı kuruldu.`
                )
            )
            .catch((err) =>
                console.log("[BORANGOKDEN-BOT] Discord API botun tokenini doğrulayamadı.")
            );

        await import("../Utils/Client.Functions.js");
    }
}

export default Login;
