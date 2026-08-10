// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { defineConfig, fontProviders } from 'astro/config';
import { shouldIncludeInSitemap } from './src/indexability.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://palmistrypath.com',
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
