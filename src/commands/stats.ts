import { SlashCommandBuilder } from "@discordjs/builders";
import { version } from "discord.js";
import { Command } from "../interfaces/Command";
import { createEmbeded } from "../utils/embeded";
const config = require("../config.json");

export const stats: Command = {
  data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Transmits Bot Statistics"),
  run: async (interaction, client) => {
    await interaction.deferReply();
    const { user } = interaction;

    if (user.id === config.creatorID) {
      let message: string = `• Mem Usage  : ${(
        process.memoryUsage().heapUsed /
        1024 /
        1024
      ).toFixed(2)} MB`;
      message += `\n• Uptime     : ${convertMS(client.uptime)} `;
      message += `\n• Users      : ${client.users.cache.size.toLocaleString()}`;
      message += `\n• Servers    : ${client.guilds.cache.size.toLocaleString()}`;
      message += `\n• Channels   : ${client.channels.cache.size.toLocaleString()}`;
      message += `\n• Discord.js : v${version}`;
      message += `\n• Node       : ${process.version}`;

      const returnMessage = createEmbeded(
        "**Stats** 📊",
        message,
        user,
        client
      );

      await interaction.editReply({ embeds: [returnMessage] });
    } else {
      let message: string = `You do not have the appropriate permissions for this command.`;

      const returnMessage = createEmbeded(
        "**DENIED** 🚫",
        message,
        user,
        client
      );

      await interaction.editReply({ embeds: [returnMessage] });
    }
  },
};

function convertMS(milliseconds: number | null) {
  var days, hours, minutes, second;
  second = Math.floor(milliseconds! / 1000); //gets seconds
  minutes = Math.floor(second / 60); //get minutes from seconds
  second = second % 60; // adjusts seconds to get remaining seconds
  hours = Math.floor(minutes / 60); //get hours from minutes
  minutes = minutes % 60; // gets remaining minutes
  days = Math.floor(hours / 24); //days from hours
  hours = hours % 24; //get remaining hours
  hours += days * 24; //adds in days as hours
  return `${days}d ${hours}h ${minutes}m ${second}s`; //returns info as string
}
