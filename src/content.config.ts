import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    category: z.string(),
    date: z.date(),
    price: z.number(),
  }),
});

export const collections = {
  blog: blogCollection,
};
