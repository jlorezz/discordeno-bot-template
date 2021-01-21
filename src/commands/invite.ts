import { botID } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: `invite`,
  preCheck: function (message, args, guild) {
    return {};
  },
  execute: function (message, args, res, guild) {
    // Replace the permission number at the end to request the permissions you wish to request. By default, this will request Admin perms.
    message.reply(
      `https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=8`,
    );
    return {};
  },
  postCheck: function (message, args, res, guild) {
    return {};
  },
});
