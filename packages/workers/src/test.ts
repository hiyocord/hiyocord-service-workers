import { ApplicationCommandHandler, createBuilder, MessageFlags } from "@hiyocord/discord-interaction-client";

export default {
  name: "test",
  description: "test command",
  handle: async c => {
    return createBuilder(c)
      .reply()
      .content(`hi, this response is from service worker. ${c.id}`)
      .flags(MessageFlags.Ephemeral)
      .build();
  }
} satisfies ApplicationCommandHandler;

