import moment from "moment";
moment.locale("tr");

class Logger {
    static log(content, type) {
        const timestamp = `[${moment(Date.now()).format("LLL")}]:`;
        console.log(`${timestamp} ${content} ${type ? type : ""}`);
    }

    static error(content) {
        this.log(content, "[BORANGOKDEN-HATA]");
    }

    static warn(content) {
        this.log(content, "[BORANGOKDEN-UYARI]");
    }

    static debug(content) {
        this.log(content, "[BORANGOKDEN-DEBUG]");
    }

    static cmd(content) {
        this.log(content, "[BORANGOKDEN-KOMUT]");
    }
}

export default Logger;
