import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_239cac6a.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_9677f808.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_620eb5ce.mjs');
const _page1  = () => import('./chunks/index_115b6fd6.mjs');
const _page2  = () => import('./chunks/failure_30ca85b2.mjs');
const _page3  = () => import('./chunks/success_63dd80b2.mjs');
const _page4  = () => import('./chunks/_slug__d360837c.mjs');
const _page5  = () => import('./chunks/rss_1544ac90.mjs');
const _page6  = () => import('./chunks/_slug__429fc562.mjs');
const _page7  = () => import('./chunks/logout_0d67790c.mjs');
const _page8  = () => import('./chunks/signup_ad0aa096.mjs');
const _page9  = () => import('./chunks/login_48adbb18.mjs');
const _page10  = () => import('./chunks/_slug__e22946cb.mjs');
const _page11  = () => import('./chunks/blog_8d962749.mjs');
const _page12  = () => import('./chunks/test_ca363ed1.mjs');
const _page13  = () => import('./chunks/404_c77b8fa5.mjs');
const _page14  = () => import('./chunks/newsletter_5a4a9858.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/newsletter/failure.astro", _page2],["src/pages/newsletter/success.astro", _page3],["src/pages/category/[slug].astro", _page4],["src/pages/rss.xml.ts", _page5],["src/pages/author/[slug].astro", _page6],["src/pages/logout.astro", _page7],["src/pages/signup.astro", _page8],["src/pages/login.astro", _page9],["src/pages/blog/[slug].astro", _page10],["src/pages/blog.astro", _page11],["src/pages/test.astro", _page12],["src/pages/404.astro", _page13],["src/pages/api/newsletter.ts", _page14]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
