const NOINDEX_PATHS = new Set([
	'/contact/',
	'/guide/thank-you/',
	'/search/',
	// Redirect stub for the Simian lesson's pre-Batch-3E URL. Kept resolvable for
	// inbound links, but canonicalised to /learn/advanced/simian-line/ and held out
	// of the sitemap and Pagefind so it is not duplicate indexable lesson content.
	'/learn/lines/06-simian-line/',
]);

const PRIVATE_PATHS = new Set([
	'/print/complete-reference/',
]);

export function normalizeSitePath(input) {
	const pathname = input instanceof URL ? input.pathname : new URL(input, 'https://palmistrypath.com').pathname;
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function isNoindexPath(input) {
	return NOINDEX_PATHS.has(normalizeSitePath(input));
}

export function isPrivatePath(input) {
	return PRIVATE_PATHS.has(normalizeSitePath(input));
}

export function shouldIncludeInSitemap(input) {
	const pathname = normalizeSitePath(input);
	return !NOINDEX_PATHS.has(pathname) && !PRIVATE_PATHS.has(pathname);
}

export const INDEXABILITY_POLICY = {
	noindexPaths: [...NOINDEX_PATHS],
	privatePaths: [...PRIVATE_PATHS],
};
