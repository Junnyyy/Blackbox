import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping command"),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;

    const returnMessage = new MessageEmbed();
    returnMessage.setTitle("Ping!");
    returnMessage.setDescription("Pong!");
    returnMessage.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });

    await interaction.editReply({ embeds: [returnMessage] });
  },
};
