/* empty css                            */import { A as AstroError, l as UnknownContentCollectionError, f as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, j as renderComponent, u as unescapeHTML, e as createAstro, m as maybeRenderHead, h as addAttribute, F as Fragment } from '../astro_9677f808.mjs';
import 'clsx';
import { $ as $$Image, a as $$Main, b as $$Layout, g as getThumbnail } from './404_082d292d.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { buildClient } from '@xata.io/client';
import { format } from 'date-fns';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/dwight-schrute.md": () => import('../dwight-schrute_86c81b99.mjs'),"/src/content/authors/jim-halpert.md": () => import('../jim-halpert_e96a731f.mjs'),"/src/content/authors/michael-scott.md": () => import('../michael-scott_ffaee18f.mjs'),"/src/content/authors/pam-beesely.md": () => import('../pam-beesely_b386b43f.mjs'),"/src/content/posts/behind-the-scenes-with-our-artists.md": () => import('../behind-the-scenes-with-our-artists_888b23ee.mjs'),"/src/content/posts/collaboration-in-music-production.md": () => import('../collaboration-in-music-production_684e3c9a.mjs'),"/src/content/posts/creating-a-successful-music-brand.md": () => import('../creating-a-successful-music-brand_b491a828.mjs'),"/src/content/posts/gear-is-insanely-expensive.md": () => import('../gear-is-insanely-expensive_d0077ce6.mjs'),"/src/content/posts/guitar-solos-are-still-awesome.md": () => import('../guitar-solos-are-still-awesome_cf304ba9.mjs'),"/src/content/posts/live-music-is-crucial.md": () => import('../live-music-is-crucial_31c0c1e3.mjs'),"/src/content/posts/making-a-home-studio.md": () => import('../making-a-home-studio_11dafca2.mjs'),"/src/content/posts/the-art-of-music-production.md": () => import('../the-art-of-music-production_13365ca0.mjs'),"/src/content/posts/the-importance-of-audio-quality.md": () => import('../the-importance-of-audio-quality_b473d543.mjs'),"/src/content/posts/tune-your-snare-drum.md": () => import('../tune-your-snare-drum_c98ccee9.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/test/1.json": () => import('../1_da541f32.mjs'),"/src/content/test/2.json": () => import('../2_5ae2f974.mjs'),"/src/content/test/3.json": () => import('../3_06eac908.mjs')

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"test":{"type":"data","entries":{"1":"/src/content/test/1.json","2":"/src/content/test/2.json","3":"/src/content/test/3.json"}},"authors":{"type":"content","entries":{"dwight-schrute":"/src/content/authors/dwight-schrute.md","jim-halpert":"/src/content/authors/jim-halpert.md","michael-scott":"/src/content/authors/michael-scott.md","pam-beesely":"/src/content/authors/pam-beesely.md"}},"posts":{"type":"content","entries":{"behind-the-scenes-with-our-artists":"/src/content/posts/behind-the-scenes-with-our-artists.md","collaboration-in-music-production":"/src/content/posts/collaboration-in-music-production.md","creating-a-successful-music-brand":"/src/content/posts/creating-a-successful-music-brand.md","gear-is-insanely-expensive":"/src/content/posts/gear-is-insanely-expensive.md","live-music-is-crucial":"/src/content/posts/live-music-is-crucial.md","guitar-solos-are-still-awesome":"/src/content/posts/guitar-solos-are-still-awesome.md","making-a-home-studio":"/src/content/posts/making-a-home-studio.md","the-art-of-music-production":"/src/content/posts/the-art-of-music-production.md","the-importance-of-audio-quality":"/src/content/posts/the-importance-of-audio-quality.md","tune-your-snare-drum":"/src/content/posts/tune-your-snare-drum.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/dwight-schrute.md": () => import('../dwight-schrute_2abbc1f2.mjs'),"/src/content/authors/jim-halpert.md": () => import('../jim-halpert_b5244850.mjs'),"/src/content/authors/michael-scott.md": () => import('../michael-scott_31acacdc.mjs'),"/src/content/authors/pam-beesely.md": () => import('../pam-beesely_a087a986.mjs'),"/src/content/posts/behind-the-scenes-with-our-artists.md": () => import('../behind-the-scenes-with-our-artists_fa350d2e.mjs'),"/src/content/posts/collaboration-in-music-production.md": () => import('../collaboration-in-music-production_8772acb1.mjs'),"/src/content/posts/creating-a-successful-music-brand.md": () => import('../creating-a-successful-music-brand_6442cfa8.mjs'),"/src/content/posts/gear-is-insanely-expensive.md": () => import('../gear-is-insanely-expensive_ede8303f.mjs'),"/src/content/posts/guitar-solos-are-still-awesome.md": () => import('../guitar-solos-are-still-awesome_bbb5e511.mjs'),"/src/content/posts/live-music-is-crucial.md": () => import('../live-music-is-crucial_4600a84b.mjs'),"/src/content/posts/making-a-home-studio.md": () => import('../making-a-home-studio_b8367b94.mjs'),"/src/content/posts/the-art-of-music-production.md": () => import('../the-art-of-music-production_771b56c4.mjs'),"/src/content/posts/the-importance-of-audio-quality.md": () => import('../the-importance-of-audio-quality_d54d13ee.mjs'),"/src/content/posts/tune-your-snare-drum.md": () => import('../tune-your-snare-drum_29131a5c.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$e = createAstro("https://astrocourse-demo.netlify.app");
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-teal-900 font-bold mb-16">${text}</h1>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/H1.astro", void 0);

const $$Astro$d = createAstro("https://astrocourse-demo.netlify.app");
const $$Category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Category;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="text-teal-900 rounded-3xl uppercase text-xl border-2 border-teal-900 whitespace-nowrap p-2"${addAttribute(`/category/${category}`, "href")}>${category}</a>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Category.astro", void 0);

const $$Astro$c = createAstro("https://astrocourse-demo.netlify.app");
const $$CategoryList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CategoryList;
  const { categories, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-[auto,1fr] gap-x-14 gap-y-3 mb-16 max-lg:grid-cols-1">${title && renderTemplate`<h2 class="font-bold text-5xl text-teal-900">${title}</h2>`}<div class="flex gap-4 flex-wrap items-center">${categories.map((category) => renderTemplate`${renderComponent($$result, "Category", $$Category, { "category": category })}`)}</div></div>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/CategoryList.astro", void 0);

const $$Astro$b = createAstro("https://astrocourse-demo.netlify.app");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  const author = await getEntryBySlug("authors", post.data.author);
  return renderTemplate`${maybeRenderHead()}<article><a${addAttribute(`/blog/${post.slug}`, "href")}>${renderComponent($$result, "Image", $$Image, { "class": "rounded-2xl shadow-xl mb-6 aspect-thumbnail object-cover", "src": post.data.image, "alt": post.data.title, "width": 600, "height": 600 / 2 })}</a><a class="text-4xl text-zinc-900 mb-4 font-semibold inline-block"${addAttribute(`/blog/${post.slug}`, "href")}><h2 class="text-2xl font-bold mb-2">${post.data.title}</h2></a><p class="text-zinc-500 text-2xl mb-9 line-clamp-3">${post.body}</p><div class="flex justify-between items-center">${author ? renderTemplate`<a class="text-zinc-900 text-2xl font-bold"${addAttribute(`/author/${author?.slug}`, "href")}>${author.data.name}</a>` : null}<span class="text-zinc-700 text-xl">${post.data.date}</span></div></article>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Post.astro", void 0);

const $$Astro$a = createAstro("https://astrocourse-demo.netlify.app");
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-32 max-md:grid-cols-1 max-sm:gap-y-14">${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)}</div>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/PostList.astro", void 0);

const $$Astro$9 = createAstro("https://astrocourse-demo.netlify.app");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page, numberOfPosts } = Astro2.props;
  const postsPerPage = 2;
  const hasPreviousPosts = page > 1;
  const hasNextPosts = numberOfPosts > page * postsPerPage;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between">${hasPreviousPosts ? renderTemplate`<a class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl"${addAttribute(`?page=${page - 1}`, "href")}>
Previous
</a>` : renderTemplate`<div></div>`}${hasNextPosts ? renderTemplate`<a class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl"${addAttribute(`?page=${page + 1}`, "href")}>
Next
</a>` : renderTemplate`<div></div>`}</div>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Pagination.astro", void 0);

const $$Astro$8 = createAstro("https://astrocourse-demo.netlify.app");
const $$slug$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$slug$2;
  const page = Number(Astro2.url.searchParams.get("page")) || 1;
  const postsPerPage = 2;
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const category = Astro2.params.slug;
  const allPosts = await getCollection("posts");
  const postsByCategory = allPosts.filter((post) => post.data.categories.includes(category));
  const posts = postsByCategory.slice(start, end);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Rhythm Nation", "description": "Read and Learn from Music Producers and Enthusiasts" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<a class="text-zinc-500 text-2xl mb-16 underline block" href="/blog">
&larr; Back to all Blogs
</a>${renderComponent($$result3, "H1", $$H1, { "text": "Rhythm Nation Blog" })}<p class="text-zinc-900 text-2xl mb-24 max-sm:mb-14">
Join the Community and learn from Music Producers and Enthusiasts
</p>${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": [category], "title": "Posts Tagged" })}${posts.length === 0 ? renderTemplate`<p>Not posts were found with that tag.</p>` : renderTemplate`<div class="mb-12">${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": postsByCategory.length })}</div>${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })}<div class="mb-36">${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": postsByCategory.length })}</div>`}` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/category/[slug].astro", void 0);

const $$file$2 = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/category/[slug].astro";
const $$url$2 = "/category/[slug]";

const _slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://astrocourse-demo.netlify.app");
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { slug } = Astro2.params;
  const author = await getEntryBySlug("authors", slug);
  if (!author) {
    return Astro2.redirect("/404");
  }
  const allPosts = await getCollection("posts");
  const posts = allPosts.filter((post) => post.data.author === author.slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": author.data.name, "description": "src/pages/author/[slug].astro" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<a class="text-zinc-500 text-2xl mb-16 underline block" href="/blog">
&larr; Back to all Blogs</a>${renderComponent($$result3, "H1", $$H1, { "text": `Posts by ${author.data.name}` })}<div class="mb-60">${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })}</div>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/author/[slug].astro", void 0);

const $$file$1 = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/author/[slug].astro";
const $$url$1 = "/author/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const tables = [
  {
    name: "users",
    columns: [
      { name: "name2", type: "string", notNull: true, defaultValue: "" },
      { name: "password", type: "string", notNull: true, defaultValue: "" },
      {
        name: "email",
        type: "email",
        notNull: true,
        defaultValue: "test@test.com"
      },
      { name: "name", type: "string", notNull: true, defaultValue: "" }
    ],
    revLinks: [{ column: "user", table: "comments" }]
  },
  {
    name: "comments",
    columns: [
      { name: "post", type: "string", notNull: true, defaultValue: "" },
      { name: "text", type: "text", notNull: true, defaultValue: "" },
      { name: "user", type: "link", link: { table: "users" } },
      { name: "date", type: "datetime", notNull: true, defaultValue: "now" }
    ]
  },
  {
    name: "subscribers",
    columns: [{ name: "email", type: "email", unique: true }]
  }
];
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL: "https://Jaime-Aleman-s-workspace-8p9k0c.us-east-1.xata.sh/db/astrocourse-demo"
};
class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

const $$Astro$6 = createAstro("https://astrocourse-demo.netlify.app");
const $$Share = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Share;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sticky top-10"><div class="flex flex-col gap-y-8 @md:bg-green-400 @lg:bg-red-400 @xl:bg-blue-400"><a${addAttribute(`https://twitter.com/intent/tweet?url=https://rhythm.nation/blog/${post.slug}`, "href")}><svg class="text-zinc-500" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.289 8.52345C17.289 3.91691 21.0223 0.182861 25.6267 0.182861C28.3296 0.182861 30.488 1.46145 31.9344 3.31694C33.4877 2.99913 34.9485 2.42436 36.2701 1.64022C35.7491 3.26929 34.6464 4.63894 33.2088 5.50569L33.2125 5.51411C34.6224 5.34297 35.9637 4.96806 37.2128 4.41457L37.2099 4.41907C36.3112 5.76489 35.1816 6.95297 33.8829 7.92091C33.9528 8.39126 33.9883 8.86473 33.9883 9.33545C33.9883 19.1656 26.4995 30.5989 12.7233 30.5989C8.50416 30.5989 4.57451 29.3627 1.2668 27.2405C0.647017 26.8429 0.466953 26.0181 0.864612 25.3984C0.899732 25.3435 0.938212 25.2923 0.979572 25.2443C1.21552 24.8539 1.66501 24.6157 2.14773 24.6725C4.58843 24.9603 7.02848 24.6627 9.17917 23.7232C7.04603 22.7824 5.39011 20.9593 4.67211 18.7193C4.54291 18.3163 4.6356 17.875 4.91603 17.5579C4.92576 17.5469 4.93565 17.5362 4.94571 17.5256C3.23709 16.0218 2.15928 13.8189 2.15928 11.3638V11.2736C2.15928 10.8484 2.38429 10.4549 2.7508 10.2393C2.87123 10.1685 3.00099 10.1203 3.13419 10.0949C2.54797 8.96412 2.21643 7.67958 2.21643 6.31889C2.21643 5.07108 2.22357 3.49846 3.10219 2.08217C3.29915 1.76467 3.62021 1.57107 3.96373 1.52521C4.46901 1.36633 5.04232 1.51918 5.39749 1.95473C8.30763 5.52337 12.5084 7.98889 17.2898 8.63897L17.289 8.52345ZM12.7233 27.9323C10.6237 27.9323 8.60749 27.5827 6.72661 26.9395C9.01365 26.5435 11.2082 25.6424 13.0991 24.1605C13.499 23.8472 13.6582 23.316 13.4967 22.8344C13.3352 22.3529 12.888 22.0252 12.3801 22.0162C10.5058 21.9831 8.84565 21.0591 7.80781 19.6492C8.31541 19.6082 8.81141 19.521 9.29187 19.3911C9.82941 19.2458 10.1963 18.7497 10.178 18.1932C10.1596 17.6366 9.76077 17.1658 9.2148 17.0562C7.13851 16.6394 5.46355 15.1137 4.83117 13.1246C5.3668 13.254 5.92272 13.3309 6.49285 13.3496C7.02835 13.3671 7.51056 13.0276 7.67453 12.5175C7.83848 12.0074 7.64443 11.4504 7.19901 11.1526C5.64061 10.1108 4.61643 8.33238 4.61643 6.31889C4.61643 5.87236 4.62272 5.47382 4.64947 5.11251C8.26973 8.79769 13.2233 11.1715 18.7357 11.449C19.1527 11.47 19.5554 11.2945 19.8239 10.9748C20.0923 10.655 20.1955 10.228 20.1027 9.82091C20.0068 9.40046 19.9556 8.96758 19.9556 8.52345C19.9556 5.38894 22.4958 2.84953 25.6267 2.84953C28.9181 2.84953 31.3216 5.89889 31.3216 9.33545C31.3216 18.0189 24.7205 27.9323 12.7233 27.9323Z" fill="currentColor"></path></svg></a><a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=https://rhythm.nation/blog/${post.slug}`, "href")}><svg class="text-zinc-500" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33317 0.666626C1.86042 0.666626 0.666504 1.86055 0.666504 3.33329V32.6666C0.666504 34.1394 1.86042 35.3333 3.33317 35.3333H32.6665C34.1393 35.3333 35.3332 34.1394 35.3332 32.6666V3.33329C35.3332 1.86055 34.1393 0.666626 32.6665 0.666626H3.33317ZM6.13317 14H11.1998V30H6.13317V14ZM11.5332 8.67996C11.5332 10.2632 10.2497 11.5466 8.6665 11.5466C7.0833 11.5466 5.79984 10.2632 5.79984 8.67996C5.79984 7.09673 7.0833 5.81329 8.6665 5.81329C10.2497 5.81329 11.5332 7.09673 11.5332 8.67996ZM29.9998 20.2856C29.9998 15.4722 26.8889 13.6008 23.7985 13.6008C22.7866 13.551 21.7791 13.7631 20.8765 14.2161C20.1911 14.5601 19.4736 15.3472 18.9203 16.716H18.7779V14.0011H13.9998V30.0125H19.0829V21.4965C19.0094 20.6243 19.2886 19.4971 19.8596 18.8263C20.4307 18.1555 21.2475 17.9953 21.8669 17.9139H22.0601C23.6765 17.9139 24.8761 18.9147 24.8761 21.4364V30.0125H29.959L29.9998 20.2856Z" fill="currentColor"></path></svg></a></div></div>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Share.astro", void 0);

const $$Astro$5 = createAstro("https://astrocourse-demo.netlify.app");
const $$TableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-10"><ul class="flex flex-col @md:bg-green-400 @lg:bg-red-400 @xl:bg-blue-400 mt-0 pt-0">${headings.map((heading) => {
    return renderTemplate`<li class="text-lg mb-4 text-zinc-500"><a${addAttribute(`#${heading.slug}`, "href")}>#${heading.text}</a></li>`;
  })}</ul></nav>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/TableOfContents.astro", void 0);

const $$Astro$4 = createAstro("https://astrocourse-demo.netlify.app");
const $$Comment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Comment;
  const { comment } = Astro2.props;
  const initials = comment.user?.name.split(" ").map((part) => part[0]).join("");
  const formattedDate = format(comment.date, "MMM d, yyyy");
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-x-12 items-start"><span class="text-teal-900 rounded-full border border-teal-900 font-bold text-xl px-5 py-5">${initials}</span><div><span class="text-zinc-700 font-bold text-xl mr-5"${addAttribute(comment.id, "id")}>${comment.user?.name}</span><span class="text-zinc-500 text-xl">${formattedDate}</span><p class="text-zinc-500 text-2xl mt-2">${comment.text}</p></div></div>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Comment.astro", void 0);

const $$Astro$3 = createAstro("https://astrocourse-demo.netlify.app");
const $$CommentList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CommentList;
  const { comments } = Astro2.props;
  return renderTemplate`${comments.map((comment, index) => {
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index !== 0 ? renderTemplate`${maybeRenderHead()}<hr class="border-zinc-300 my-8">` : null}${renderComponent($$result2, "Comment", $$Comment, { "comment": comment })}` })}`;
  })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/CommentList.astro", void 0);

const $$Astro$2 = createAstro("https://astrocourse-demo.netlify.app");
const $$CommentForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CommentForm;
  const user = Astro2.cookies.get("userId");
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("posts", slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${user?.value ? renderTemplate`${maybeRenderHead()}<form method="POST" class="grid grid-cols-[1fr,auto] gap-x-3 gap-y-2 items-end max-md:grid-cols-1"><div class="flex flex-col"><label for="comment" class="text-zinc-900 text-2xl mb-2">
Leave a comment
</label><textarea class="border border-teal-900 rounded-lg text-2xl px-6 py-6" name="comment" id="comment" cols="30" rows="5"></textarea></div><input type="hidden" name="post" id="post"${addAttribute(post.slug, "value")}><button type="submit" class="text-2xl text-zinc-100 bg-teal-900 px-6 py-5 rounded-xl my-1">
Add a comment
</button></form>` : renderTemplate`<p class="text-zinc-700 text-2xl mt-4 mb-24">
Please
<a class="text-teal-900 underline"${addAttribute(`/login?redirect=/blog/${post.slug}#comments`, "href")}>
login
</a>
to comment.
</p>`}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/CommentForm.astro", void 0);

const $$Astro$1 = createAstro("https://astrocourse-demo.netlify.app");
const $$PostMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const { post } = Astro2.props;
  const author = await getEntryBySlug("authors", post.data.author);
  if (!author) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center mb-10"><div class="flex items-center gap-x-2"><a${addAttribute(`/author/${author.slug}`, "href")}>${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.name, "width": 48, "height": 48, "format": "webp", "class": "rounded-full border-2 border-teal-500 aspect-square object-cover w-12" })}</a><a class="text-zinc-600 text-2xl font-bold"${addAttribute(`/author/${author.slug}`, "href")}>${author.data.name}</a></div></div>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/PostMeta.astro", void 0);

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const xata = new XataClient({ apiKey: "xau_IgWn59fWqVPx0SR1Z3SZgfTQPzjyWhlM" });
  const user = Astro2.cookies.get("userId");
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const post2 = data.get("post");
    const comment = data.get("comment");
    if (!user.value) {
      return Astro2.redirect(`/login?redirect=/blog/${post2.slug}#comments`);
    }
    await xata.db.comments.create({
      post: post2,
      text: comment,
      date: /* @__PURE__ */ new Date(),
      user: user.value
    });
  }
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("posts", slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const author = await getEntryBySlug("authors", post.data.author);
  if (!author) {
    return Astro2.redirect("/404");
  }
  const posts = await getCollection("posts");
  const remainingPosts = posts.filter((p) => p.slug !== post.slug);
  const relatedPosts = remainingPosts.filter(
    (p) => p.data.categories.some((category) => post.data.categories.includes(category))
  );
  const comments = await xata.db.comments.select(["id", "text", "date", "user.name"]).filter({ post: post.slug }).getMany();
  const { Content, headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "image": getThumbnail(post.data.title) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="text-zinc-500 text-2xl mb-16">
← <a href="/blog" class="underline">Back to all blogs</a></div><div class="mb-4">${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": post.data.categories })}</div>${renderComponent($$result3, "H1", $$H1, { "text": post.data.title })}${renderComponent($$result3, "PostMeta", $$PostMeta, { "post": post })}${renderComponent($$result3, "Image", $$Image, { "class": "rounded-2xl shadow-xl mb-28 aspect-thumbnail object-cover", "src": post.data.image, "alt": post.data.title, "width": 1024, "height": 1024 / 1.5, "format": "webp" })}<div class="flex relative gap-x-12 @container"><div class="hidden xl:flex">${renderComponent($$result3, "Share", $$Share, { "post": post })}</div><div class="prose prose-2xl overflow-visible relative"><div class="flex xl:hidden justify-between">${renderComponent($$result3, "Share", $$Share, { "post": post })}${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })}</div>${renderComponent($$result3, "Content", Content, {})}</div><div class="hidden xl:flex">${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })}</div></div>` })}<div class="bg-teal-100/30 py-14 px-24 relative border-b border-teal-900 mt-44"><div class="max-w-7xl mx-auto"><div id="comments" class=""><span class="font-bold text-teal-900 text-4xl mr-12">Comments</span><span class="border border-teal-900 text-teal-900 rounded-full px-4 py-2 font-bold text-xl">${comments.length}</span></div><div class="mb-14">${renderComponent($$result2, "CommentForm", $$CommentForm, {})}</div>${renderComponent($$result2, "CommentList", $$CommentList, { "comments": comments })}</div></div><div class="px-24 py-20 max-w-7xl mx-auto"><p class="font-bold text-teal-900 text-4xl mb-16">Related posts</p>${renderComponent($$result2, "PostList", $$PostList, { "posts": relatedPosts })}</div>` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$H1 as $, XataClient as X, _slug_$2 as _, $$CategoryList as a, $$Pagination as b, $$PostList as c, _slug_$1 as d, _slug_ as e, getCollection as g };
