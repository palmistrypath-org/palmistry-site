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
export const ADSENSE_PUB_ID = '';

// Paid checkout URL for the premium guide.
// Leave empty while the Complete Reference is waitlist-only.
export const PREMIUM_GUIDE_URL = '';
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
			'What palmistry is, how to approach a reading, and the basic structures of the hand — shape, texture and flexibility, the thumb and fingers, and the active and passive hands.',
		difficulty: 'Beginner',
	},
	{
		slug: 'lines',
		title: 'The Major Lines',
		description:
			'The four major lines — Heart, Head, Life, and Fate — plus the simian line: the shared vocabulary of line quality, then how to locate each line and read its length, depth, and course.',
		difficulty: 'Beginner',
	},
	{
		slug: 'mounts',
		title: 'The Mounts',
		description:
			'The seven planetary mounts across the eight mount regions of the palm, their traditional associations, and how to read relative prominence and flatness.',
		difficulty: 'Beginner',
	},
	{
		slug: 'advanced',
		title: 'Minor Lines & Synthesis',
		description:
			'The minor lines — Sun, Mercury, relationship lines, and the Girdle of Venus — and how to bring a whole hand together into one coherent reading.',
		difficulty: 'Intermediate',
	},
];
