import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    path: z.string(),
    coverImage: z.string().optional(),
    excerpt: z.string().optional(),
    shortTitle: z.string().optional(),
    imageAlt: z.string().optional(),
    homeList: z.boolean().optional(),
    unlisted: z.boolean().optional(),
  }),
});

const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    extendedDescription: z.string().optional(),
    path: z.string(),
    coverImage: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    path: z.string(),
    videoSrcURL: z.string().optional(),
    videoTitle: z.string().optional(),
    posterImg: z.string().optional(),
  }),
});

export const collections = {
  'posts': posts,
  'features': features,
  'talks': talks,
};
