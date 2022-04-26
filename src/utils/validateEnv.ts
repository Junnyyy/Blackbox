export const validateEnv = () => {
  if (!process.env.TOKEN) {
    console.warn("Missing Discord bot token.");
    return false;
  }

  if (!process.env.GUILD_ID) {
    console.warn("Missing Guild ID.");
    return false;
  }

  return true;
};
