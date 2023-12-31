import "cookie";
import "kleur/colors";
import "string-width";
import "@astrojs/internal-helpers/path";
import "./chunks/astro_9677f808.mjs";
import "clsx";
import "mime";
import { compile } from "path-to-regexp";
import "html-escaper";

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"));
    else if (proc.argv.includes("--silent"));
    else;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map((segment) => {
      return (
        "/" +
        segment
          .map((part) => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`;
            } else if (part.dynamic) {
              return `:${part.content}`;
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, "%3F")
                .replace(/#/g, "%23")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
          })
          .join("")
      );
    })
    .join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash,
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes,
  };
}

const manifest = deserializeManifest({
  adapterName: "@astrojs/netlify/functions",
  routes: [
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        route: "/_image",
        pattern: "^\\/_image$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component: "node_modules/astro/dist/assets/endpoint/generic.js",
        pathname: "/_image",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/",
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/newsletter/failure",
        type: "page",
        pattern: "^\\/newsletter\\/failure\\/?$",
        segments: [
          [{ content: "newsletter", dynamic: false, spread: false }],
          [{ content: "failure", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/newsletter/failure.astro",
        pathname: "/newsletter/failure",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/newsletter/success",
        type: "page",
        pattern: "^\\/newsletter\\/success\\/?$",
        segments: [
          [{ content: "newsletter", dynamic: false, spread: false }],
          [{ content: "success", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/newsletter/success.astro",
        pathname: "/newsletter/success",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/category/[slug]",
        type: "page",
        pattern: "^\\/category\\/([^/]+?)\\/?$",
        segments: [
          [{ content: "category", dynamic: false, spread: false }],
          [{ content: "slug", dynamic: true, spread: false }],
        ],
        params: ["slug"],
        component: "src/pages/category/[slug].astro",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/rss.xml",
        type: "endpoint",
        pattern: "^\\/rss\\.xml$",
        segments: [[{ content: "rss.xml", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/rss.xml.ts",
        pathname: "/rss.xml",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/author/[slug]",
        type: "page",
        pattern: "^\\/author\\/([^/]+?)\\/?$",
        segments: [
          [{ content: "author", dynamic: false, spread: false }],
          [{ content: "slug", dynamic: true, spread: false }],
        ],
        params: ["slug"],
        component: "src/pages/author/[slug].astro",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [{ type: "external", src: "/_astro/_slug_.75226135.css" }],
      routeData: {
        route: "/logout",
        type: "page",
        pattern: "^\\/logout\\/?$",
        segments: [[{ content: "logout", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/logout.astro",
        pathname: "/logout",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/signup",
        type: "page",
        pattern: "^\\/signup\\/?$",
        segments: [[{ content: "signup", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/signup.astro",
        pathname: "/signup",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/login",
        type: "page",
        pattern: "^\\/login\\/?$",
        segments: [[{ content: "login", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/login.astro",
        pathname: "/login",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/blog/[slug]",
        type: "page",
        pattern: "^\\/blog\\/([^/]+?)\\/?$",
        segments: [
          [{ content: "blog", dynamic: false, spread: false }],
          [{ content: "slug", dynamic: true, spread: false }],
        ],
        params: ["slug"],
        component: "src/pages/blog/[slug].astro",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/blog",
        type: "page",
        pattern: "^\\/blog\\/?$",
        segments: [[{ content: "blog", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/blog.astro",
        pathname: "/blog",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
        {
          type: "inline",
          content:
            ".list[data-astro-cid-6d7mwtum]>.item[data-astro-cid-6d7mwtum]{transition:scale .2s,translate .2s}.list[data-astro-cid-6d7mwtum]>.item[data-astro-cid-6d7mwtum]:hover{scale:1.3}.list[data-astro-cid-6d7mwtum]>.item[data-astro-cid-6d7mwtum]:has(~.item:hover){translate:-1.5rem}.list[data-astro-cid-6d7mwtum]>.item[data-astro-cid-6d7mwtum]:hover~.item[data-astro-cid-6d7mwtum]{translate:1.5rem}.list[data-astro-cid-6d7mwtum]>.item[data-astro-cid-6d7mwtum]:has(+.item:hover),.list[data-astro-cid-6d7mwtum]>.item[data-astro-cid-6d7mwtum]:hover+.item[data-astro-cid-6d7mwtum]{scale:1.1}\n",
        },
      ],
      routeData: {
        route: "/test",
        type: "page",
        pattern: "^\\/test\\/?$",
        segments: [[{ content: "test", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/test.astro",
        pathname: "/test",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/_slug_.75226135.css" },
        { type: "external", src: "/_astro/_slug_.4051d105.css" },
      ],
      routeData: {
        route: "/404",
        type: "page",
        pattern: "^\\/404\\/?$",
        segments: [[{ content: "404", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/404.astro",
        pathname: "/404",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/api/newsletter",
        type: "endpoint",
        pattern: "^\\/api\\/newsletter$",
        segments: [
          [{ content: "api", dynamic: false, spread: false }],
          [{ content: "newsletter", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/api/newsletter.ts",
        pathname: "/api/newsletter",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  site: "https://astrocourse-demo.netlify.app",
  base: "/",
  compressHTML: true,
  componentMetadata: [
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/404.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/author/[slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/blog.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/blog/[slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/category/[slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/index.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/login.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/newsletter/failure.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/newsletter/success.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/signup.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/test.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    ["\u0000astro:content", { propagation: "in-tree", containsHead: false }],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/CommentForm.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/blog/[slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astrojs-ssr-virtual-entry",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Post.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/PostList.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/author/[slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/blog@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/category/[slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/index@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/PostMeta.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/rss.xml.ts",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/rss.xml@_@ts",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/test@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000empty-middleware": "_empty-middleware.mjs",
    "/src/pages/blog.astro": "chunks/pages/blog_81e163e5.mjs",
    "/src/pages/newsletter/failure.astro": "chunks/pages/failure_cbfb68a8.mjs",
    "/node_modules/astro/dist/assets/endpoint/generic.js":
      "chunks/pages/generic_8b7c3354.mjs",
    "/src/pages/index.astro": "chunks/pages/index_5ef86734.mjs",
    "/src/pages/login.astro": "chunks/pages/login_d51f48b5.mjs",
    "/src/pages/logout.astro": "chunks/pages/logout_35b72eaf.mjs",
    "/src/pages/api/newsletter.ts": "chunks/pages/newsletter_7b92f498.mjs",
    "/src/pages/rss.xml.ts": "chunks/pages/rss_01365988.mjs",
    "/src/pages/signup.astro": "chunks/pages/signup_9f4b33de.mjs",
    "/src/pages/newsletter/success.astro": "chunks/pages/success_7f49b2d4.mjs",
    "/src/pages/test.astro": "chunks/pages/test_4d4d1d18.mjs",
    "\u0000@astrojs-manifest": "manifest_a02d329c.mjs",
    "\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":
      "chunks/generic_620eb5ce.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "chunks/index_0e657eca.mjs",
    "\u0000@astro-page:src/pages/newsletter/failure@_@astro":
      "chunks/failure_30ca85b2.mjs",
    "\u0000@astro-page:src/pages/newsletter/success@_@astro":
      "chunks/success_63dd80b2.mjs",
    "\u0000@astro-page:src/pages/category/[slug]@_@astro":
      "chunks/_slug__084cddee.mjs",
    "\u0000@astro-page:src/pages/rss.xml@_@ts": "chunks/rss_84ed8cba.mjs",
    "\u0000@astro-page:src/pages/author/[slug]@_@astro":
      "chunks/_slug__e6fbb896.mjs",
    "\u0000@astro-page:src/pages/logout@_@astro": "chunks/logout_0d67790c.mjs",
    "\u0000@astro-page:src/pages/signup@_@astro": "chunks/signup_1d5b252a.mjs",
    "\u0000@astro-page:src/pages/login@_@astro": "chunks/login_2d3004de.mjs",
    "\u0000@astro-page:src/pages/blog/[slug]@_@astro":
      "chunks/_slug__d24a226d.mjs",
    "\u0000@astro-page:src/pages/blog@_@astro": "chunks/blog_beb33b24.mjs",
    "\u0000@astro-page:src/pages/test@_@astro": "chunks/test_bfbf2163.mjs",
    "\u0000@astro-page:src/pages/404@_@astro": "chunks/404_c77b8fa5.mjs",
    "\u0000@astro-page:src/pages/api/newsletter@_@ts":
      "chunks/newsletter_63c9275b.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/dwight-schrute.md?astroContentCollectionEntry=true":
      "chunks/dwight-schrute_86c81b99.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/jim-halpert.md?astroContentCollectionEntry=true":
      "chunks/jim-halpert_e96a731f.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/michael-scott.md?astroContentCollectionEntry=true":
      "chunks/michael-scott_ffaee18f.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/pam-beesely.md?astroContentCollectionEntry=true":
      "chunks/pam-beesely_b386b43f.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/behind-the-scenes-with-our-artists.md?astroContentCollectionEntry=true":
      "chunks/behind-the-scenes-with-our-artists_888b23ee.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/collaboration-in-music-production.md?astroContentCollectionEntry=true":
      "chunks/collaboration-in-music-production_684e3c9a.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/creating-a-successful-music-brand.md?astroContentCollectionEntry=true":
      "chunks/creating-a-successful-music-brand_b491a828.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/gear-is-insanely-expensive.md?astroContentCollectionEntry=true":
      "chunks/gear-is-insanely-expensive_d0077ce6.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/guitar-solos-are-still-awesome.md?astroContentCollectionEntry=true":
      "chunks/guitar-solos-are-still-awesome_cf304ba9.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/live-music-is-crucial.md?astroContentCollectionEntry=true":
      "chunks/live-music-is-crucial_31c0c1e3.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/making-a-home-studio.md?astroContentCollectionEntry=true":
      "chunks/making-a-home-studio_11dafca2.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/the-art-of-music-production.md?astroContentCollectionEntry=true":
      "chunks/the-art-of-music-production_13365ca0.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/the-importance-of-audio-quality.md?astroContentCollectionEntry=true":
      "chunks/the-importance-of-audio-quality_b473d543.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/tune-your-snare-drum.md?astroContentCollectionEntry=true":
      "chunks/tune-your-snare-drum_c98ccee9.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/test/1.json?astroDataCollectionEntry=true":
      "chunks/1_da541f32.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/test/2.json?astroDataCollectionEntry=true":
      "chunks/2_5ae2f974.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/test/3.json?astroDataCollectionEntry=true":
      "chunks/3_06eac908.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/dwight-schrute.md?astroPropagatedAssets":
      "chunks/dwight-schrute_2abbc1f2.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/jim-halpert.md?astroPropagatedAssets":
      "chunks/jim-halpert_b5244850.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/michael-scott.md?astroPropagatedAssets":
      "chunks/michael-scott_31acacdc.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/pam-beesely.md?astroPropagatedAssets":
      "chunks/pam-beesely_a087a986.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/behind-the-scenes-with-our-artists.md?astroPropagatedAssets":
      "chunks/behind-the-scenes-with-our-artists_fa350d2e.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/collaboration-in-music-production.md?astroPropagatedAssets":
      "chunks/collaboration-in-music-production_8772acb1.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/creating-a-successful-music-brand.md?astroPropagatedAssets":
      "chunks/creating-a-successful-music-brand_6442cfa8.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/gear-is-insanely-expensive.md?astroPropagatedAssets":
      "chunks/gear-is-insanely-expensive_ede8303f.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/guitar-solos-are-still-awesome.md?astroPropagatedAssets":
      "chunks/guitar-solos-are-still-awesome_bbb5e511.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/live-music-is-crucial.md?astroPropagatedAssets":
      "chunks/live-music-is-crucial_4600a84b.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/making-a-home-studio.md?astroPropagatedAssets":
      "chunks/making-a-home-studio_b8367b94.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/the-art-of-music-production.md?astroPropagatedAssets":
      "chunks/the-art-of-music-production_771b56c4.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/the-importance-of-audio-quality.md?astroPropagatedAssets":
      "chunks/the-importance-of-audio-quality_d54d13ee.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/tune-your-snare-drum.md?astroPropagatedAssets":
      "chunks/tune-your-snare-drum_29131a5c.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/dwight-schrute.md":
      "chunks/dwight-schrute_41dd7bc1.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/jim-halpert.md":
      "chunks/jim-halpert_2189d50c.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/michael-scott.md":
      "chunks/michael-scott_6b226f9d.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/pam-beesely.md":
      "chunks/pam-beesely_32f06dc8.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/behind-the-scenes-with-our-artists.md":
      "chunks/behind-the-scenes-with-our-artists_8ff31eee.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/collaboration-in-music-production.md":
      "chunks/collaboration-in-music-production_06beccab.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/creating-a-successful-music-brand.md":
      "chunks/creating-a-successful-music-brand_99454d9c.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/gear-is-insanely-expensive.md":
      "chunks/gear-is-insanely-expensive_45e02a82.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/guitar-solos-are-still-awesome.md":
      "chunks/guitar-solos-are-still-awesome_eaf99d99.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/live-music-is-crucial.md":
      "chunks/live-music-is-crucial_318bdf01.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/making-a-home-studio.md":
      "chunks/making-a-home-studio_7f656f6c.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/the-art-of-music-production.md":
      "chunks/the-art-of-music-production_dc23009f.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/the-importance-of-audio-quality.md":
      "chunks/the-importance-of-audio-quality_42afa385.mjs",
    "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/posts/tune-your-snare-drum.md":
      "chunks/tune-your-snare-drum_4a305e79.mjs",
    "astro:scripts/before-hydration.js": "",
  },
  assets: [
    "/_astro/open-sans-cyrillic-ext-wght-normal.daeed560.woff2",
    "/_astro/open-sans-cyrillic-wght-normal.a1f50e52.woff2",
    "/_astro/open-sans-hebrew-wght-normal.fe6c9093.woff2",
    "/_astro/open-sans-greek-ext-wght-normal.747b787c.woff2",
    "/_astro/open-sans-latin-wght-normal.9b1b9d7c.woff2",
    "/_astro/open-sans-greek-wght-normal.0ed76b36.woff2",
    "/_astro/open-sans-vietnamese-wght-normal.db5d7bb3.woff2",
    "/_astro/open-sans-latin-ext-wght-normal.d9784dbf.woff2",
    "/_astro/fira-code-cyrillic-wght-normal.2301a518.woff2",
    "/_astro/fira-code-cyrillic-ext-wght-normal.7e4087ea.woff2",
    "/_astro/fira-code-latin-wght-normal.be20a5a2.woff2",
    "/_astro/fira-code-greek-ext-wght-normal.f75cee2d.woff2",
    "/_astro/fira-code-latin-ext-wght-normal.a4e83120.woff2",
    "/_astro/fira-code-greek-wght-normal.705278f4.woff2",
    "/_astro/merriweather-cyrillic-400-normal.c46bbc4f.woff2",
    "/_astro/merriweather-latin-400-normal.5c2d662e.woff2",
    "/_astro/merriweather-cyrillic-ext-400-normal.4c548257.woff2",
    "/_astro/merriweather-vietnamese-400-normal.880fc37f.woff2",
    "/_astro/merriweather-latin-ext-400-normal.9e26ab50.woff2",
    "/_astro/i-love-astro-weekly.bf4faa06.png",
    "/_astro/photoshoot.5e4bf903.jpg",
    "/_astro/record.78cf70a9.jpg",
    "/_astro/gear.a3315930.jpg",
    "/_astro/band.50eceec5.jpg",
    "/_astro/concert.6fcd8246.jpg",
    "/_astro/guitarist.48efbf51.jpg",
    "/_astro/studio.c3275411.jpg",
    "/_astro/producer.60960b98.jpg",
    "/_astro/speaker.5983bea4.jpg",
    "/_astro/drums.a3b6b0c1.jpg",
    "/_astro/merriweather-cyrillic-400-normal.0c5995c5.woff",
    "/_astro/merriweather-vietnamese-400-normal.c848608f.woff",
    "/_astro/merriweather-cyrillic-ext-400-normal.f2594e16.woff",
    "/_astro/merriweather-latin-400-normal.c2817f20.woff",
    "/_astro/merriweather-latin-ext-400-normal.1271668e.woff",
    "/_astro/heartbeat.913af530.png",
    "/_astro/coffee.4bbfba78.jpg",
    "/_astro/_slug_.75226135.css",
    "/_astro/_slug_.4051d105.css",
    "/base-cover-image.png",
    "/favicon.svg",
    "/heartbeat.png",
    "/images/avatars/avatar-01.png",
    "/images/avatars/avatar-02.png",
    "/images/avatars/avatar-03.png",
    "/images/avatars/avatar-04.png",
    "/images/avatars/avatar-05.png",
    "/images/avatars/avatar-06.png",
  ],
});

export { manifest };
