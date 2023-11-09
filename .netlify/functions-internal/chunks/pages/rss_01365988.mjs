import rss from '@astrojs/rss';
import { g as getCollection } from './_slug__cfab9372.mjs';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
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

const parser = new MarkdownIt();
async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Rhythm Nation",
    description: "A community of music producers and enthisiasts",
    site: context.site?.toString() ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      //   pubDate: post.data.date,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
      image: post.data.image
    }))
  });
}

export { GET };
