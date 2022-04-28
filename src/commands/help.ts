import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information on using this bot."),
  run: async (interaction, client) => {
    await interaction.deferReply();
    const helpEmbed = new MessageEmbed();
    helpEmbed.setTitle("Hi I'm blackbox");
    helpEmbed.setDescription(
      "This discord bot is designed to help you manage your server."
    );
    helpEmbed.addField(
      "Ping",
      "To check the current ping to the discord API use `/ping`."
    );
    helpEmbed.setFooter({ text: `Version ${process.env.npm_package_version}` });
    await interaction.editReply({ embeds: [helpEmbed] });
    return;
  },
};
