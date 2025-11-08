import { Hono } from "hono";

const app = new Hono<{}>();

// TODO nexusからのリクエストかを検証する
app.all("/interactions", async (c) => {
  return c.json({
    "type": 4,
    "data": {
      "content": "hi, this response is from service worker"
    }
  });
})

export default app
