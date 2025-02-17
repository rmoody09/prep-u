import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "prep-u", // choose a unique identifier for your project
  apiKey: process.env.TRIGGER_SECRET_KEY,
});