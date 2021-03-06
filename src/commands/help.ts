import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";
import config from "../config.json";

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information on using this bot."),
  run: async (interaction, client) => {
    await interaction.deferReply();

    const helpEmbed = new MessageEmbed()
      .setColor("#ffeded")
      .setTitle("**Help** ⛑")
      .setDescription(config.about)
      .addField(
        "Ping 🏓",
        "To view the current Websocket & Discord API ping use `/ping`."
      )
      .addField(
        "Stats 📊",
        "To view the current statistics of the bot use `/stats`.\nOnly available to the bot's owner."
      )
      .setTimestamp()
      .setFooter({
        text: `${client.user?.tag}`,
        iconURL: `${client.user?.avatarURL({ format: "png" })}`,
      });
    // helpEmbed.setFooter({ text: `Version ${process.env.npm_package_version}` });
    await interaction.editReply({ embeds: [helpEmbed] });
    return;
  },
};
