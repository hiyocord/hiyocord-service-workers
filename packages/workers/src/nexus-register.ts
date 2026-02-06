import { exit } from "process";
import { registry } from "./register";
import { createManifest, InteractionHandlerRegistry } from "@hiyocord/hiyocord-nexus-core";

const manifest = createManifest(registry as InteractionHandlerRegistry, {
  baseUrl: "https://nexus-test.hiyocord.org",
  id: "org.hiyocord.nexus-test1",
  name: "hiyocord nexus test service workers",
  description: "test",
  permissions: [{
    type: "DISCORD_API_SCOPE",
    scopes: {
      "/guilds/:guildId": ["GET"]
    }
  }],
  signatureAlgorithm: process.argv[2] as any,
  publicKey: process.argv[3]
})

console.log(JSON.stringify(manifest, null, 2))
const response = await fetch(`${process.env.NEXUS_URL}/api/manifests`, {
  method: "POST",
  body: JSON.stringify(manifest),
  headers: {
    "Content-Type": "application/json",
  }
})

if(response.ok) {
  console.log(`OK: Nexus POST /manifest ${response.status}`)
} else {
  console.error(`Fail: Nexus POST /manifest ${response.status}`)
  console.error(JSON.stringify(await response.json(), null, 2))
  exit(1)
}
