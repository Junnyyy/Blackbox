import { REST } from "@discordjs/rest";
import { Client } from "discord.js";
import { Routes } from "discord-api-types/v9";
import { CommandList } from "../commands/_Commandlists";

export const onReady = async (client: Client) => {
  const rest = new REST({ version: "9" }).setToken(process.env.token as string);

  const commandData = CommandList.map((command) => command.data.toJSON());

  // client.application?.commands.set([]);
  await rest.put(
    Routes.applicationGuildCommands(
      client.user?.id || "missing id",
      process.env.GUILD_ID as string
    ),
    { body: commandData }
  );

  console.log(`${client.user?.username} is online ⚡`);
  console.log("Initialization complete");
};
