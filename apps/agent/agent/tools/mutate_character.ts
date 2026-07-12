import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Mutate the user's character state based on the latest video rating.",
  inputSchema: z.object({
    fatnessDelta: z.number().min(-20).max(20),
    sweatDelta: z.number().min(-20).max(20),
    glazeDelta: z.number().min(-20).max(20),
    reason: z.string(),
  }),
  async execute(input) {
    return { ok: true, delta: input };
  },
});
