export interface EditorialVisual {
	src: string;
	eyebrow: string;
	alt: string;
	position?: string;
}

const ROOT = '/images/editorial-mystic';

const categoryHeaders: Record<string, EditorialVisual> = {
	'beginner/life-line': {
		src: `${ROOT}/category-headers/header-life-line-16x9.webp`,
		eyebrow: 'Life line',
		alt: 'Editorial illustration of the life line curving around the base of the thumb',
	},
	'beginner/head-line': {
		src: `${ROOT}/category-headers/header-head-line-16x9.webp`,
		eyebrow: 'Head line',
		alt: 'Editorial illustration of the head line crossing the center of the palm',
	},
	'beginner/heart-line': {
		src: `${ROOT}/category-headers/header-heart-line-16x9.webp`,
		eyebrow: 'Heart line',
		alt: 'Editorial illustration of the heart line beneath the fingers',
	},
	'beginner/fate-line': {
		src: `${ROOT}/category-headers/header-fate-line-16x9.webp`,
		eyebrow: 'Fate line',
		alt: 'Editorial illustration of the fate line rising through the center of the palm',
	},
	'beginner/mounts-overview': {
		src: `${ROOT}/category-headers/header-mounts-16x9.webp`,
		eyebrow: 'Mounts',
		alt: 'Editorial palm illustration with the mount regions softly highlighted',
	},
	'beginner/crosses-stars-palmistry': {
		src: `${ROOT}/category-headers/header-signs-markings-16x9.webp`,
		eyebrow: 'Signs & markings',
		alt: 'Editorial palm detail with a restrained star marking',
	},
	'beginner/how-to-read-a-palm': {
		src: `${ROOT}/category-headers/header-beginner-palmistry-16x9.webp`,
		eyebrow: 'Beginner palmistry',
		alt: 'Simple editorial hand illustration for a beginner palm-reading guide',
	},
	'beginner/minor-lines-overview': {
		src: `${ROOT}/category-headers/header-minor-lines-16x9.webp`,
		eyebrow: 'Minor lines',
		alt: 'Editorial detail of the finer secondary lines of the palm',
	},
};

const clusterHeroes: Record<string, EditorialVisual> = {
	'getting-started': {
		src: `${ROOT}/article-heroes/article-hero-beginner-howto-16x9.webp`,
		eyebrow: 'Beginner guide',
		alt: 'Refined line illustration of a palm with major features picked out in muted color',
	},
	'hand-shape': {
		src: `${ROOT}/article-heroes/article-hero-beginner-howto-16x9.webp`,
		eyebrow: 'Hand structure',
		alt: 'Refined line illustration of a palm with major features picked out in muted color',
	},
	'major-lines': {
		src: `${ROOT}/article-heroes/article-hero-major-line-16x9.webp`,
		eyebrow: 'Major lines',
		alt: 'Editorial palm illustration with one major line emphasized in teal',
	},
	'line-variations': {
		src: `${ROOT}/article-heroes/article-hero-major-line-16x9.webp`,
		eyebrow: 'Line variations',
		alt: 'Editorial palm illustration with one major line emphasized in teal',
	},
	mounts: {
		src: `${ROOT}/article-heroes/article-hero-mount-16x9.webp`,
		eyebrow: 'Mounts',
		alt: 'Editorial palm illustration with one mount region softly highlighted',
	},
	markings: {
		src: `${ROOT}/article-heroes/article-hero-sign-marking-16x9.webp`,
		eyebrow: 'Signs & markings',
		alt: 'Editorial palm illustration with a restrained symbolic marking',
	},
	'minor-lines': {
		src: `${ROOT}/article-heroes/article-hero-sign-marking-16x9.webp`,
		eyebrow: 'Minor lines',
		alt: 'Editorial palm illustration with a restrained symbolic marking',
	},
	'relationship-lines': {
		src: `${ROOT}/article-heroes/article-hero-sign-marking-16x9.webp`,
		eyebrow: 'Relationship lines',
		alt: 'Editorial palm illustration with a restrained symbolic marking',
	},
	traditions: {
		src: `${ROOT}/article-heroes/article-hero-comparison-faq-16x9.webp`,
		eyebrow: 'Traditions compared',
		alt: 'Two line-drawn palms arranged for a careful comparison',
	},
	resources: {
		src: `${ROOT}/article-heroes/article-hero-comparison-faq-16x9.webp`,
		eyebrow: 'Reference',
		alt: 'Two line-drawn palms arranged for a careful comparison',
	},
};

const fallbackVisual: EditorialVisual = {
	src: `${ROOT}/article-heroes/article-hero-comparison-faq-16x9.webp`,
	eyebrow: 'Palmistry reference',
	alt: 'Two line-drawn palms arranged for a careful comparison',
};

export function getArticleVisual(postId: string, cluster?: string): EditorialVisual {
	return categoryHeaders[postId] ?? (cluster ? clusterHeroes[cluster] : undefined) ?? fallbackVisual;
}

export const moduleHeaderVisuals: Record<string, EditorialVisual> = {
	foundations: categoryHeaders['beginner/how-to-read-a-palm'],
	lines: {
		src: `${ROOT}/category-headers/header-life-line-16x9.webp`,
		eyebrow: 'Learning path',
		alt: 'Editorial illustration of the life line and neighboring major creases',
	},
	mounts: categoryHeaders['beginner/mounts-overview'],
	advanced: categoryHeaders['beginner/minor-lines-overview'],
};
