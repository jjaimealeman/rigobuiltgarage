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
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  if (Astro2.request.method === "POST") {
    const xata = new XataClient({ apiKey: "xau_IgWn59fWqVPx0SR1Z3SZgfTQPzjyWhlM" });
    const data = await Astro2.request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = await xata.db.users.create({
      name,
      email,
      password: hash
    });
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up", "description": "Sign Up Page" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "H1", $$H1, { "text": "Sign Up" })}${maybeRenderHead()}<form method="POST"><label class="mb-2 block text-teal-900" for="name">Full Name:</label><input class="border-teal-900 border w-full mb-10 rounded-lg px-6 py-3" type="text" id="name" name="name"><label class="mb-2 block text-teal-900" for="email">Email:</label><input class="border-teal-900 border w-full mb-10 rounded-lg px-6 py-3" type="text" id="email" name="email"><label class="mb-2 block text-teal-900" for="password">Password:</label><input class="border-teal-900 border w-full mb-10 rounded-lg px-6 py-3" type="password" id="password" name="password"><button type="submit" class="text-white text-2xl bg-teal-900 w-full rounded-lg px-6 py-3 mb-11">Sign Up!</button></form><p class="block mt-16">
Already Registered? <a class="text-teal-900 underline" href="/login">Log In</a></p>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/signup.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
