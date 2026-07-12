import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Rate a TikTok video across brainrot axes based on the frame + metadata.",
  inputSchema: z.object({
    videoId: z.string(),
    brainrot: z.number().min(0).max(100),
    coherence: z.number().min(0).max(100),
    editIntensity: z.number().min(0).max(100),
    humor: z.number().min(0).max(100),
    informationDensity: z.number().min(0).max(100),
    tag: z.string().describe("one-line summary of the clip vibe"),
  }),
  async execute(input) {
    return { ok: true, rating: input };
  },
});
