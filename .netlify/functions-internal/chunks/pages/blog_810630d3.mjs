/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_9677f808.mjs';
import 'clsx';
import { g as getCollection, $ as $$H1, a as $$CategoryList, b as $$Pagination, c as $$PostList } from './_slug__346ce338.mjs';
import { a as $$Main, b as $$Layout } from './404_082d292d.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '@xata.io/client';
import 'date-fns';
import '../astro-assets-services_63ebd146.mjs';
/* empty css                            */import '@cloudinary/url-gen';
import '@cloudinary/url-gen/actions/overlay';
import '@cloudinary/url-gen/qualifiers/source';
import '@cloudinary/url-gen/qualifiers/textStyle';

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const page = Number(Astro2.url.searchParams.get("page")) || 1;
  const postsPerPage = 6;
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const allPosts = await getCollection("posts");
  const posts = allPosts.slice(start, end);
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Rhythm Nation", "description": "Read and Learn from Music Producers and Enthusiasts" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "H1", $$H1, { "text": "Rhythm Nation Blog" })}${maybeRenderHead()}<p class="text-zinc-900 text-2xl mb-24 max-sm:mb-14">
Join the Community &amp; learn from Music Producers and Enthusiasts
</p><div class="mb-12">${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": categories, "title": "Tags" })}${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": allPosts.length })}</div>${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })}<div class="mb-36">${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": allPosts.length })}</div>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/blog.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
