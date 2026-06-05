export const SITE_TITLE = 'Palmistry Path';

// Amazon Associates affiliate tag.
// Replace 'palmpath-20' with your real tag once you're enrolled at
// affiliate-program.amazon.com — then also find-and-replace 'palmpath-20'
// in any Markdown files that contain affiliate links directly.
export const AMAZON_TAG = 'palmpath-20';

// Google AdSense publisher ID.
// Format: 'ca-pub-XXXXXXXXXXXXXXXX'
// Leave empty ('') to disable AdSense (no script loads). Set it to your
// real ID from adsense.google.com to enable auto-ads sitewide.
export const ADSENSE_PUB_ID = 'ca-pub-1942922884645361';

// Gumroad product URL for the premium guide.
// After creating your product at gumroad.com, paste the product URL here.
// Example: 'https://palmistrypath.gumroad.com/l/complete-reference'
export const PREMIUM_GUIDE_URL = 'https://palmistrypath.gumroad.com/l/complete-reference';
export const SITE_DESCRIPTION =
	'An educational resource on palm reading grounded in Indian, Chinese, and Western traditions.';

export interface ModuleConfig {
	slug: string;
	title: string;
	description: string;
	difficulty: string;
}

export const MODULES: ModuleConfig[] = [
	{
		slug: 'foundations',
		title: 'Foundations',
		description:
			'What palmistry is, how to approach a reading, and the basic structures of the hand — shape, skin texture, and the active and passive hands.',
		difficulty: 'Beginner',
	},
	{
		slug: 'lines',
		title: 'The Lines',
		description:
			'The four major lines — Heart, Head, Life, and Fate — and the key minor lines: Sun, Mercury, Girdle of Venus, and more.',
		difficulty: 'Beginner – Intermediate',
	},
	{
		slug: 'mounts',
		title: 'The Mounts',
		description:
			'The eight mounts of the palm, their traditional associations, and how to read relative prominence and flatness.',
		difficulty: 'Intermediate',
	},
	{
		slug: 'advanced',
		title: 'Advanced Interpretation',
		description:
			'Reading the hand as a whole, reconciling cross-tradition differences, and developing a consistent interpretive practice.',
		difficulty: 'Advanced',
	},
];
