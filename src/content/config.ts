import { z, defineCollection } from "astro:content";

const examples = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    has_explanation: z.boolean(),
  }),
});

const tips = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    skill: z
      .literal("beginner")
      .or(z.literal("intermediate"))
      .or(z.literal("advanced")),
  }),
});

export const collections = { examples, tips };
