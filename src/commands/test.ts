import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: `test`,
  execute: function (message) {
    // Replace the permission number at the end to request the permissions you wish to request. By default, this will request Admin perms.
    message.reply(
      `Hey Manny u lookin fresh today mo fucka. i would fo su hit dat`,
    );
  },
});
