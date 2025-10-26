import { registry } from "./register";

export default {
  registry,
  service: {
    baseUrl: "https://nexus-test.hiyocord.org",
    id: "org.hiyocord.nexus-test1",
    name: "hiyocord nexus test service workers",
    description: "test",
    permissions: [
      {
        type: "DISCORD_API_SCOPE",
        scopes: {
          "/guilds/:guildId": ["GET"]
        }
      }
    ],
    messageComponentIds: [],
    modalSubmitIds: []
  },
  signing: {
    algorithm: process.env["ALGORITHM"],
    publicKey: process.env["PUBLIC_KEY"]
  }
}

