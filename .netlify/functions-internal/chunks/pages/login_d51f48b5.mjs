/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_9677f808.mjs';
import 'clsx';
import { X as XataClient, $ as $$H1 } from './_slug__cfab9372.mjs';
import { a as $$Main, b as $$Layout } from './404_082d292d.mjs';
import bcrypt from 'bcryptjs';
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
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const errors = {};
  if (Astro2.request.method === "POST") {
    const xata = new XataClient({ apiKey: "xau_IgWn59fWqVPx0SR1Z3SZgfTQPzjyWhlM" });
    const data = await Astro2.request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const user = await xata.db.users.filter({ email }).getFirst();
    if (!user) {
      errors.email = "Incorrect username.";
    } else {
      const authenticated = bcrypt.compareSync(password, user.password);
      if (!authenticated) {
        errors.password = "Incorrect password.";
      } else {
        Astro2.cookies.set("userId", user.id, {
          httpOnly: true,
          secure: true
        });
        Astro2.cookies.set("userName", user.name, {
          httpOnly: true,
          secure: true
        });
        Astro2.cookies.set("userEmail", user.email, {
          httpOnly: true,
          secure: true
        });
        return Astro2.redirect("/", 302);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Log In", "description": "Log in page" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "H1", $$H1, { "text": "Log In" })}${maybeRenderHead()}<form method="POST"><label class="mb-2 block text-teal-900" for="email">Email:</label><input class="border-teal-900 border w-full mb-2 rounded-lg px-6 py-3" type="text" id="email" name="email"><p class="text-red-800 mb-10 h-10">${errors.email}</p><label class="mb-2 block text-teal-900" for="password">Password:</label><input class="border-teal-900 border w-full mb-2 rounded-lg px-6 py-3" type="password" id="password" name="password"><p class="text-red-800 mb-10 h-10">${errors.password}</p><button type="submit" class="text-white text-2xl bg-teal-900 w-full rounded-lg px-6 py-3 mb-11">Log In!</button></form><p class="block mt-16">
Don't have an account? <a class="text-teal-900 underline" href="/signup">Sign Up</a></p>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/login.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
