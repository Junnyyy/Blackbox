import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { validateEnv } from "./utils/validateEnv";
require("dotenv").config();

(async () => {
  if (!validateEnv()) return;
  const client = new Client({ intents: IntentOptions });

  client.on("ready", async () => await onReady(client));

  client.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction, client)
  );

  await client.login(process.env.TOKEN);
})();
