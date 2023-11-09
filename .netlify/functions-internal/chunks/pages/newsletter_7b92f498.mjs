import { X as XataClient } from './_slug__cfab9372.mjs';
/* empty css                            */import '../astro_9677f808.mjs';
import 'clsx';
import 'html-escaper';
import './404_082d292d.mjs';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_63ebd146.mjs';
/* empty css                            */import '@cloudinary/url-gen';
import '@cloudinary/url-gen/actions/overlay';
import '@cloudinary/url-gen/qualifiers/source';
import '@cloudinary/url-gen/qualifiers/textStyle';
import '@xata.io/client';
import 'date-fns';

const post = async ({ request, redirect }) => {
  const client = new XataClient({ apiKey: "xau_IgWn59fWqVPx0SR1Z3SZgfTQPzjyWhlM" });
  const formData = await request.formData();
  const email = formData.get("email");
  if (!email) {
    return redirect("/newsletter/failure?message=Email is required", 307);
  }
  try {
    await client.db.subscribers.create({
      email
    });
    return redirect("/newsletter/success", 307);
  } catch (error) {
    if (error?.errors[0]?.message === "invalid record: column [email]: is not unique") {
      return redirect("/newsletter/failure?message=Email must be unique", 307);
    }
    return redirect("/newsletter/failure?message=Email subscribe failed", 307);
  }
};

export { post };
