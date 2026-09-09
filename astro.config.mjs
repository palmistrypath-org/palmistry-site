// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { defineConfig, fontProviders } from 'astro/config';
import { shouldIncludeInSitemap } from './src/indexability.mjs';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://palmistrypath.com',
	markdown: {
		// Wrap standalone markdown images in the site figure plate (src/plugins/rehype-figure.mjs)
		rehypePlugins: [rehypeFigure],
	},
	integrations: [
		mdx(),
		sitemap({
			filter: shouldIncludeInSitemap,
		}),
		pagefind({
			indexConfig: {
				rootSelector: 'main:not([data-pagefind-ignore])',
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Cinzel',
			cssVariable: '--font-cinzel',
			fallbacks: ['serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Lora',
			cssVariable: '--font-lora',
			fallbacks: ['serif'],
		},
	],
});
