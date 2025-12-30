import { exit } from "process";
import { registry } from "./register";
import { createManifest, InteractionHandlerRegistry } from "@hiyocord/hiyocord-nexus-core/src";



const manifest = createManifest(registry as any as InteractionHandlerRegistry, {
  baseUrl: "https://nexus-test.hiyocord.org",
  id: "org.hiyocord.nexus-test",
  name: "hiyocord nexus test service workers",
  description: "test",
  permissions: [{
    type: "DISCORD_API_SCOPE",
    scopes: {
      "/guilds/:guildId": ["GET"]
    }
  }]
})

console.error(JSON.stringify(manifest))
const response = await fetch("https://nexus.hiyocord.org/manifest", {
  method: "POST",
  body: JSON.stringify(manifest)
})

if(response.ok) {
  console.log(`OK: Nexus POST /manifest ${response.status}`)
} else {
  console.log(`Fail: Nexus POST /manifest ${response.status}`)
  exit(1)
}
