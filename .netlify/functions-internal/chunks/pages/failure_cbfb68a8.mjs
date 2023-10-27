/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_9677f808.mjs';
import 'clsx';
import { a as $$Main, b as $$Layout } from './404_082d292d.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_63ebd146.mjs';
/* empty css                            */import '@cloudinary/url-gen';
import '@cloudinary/url-gen/actions/overlay';
import '@cloudinary/url-gen/qualifiers/source';
import '@cloudinary/url-gen/qualifiers/textStyle';

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$Failure = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Failure;
  const message = Astro2.url.searchParams.get("message");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Newsletter Failure", "description": "Failure message for newsletter subscription" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<p class="text-center pt-12 text-2xl">${message || "Subscription error"}</p>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/newsletter/failure.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/newsletter/failure.astro";
const $$url = "/newsletter/failure";

export { $$Failure as default, $$file as file, $$url as url };
