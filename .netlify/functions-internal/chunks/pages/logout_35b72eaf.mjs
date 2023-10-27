/* empty css                            */import { e as createAstro, f as createComponent } from '../astro_9677f808.mjs';
import 'clsx';
import 'html-escaper';

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("userId");
  Astro2.cookies.delete("userEmail");
  Astro2.cookies.delete("userName");
  return Astro2.redirect("/");
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/logout.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
