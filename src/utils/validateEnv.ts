export const validateEnv = () => {
  if (!process.env.TOKEN) {
    console.warn("Missing Discord bot token.");
    return false;
  }

  if (!process.env.GUILD_ID) {
    console.warn("Missing Guild ID.");
    return false;
  }

  if (!process.env.CREATORID) {
    console.warn("Missing Creator ID.");
    return false;
  }

  if (!process.env.ACTIVITYTYPE) {
    console.warn("Missing default activity type.");
    return false;
  }

  if (!process.env.ACTIVITYMESSAGE) {
    console.warn("Missing default activity message.");
    return false;
  }

  if (!process.env.STATUS) {
    console.warn("Missing default status.");
    return false;
  }

  if (!process.env.ABOUT) {
    console.warn("Missing about message.");
    return false;
  }

  return true;
};
