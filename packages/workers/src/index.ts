import { Hono } from "hono";
import { nexusVerifyMiddleware } from "@hiyocord/hiyocord-nexus-core";
import { fetchHandler } from '@hiyocord/discord-interaction-client';
import { resolver } from "./register";

const app = new Hono<{Bindings: {HIYOCORD_SECRET: string}}>();

app.use("/interactions", nexusVerifyMiddleware)
app.mount("/interactions", fetchHandler(resolver).fetch)

export default app
