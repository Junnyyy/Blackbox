import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information on using this bot."),
  run: async (interaction, client) => {
    await interaction.deferReply();

    const helpEmbed = new MessageEmbed()
      .setColor("#ffeded")
      .setTitle("Help!")
      .setDescription(
        "Blackbox is an all-encompassing server management bot. Designed with server staff and user-friendliness in mind."
      )
      .addField(
        "Ping",
        "To check the current ping to the discord API use `/ping`."
      )
      .setTimestamp()
      .setFooter(
        `${client.user?.tag}`,
        `${client.user?.avatarURL({ format: "png" })}`
      );
    // helpEmbed.setFooter({ text: `Version ${process.env.npm_package_version}` });
    await interaction.editReply({ embeds: [helpEmbed] });
    return;
  },
};
