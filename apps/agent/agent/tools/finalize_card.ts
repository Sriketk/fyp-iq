import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Produce a shareable summary card after the session ends.",
  inputSchema: z.object({
    fypIq: z.number().min(0).max(200).describe("final FYP IQ score"),
    title: z.string().describe("card headline, e.g. 'Certified Brainrot Enjoyer'"),
    highlights: z.array(z.string()).min(1).max(5),
  }),
  async execute(input) {
    return { ok: true, card: input };
  },
});
