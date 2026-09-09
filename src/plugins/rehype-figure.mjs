/**
 * rehype-figure — turn a markdown image that stands alone in a paragraph
 *
 *     ![alt text](/images/diagrams/heart-line.svg "Caption text")
 *
 * into the site's figure plate:
 *
 *     <figure class="pp-figure reveal reveal--scale">
 *       <div class="pp-figure-frame"><img … loading="lazy"></div>
 *       <figcaption>Caption text</figcaption>
 *     </figure>
 *
 * This is what lets plain `.md` articles carry the same diagram treatment as
 * MDX lessons using <Figure>. Styles live in global.css under "Figure plates".
 * The image title becomes the caption; alt text stays on the <img>. End the
 * title with `{inset}` to render a narrower plate.
 */
export default function rehypeFigure() {
	return (tree) => {
		walk(tree, (node, index, parent) => {
			if (!parent || node.type !== 'element' || node.tagName !== 'p') return;
			const kids = (node.children || []).filter(
				(c) => !(c.type === 'text' && c.value.trim() === ''),
			);
			if (kids.length !== 1) return;
			const img = kids[0];
			if (img.type !== 'element' || img.tagName !== 'img') return;

			const props = { ...(img.properties || {}) };
			let caption = props.title ? String(props.title) : '';
			delete props.title;
			let inset = false;
			if (/\{inset\}\s*$/.test(caption)) {
				inset = true;
				caption = caption.replace(/\s*\{inset\}\s*$/, '');
			}
			props.loading = props.loading || 'lazy';
			props.decoding = props.decoding || 'async';

			const className = ['pp-figure', 'reveal', 'reveal--scale'];
			if (inset) className.push('pp-figure--inset');

			const children = [
				{
					type: 'element',
					tagName: 'div',
					properties: { className: ['pp-figure-frame'] },
					children: [{ ...img, properties: props }],
				},
			];
			if (caption) {
				children.push({
					type: 'element',
					tagName: 'figcaption',
					properties: {},
					children: [{ type: 'text', value: caption }],
				});
			}
			parent.children[index] = {
				type: 'element',
				tagName: 'figure',
				properties: { className },
				children,
			};
		});
	};
}

function walk(node, fn, parent = null, index = null) {
	if (!node) return;
	fn(node, index, parent);
	const children = node.children;
	if (!children) return;
	for (let i = 0; i < children.length; i++) walk(children[i], fn, node, i);
}
