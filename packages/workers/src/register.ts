import { InteractionType, SimpleInteractionHandlerRegistry, SimpleInteractionHandlerResolver } from '@hiyocord/discord-interaction-client';
import test from './test';

export const registry = new SimpleInteractionHandlerRegistry();

[
  test
].forEach(handler => {
  registry.register(InteractionType.ApplicationCommand, handler);
});

export const resolver = new SimpleInteractionHandlerResolver(registry);
