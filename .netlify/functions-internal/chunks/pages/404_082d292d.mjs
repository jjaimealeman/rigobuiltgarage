import '@astrojs/internal-helpers/path';
/* empty css                            */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_9677f808.mjs';
import 'clsx';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_63ebd146.mjs';
/* empty css                            */import { Cloudinary } from '@cloudinary/url-gen';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';

const $$Astro$7 = createAstro("https://astrocourse-demo.netlify.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/node_modules/astro/components/Image.astro", void 0);

const $$Astro$6 = createAstro("https://astrocourse-demo.netlify.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///home/jaime/www/astrocourse.dev/astrocourse-demo/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$5 = createAstro("https://astrocourse-demo.netlify.app");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-sm:px-5 max-w-7xl mx-auto w-full mb-32">${renderSlot($$result, $$slots["default"])}</main>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Main.astro", void 0);

const $$Astro$4 = createAstro("https://astrocourse-demo.netlify.app");
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Newsletter;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-white text-4xl mb-3 max-sm:text-left">
Subscribe to the Rhythm Newsletter!
</h2><p class="text-zinc-300 text-xl mb-12 max-sm:mb-16 max-sm:text-left">
Join the community and learn from Music Producers and Enthusiasts
</p><form method="POST" action="/api/newsletter" class="grid grid-cols-[1fr,auto] mx-auto items-end max-w-xl mb-12 gap-x-4 max-sm:grid-cols-1 gap-y-4"><div class="flex flex-col items-start"><label for="email" class="text-white text-lg mb-2">Email address</label><input type="email" name="email" id="email" class="bg-green-950 border-2 border-white rounded-lg w-full text-white px-6 text-lg h-16"></div><button type="submit" class="bg-white text-teal-900 py-4 px-8 rounded-xl text-2xl h-16">
Subscribe
</button></form>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Newsletter.astro", void 0);

const $$Astro$3 = createAstro("https://astrocourse-demo.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-green-950 text-center pt-20 pb-6 px-5 max-sm:pb-3 max-sm:pt-8">${renderComponent($$result, "Newsletter", $$Newsletter, {})}<p class="text-zinc-300">Copyright 2023. Rhythm Nation</p></footer>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Footer.astro", void 0);

const heartbeat = {"src":"/_astro/heartbeat.913af530.png","width":512,"height":512,"format":"png"};

const $$Astro$2 = createAstro("https://astrocourse-demo.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const userEmail = Astro2.cookies.get("userEmail");
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"><a class="flex items-center gap-x-4" href="/">${renderComponent($$result, "Image", $$Image, { "class": "w-16", "src": heartbeat, "width": 96, "height": 96, "alt": "logo" })}<p class="uppercase text-3xl text-zinc-900">Blog</p></a>${userEmail?.value ? renderTemplate`<a href="/logout" class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Logout
</a>` : renderTemplate`<a href="/login" class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Login
</a>`}</header>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/components/Header.astro", void 0);

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "jjaimealeman"
  },
  url: {
    secure: true
  }
});
const getThumbnail = (title) => {
  const thumbnail = cloudinary.image("astro-course-ogbg").overlay(
    source(text(title, new TextStyle("Cabin", 64).fontWeight("bold")))
  );
  return thumbnail.toURL();
};

const $$Astro$1 = createAstro("https://astrocourse-demo.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Rhythm Nation",
    description = "A community for music lovers",
    image = getThumbnail("A community of Music Producers and Enthusiasts.")
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"><head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:image:alt"${addAttribute(description, "content")}><!-- Open Graph / Twitter --><meta property="twitter:card" content="summary_big_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><meta property="twitter:image:alt"${addAttribute(description, "content")}>${renderHead()}</head><body class="min-h-screen grid grid-rows-[auto,1fr,auto]">${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found", "description": "Page Not Found" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h2 class="text-center pt-12 text-2xl">OOPS! Page not Found!</h2>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/404.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _404 as _, $$Main as a, $$Layout as b, $$Picture as c, getThumbnail as g, imageConfig as i };
