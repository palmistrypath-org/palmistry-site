/**
 * Build the Palmistry Path digital product suite.
 *
 *   node scripts/build-products.mjs            # all products
 *   node scripts/build-products.mjs journal    # one product (quickstart | journal | handbook)
 *   node scripts/build-products.mjs --no-previews
 *
 * Each product lives in products/<slug>/src.html and may pull in fragments with
 *   <!-- @include chapters/part1-foundations.html -->
 * The assembled page goes to products/<slug>/build/<slug>.html and is printed to
 * products/dist/<File Name>.pdf by headless Chrome. Page numbers for the contents
 * page come from a two-pass render: the first PDF is scanned for hidden
 * §anchor§ markers (span.anchor), the numbers are written into the matching
 * <span class="p" data-for="…"> slots, and the page is printed again.
 *
 * The Journal is printed twice: the screen edition and an ink-conscious print
 * edition (?edition=print switches the stylesheet's paper variables).
 *
 * Previews: products/dist/previews/<slug>/page-NN.png (for review) and
 * products/dist/previews/<slug>-cover.png (store listing asset) via PyMuPDF.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const productsDir = join(root, 'products');
const distDir = join(productsDir, 'dist');
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const PRODUCTS = {
	quickstart: { file: 'Palmistry Path - Quick Start Guide.pdf', editions: [''] },
	journal: { file: 'Palmistry Path - Palm Reading Practice Journal.pdf', editions: ['', 'print'] },
	handbook: { file: 'Palmistry Path - Foundations Handbook.pdf', editions: [''] },
};

const args = process.argv.slice(2);
const wantPreviews = !args.includes('--no-previews');
const selected = args.filter((a) => !a.startsWith('--'));
const slugs = selected.length ? selected : Object.keys(PRODUCTS);

function assemble(slug) {
	const dir = join(productsDir, slug);
	const src = readFileSync(join(dir, 'src.html'), 'utf8');
	return src.replace(/<!--\s*@include\s+([^\s]+)\s*-->/g, (_, rel) => {
		const p = join(dir, rel);
		if (!existsSync(p)) throw new Error(`${slug}: include not found: ${rel}`);
		// Fragments live one level deeper than the build dir; re-root shared asset paths.
		return readFileSync(p, 'utf8').replace(/src="\.\.\/shared\//g, 'src="../../shared/');
	}).replace(/(<section class="chapter" data-part="[^"]+" data-chapter="(\d+)">)/g, '$1<span class="anchor">§ch$2§</span>');
}

function printPdf(htmlPath, pdfPath, query = '') {
	const url = pathToFileURL(htmlPath).href + (query ? `?${query}` : '');
	execFileSync(CHROME, [
		'--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files',
		'--virtual-time-budget=8000', '--run-all-compositor-stages-before-draw', '--hide-scrollbars',
		`--print-to-pdf=${pdfPath}`, url,
	], { stdio: 'pipe' });
	// Chrome leaves the @page margins unpainted; lay the ground beneath every page.
	execFileSync('python', [join(here, 'lib', 'pdf-paint.py'), pdfPath, query.includes('print') ? '#f6f1e7' : '#07050d'], { stdio: 'pipe' });
	return statSync(pdfPath).size;
}

function anchorPages(pdfPath) {
	// Returns { anchorId: pageNumber } by scanning page text for §id§ markers.
	const out = execFileSync('python', [join(here, 'lib', 'pdf-anchors.py'), pdfPath], { encoding: 'utf8' });
	return JSON.parse(out);
}

function fillPageNumbers(html, pages) {
	let missing = [];
	const filled = html.replace(/<span class="p" data-for="([^"]+)"><\/span>/g, (m, id) => {
		if (pages[id] == null) { missing.push(id); return m; }
		return `<span class="p" data-for="${id}">${pages[id]}</span>`;
	});
	if (missing.length) console.warn(`  ! no page found for anchors: ${missing.join(', ')}`);
	return filled;
}

function renderPreviews(pdfPath, slug, edition) {
	const outDir = join(distDir, 'previews', slug + (edition ? `-${edition}` : ''));
	mkdirSync(outDir, { recursive: true });
	execFileSync('python', [join(here, 'lib', 'pdf-previews.py'), pdfPath, outDir], { stdio: 'inherit' });
}

mkdirSync(distDir, { recursive: true });
for (const slug of slugs) {
	const meta = PRODUCTS[slug];
	if (!meta) { console.error(`unknown product: ${slug}`); process.exit(1); }
	const buildDir = join(productsDir, slug, 'build');
	mkdirSync(buildDir, { recursive: true });
	const htmlPath = join(buildDir, `${slug}.html`);
	let html = assemble(slug);
	writeFileSync(htmlPath, html);

	for (const edition of meta.editions) {
		const name = edition ? meta.file.replace(/\.pdf$/, ` (${edition[0].toUpperCase()}${edition.slice(1)} Edition).pdf`) : meta.file;
		const pdfPath = join(distDir, name);
		const query = edition ? `edition=${edition}` : '';
		process.stdout.write(`${slug}${edition ? ` [${edition}]` : ''}: pass 1 …`);
		printPdf(htmlPath, pdfPath, query);
		const pages = anchorPages(pdfPath);
		const filled = fillPageNumbers(html, pages);
		if (filled !== html) {
			writeFileSync(htmlPath, filled);
			process.stdout.write(' pass 2 …');
			printPdf(htmlPath, pdfPath, query);
		}
		const count = Object.values(pages).length ? anchorPages(pdfPath).__pages : '?';
		console.log(` ${name} (${count} pages, ${(statSync(pdfPath).size / 1024 / 1024).toFixed(1)} MB)`);
		if (wantPreviews) renderPreviews(pdfPath, slug, edition);
	}
}
