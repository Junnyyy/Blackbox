export const validateEnv = () => {
  if (!process.env.token) {
    console.warn("Missing Discord bot token.");
    return false;
  }
  return true;
};
