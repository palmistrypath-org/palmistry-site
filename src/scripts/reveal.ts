/**
 * Scroll reveal — marks `.reveal` elements as `.is-in` when they enter the
 * viewport. Purely additive: without JS everything is visible; with reduced
 * motion the CSS disables the transition. Elements already on screen at load
 * (the hero) are revealed on the next frame so the page breathes in.
 */
const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
if (els.length) {
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) {
		els.forEach((el) => el.classList.add('is-in'));
	} else {
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-in');
						io.unobserve(entry.target);
					}
				}
			},
			{ rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
		);
		els.forEach((el) => io.observe(el));
	}
}
