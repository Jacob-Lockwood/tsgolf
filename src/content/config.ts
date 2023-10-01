import { z, defineCollection } from "astro:content";

const examples = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    has_explanation: z.boolean(),
  }),
});

export const collections = { examples };
