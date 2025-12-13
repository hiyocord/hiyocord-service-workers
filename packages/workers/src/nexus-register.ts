import { InteractionType } from "../../../../hiyocord-packages/packages/discord-interaction-client/dist/types";
import { registry } from "./register";

const handlers = registry.get(InteractionType.ApplicationCommand);

// TODO register command handlers
handlers.forEach(it => {
});


