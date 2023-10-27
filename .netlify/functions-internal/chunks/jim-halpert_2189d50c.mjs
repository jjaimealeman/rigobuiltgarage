import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_9677f808.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"name":"Jim Halpert","image":"../posts/images/coffee.jpg"};
				const file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/content/authors/jim-halpert.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
