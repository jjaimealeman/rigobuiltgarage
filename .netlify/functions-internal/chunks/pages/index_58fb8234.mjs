/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_9677f808.mjs';
import 'clsx';
import { a as $$CategoryList, g as getCollection, $ as $$H1, c as $$PostList } from './_slug__346ce338.mjs';
import { $ as $$Image, a as $$Main, b as $$Layout } from './404_082d292d.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '@xata.io/client';
import 'date-fns';
import '../astro-assets-services_63ebd146.mjs';
/* empty css                            */import '@cloudinary/url-gen';
import '@cloudinary/url-gen/actions/overlay';
import '@cloudinary/url-gen/qualifiers/source';
import '@cloudinary/url-gen/qualifiers/textStyle';

const $$Astro$1 = createAstro("https://astrocourse-demo.netlify.app");
const $$FeaturedPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedPost;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-cols-2 gap-x-12 gap-y-5 max-lg:grid-cols-1 max-sm:mb-12 mb-28"><a class=""${addAttribute(`/blog/${post.slug}`, "href")}>${renderComponent($$result, "Image", $$Image, { "class": "rounded-2xl aspect-thumbnail object-cover", "src": post.data.image, "width": 1024, "height": 1024 / 2, "alt": post.data.title, "loading": "eager" })}</a><div class=""><div class="mb-4">${renderComponent($$result, "CategoryList", $$CategoryList, { "categories": post.data.categories })}</div><a class="text-5xl text-zinc-900 mb-4 font-bold"${addAttribute(`/blog/${post.slug}`, "href")}><h2>${post.data.title}</h2></a><p class="text-zinc-500 text-2xl mb-9 line-clamp-3 max-xl:line-clamp-2">${post.body}</p><span class="text-zinc-700 text-xl">${post.data.date}</span></div></article>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/FeaturedPost.astro", void 0);

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const featuredPosts = allPosts.filter((post) => post.data.featured);
  const posts = allPosts.filter((post) => !post.data.featured).slice(0, 4);
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "description": "the homepage" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "H1", $$H1, { "text": "Rhythm Nation Blog" })}${maybeRenderHead()}<p class="text-zinc-900 text-2xl mb-24 max-sm:mb-14">
Join the community and learn from Music Producers and Enthusiasts.
</p>${featuredPosts.map((post) => renderTemplate`${renderComponent($$result3, "FeaturedPost", $$FeaturedPost, { "post": post })}`)}<hr class="w-full border border-teal-900 mb-16 max-sm:mb-10">${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": categories, "title": "Recent Posts" })}<div class="mb-32">${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })}</div><div class="flex justify-end mb-60 max-sm:mb-36"><a class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl" href="/blog">Check out more Content</a></div>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/index.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
