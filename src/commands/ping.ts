import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import { createEmbeded } from "../utils/embeded";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Transmits Websocket latency and ping."),
  run: async (interaction, client) => {
    await interaction.deferReply();
    const { user } = interaction;

    let message: string = `**Gateway:** Online ✅`;
    message += `\n**Websocket Latency:** ${client.ws.ping} ms`;
    message += `\n**API Latency:** ${
      Date.now() - interaction.createdTimestamp
    } ms`;

    const returnMessage = createEmbeded("**Pong** 🏓", message, user, client);

    await interaction.editReply({ embeds: [returnMessage] });
  },
};
