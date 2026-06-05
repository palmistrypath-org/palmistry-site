import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			relatedLesson: z.string().optional(),
			cluster: z.string().optional(),
			affiliate: z.boolean().optional(),
		}),
});

const lessons = defineCollection({
	loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			module: z.string(),
			moduleTitle: z.string(),
			order: z.number(),
			pubDate: z.coerce.date(),
			difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
			duration: z.number(),
			prerequisites: z.array(z.string()).optional(),
			relatedArticle: z.string().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog, lessons };
