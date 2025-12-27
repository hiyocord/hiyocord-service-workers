import { ApplicationCommandHandler, createBuilder, MessageFlags } from "@hiyocord/discord-interaction-client";

export default {
  name: "test2",
  description: "test guild command",
  guildIds: [
    "1195385456976724068"
  ],
  handle: async c => {
    return createBuilder(c)
      .reply()
      .content(`hi, this response is from service worker. ${c.id}`)
      .flags(MessageFlags.Ephemeral)
      .build();
  }
} satisfies ApplicationCommandHandler;

