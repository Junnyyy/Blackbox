import { MessageEmbed, User } from "discord.js";

export function createEmbeded(
  title: string,
  message: string,
  user: User
): MessageEmbed {
  return new MessageEmbed()
    .setColor("#ffeded")
    .setTitle(title)
    .setDescription(message)
    .setTimestamp()
    .setFooter(`${user.tag}`, `${user.avatarURL({ format: "png" })}`);
}
