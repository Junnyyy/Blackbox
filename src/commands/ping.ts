import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Transmits Websocket latency and ping."),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;

    let output: string = `**Gateway:** Online ✅`;
    output += `\n**Websocket Latency:** ${interaction.client.ws.ping} ms`;
    output += `\n**API Latency:** ${
      Date.now() - interaction.createdTimestamp
    } ms`;

    // Alternative Embeded (Triggers typescript errors)
    // const returnMessage = {
    //   color: "ffeded",
    //   title: `**Pong** 🏓`,
    //   description: output,
    //   timestamp: new Date(),
    //   footer: {
    //     text: user.tag,
    //     icon_url: user.displayAvatarURL(),
    //   },
    // };

    const returnMessage = new MessageEmbed()
      .setColor("#ffeded")
      .setTitle(`**Pong** 🏓`)
      .setDescription(output)
      .setTimestamp()
      .setFooter(`${user.tag}`, `${user.avatarURL({ format: "png" })}`);
    // returnMessage.setAuthor({
    //   name: user.tag,
    //   iconURL: user.displayAvatarURL(),
    // });

    await interaction.editReply({ embeds: [returnMessage] });
  },
};
