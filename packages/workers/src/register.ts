import { SimpleInteractionHandlerRegistry, SimpleInteractionHandlerResolver } from '@hiyocord/discord-interaction-client';
import test from './test';
import test2 from './test-guild';
import { InteractionType } from 'discord-api-types/v10';

export const registry = new SimpleInteractionHandlerRegistry();

[
  test,
  test2
].forEach(handler => {
  registry.register(InteractionType.ApplicationCommand, handler);
});

export const resolver = new SimpleInteractionHandlerResolver(registry);
