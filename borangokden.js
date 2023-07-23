import BoranGokden from "./src/Base/Jahky.Client.js";
const client = (global.client = new BoranGokden());
import load from "./src/Base/load.js";
import login from "./src/Base/login.js";

login.on(client);
load.LoadCommands(client);
load.LoadEvents(client);
