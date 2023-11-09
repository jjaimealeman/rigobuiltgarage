// 1. IMPORT UTILITIES FROM ASTRO:CONTENT
import { z, defineCollection } from "astro:content";
import { format } from "date-fns";

// 2. DEFINE YOUR COLLECTIONS
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      categories: z.array(z.string()),
      date: z
        .string()
        .transform((str: string | number | Date) =>
          format(new Date(str), "MMMM d, yyyy"),
        ),
      featured: z.boolean().default(false),
      image: image(),
      title: z.string(),
      description: z.string(),
    }),
});

const testCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: z.object({
    name: z.string().max(10, { message: "Name must be less than 10 chars" }),
    price: z.number(),
    color: z.string().optional(),
    brand: z.string(),
    category: z.enum([
      "electronics",
      "clothing",
      "accessories",
      "home",
      "kitchen",
    ]),
  }),
});

const authorsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
    }),
});

// 3. EXPORT A SINGLE 'COLLECTIONS' OBJECT TO REGISTER YOUR COLLECTION(S)
//    THIS KEY SHOULD MATCH YOUR COLLECTION DIRECTORY NAME IN /src/content
export const collections = {
  posts: postsCollection,
  test: testCollection,
  authors: authorsCollection,
};
