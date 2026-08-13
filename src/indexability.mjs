const NOINDEX_PATHS = new Set([
	'/404/',
	'/contact/',
	'/guide/thank-you/',
	'/search/',
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
