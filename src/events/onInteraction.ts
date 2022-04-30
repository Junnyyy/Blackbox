import { Client, Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandLists";

export const onInteraction = async (
  interaction: Interaction,
  client: Client
) => {
  if (interaction.isCommand()) {
    for (const Command of CommandList) {
      if (interaction.commandName == Command.data.name) {
        await Command.run(interaction, client);
        break;
      }
    }
  }
};
