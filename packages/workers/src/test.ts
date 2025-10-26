import { ApplicationCommandHandler, createBuilder } from "@hiyocord/discord-interaction-client";
import { MessageFlags } from 'discord-api-types/v10';

export default {
  name: "test",
  description: "test command",
  guildIds: [],
  handle: async c => {
    return createBuilder(c)
      .reply()
      .content(`hi, this response is from service worker. ${c.id}`)
      .flags(MessageFlags.Ephemeral)
      .build();
  }
} satisfies ApplicationCommandHandler;

