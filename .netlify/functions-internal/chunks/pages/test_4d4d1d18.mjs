/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_9677f808.mjs';
import { a as $$Main, c as $$Picture, b as $$Layout } from './404_082d292d.mjs';
import { g as getCollection } from './_slug__cfab9372.mjs';
/* empty css                          */import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_63ebd146.mjs';
/* empty css                            */import '@cloudinary/url-gen';
import '@cloudinary/url-gen/actions/overlay';
import '@cloudinary/url-gen/qualifiers/source';
import '@cloudinary/url-gen/qualifiers/textStyle';
import '@xata.io/client';
import 'date-fns';

const myImage = {"src":"/_astro/i-love-astro-weekly.bf4faa06.png","width":658,"height":270,"format":"png"};

const moviesJson = [
	{
		title: "The Shawshank Redemption",
		year: 1994,
		starring: [
			"Tim Robbins",
			"Morgan Freeman"
		],
		plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
	},
	{
		title: "The Godfather",
		year: 1972,
		starring: [
			"Marlon Brando",
			"Al Pacino"
		],
		plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
	},
	{
		title: "The Dark Knight",
		year: 2008,
		starring: [
			"Christian Bale",
			"Heath Ledger"
		],
		plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
	},
	{
		title: "Pulp Fiction",
		year: 1994,
		starring: [
			"John Travolta",
			"Samuel L. Jackson",
			"Uma Thurman"
		],
		plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
	},
	{
		title: "Fight Club",
		year: 1999,
		starring: [
			"Brad Pitt",
			"Edward Norton",
			"Helena Bonham Carter"
		],
		plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
	},
	{
		title: "Forrest Gump",
		year: 1994,
		starring: [
			"Tom Hanks",
			"Robin Wright",
			"Gary Sinise"
		],
		plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
	},
	{
		title: "Inception",
		year: 2010,
		starring: [
			"Leonardo DiCaprio",
			"Joseph Gordon-Levitt",
			"Ellen Page"
		],
		plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
	},
	{
		title: "The Matrix",
		year: 1999,
		starring: [
			"Keanu Reeves",
			"Laurence Fishburne",
			"Carrie-Anne Moss"
		],
		plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		year: 2003,
		starring: [
			"Elijah Wood",
			"Viggo Mortensen",
			"Ian McKellen"
		],
		plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
	},
	{
		title: "The Silence of the Lambs",
		year: 1991,
		starring: [
			"Anthony Hopkins",
			"Jodie Foster",
			"Scott Glenn"
		],
		plot: "A young FBI cadet must confide in an incarcerated and manipulative cannibal killer to receive his help on catching another serial killer who skins his victims."
	}
];

const carsJson = [
	{
		year: 2013,
		make: "Ford",
		model: "F-150"
	},
	{
		year: 2014,
		make: "Chevrolet",
		model: "Silverado"
	},
	{
		year: 2015,
		make: "Toyota",
		model: "Camry"
	},
	{
		year: 2016,
		make: "Honda",
		model: "Accord"
	},
	{
		year: 2017,
		make: "Toyota",
		model: "Corolla"
	},
	{
		year: 2018,
		make: "Nissan",
		model: "Rogue"
	},
	{
		year: 2019,
		make: "Honda",
		model: "Civic"
	},
	{
		year: 2020,
		make: "Toyota",
		model: "RAV4"
	},
	{
		year: 2021,
		make: "Ford",
		model: "Explorer"
	},
	{
		year: 2022,
		make: "Jeep",
		model: "Wrangler"
	}
];

const $$Astro = createAstro("https://astrocourse-demo.netlify.app");
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const data1 = ["Isabella", "Olivia", "Dad"];
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data2 = await res.json();
  const sortedData = moviesJson.sort((a, b) => a.year - b.year);
  function joinWithAnd(arr) {
    if (arr.length === 0) {
      return "";
    } else if (arr.length === 1) {
      return arr[0];
    } else if (arr.length === 2) {
      return arr.join(" and ");
    } else {
      const last = arr.pop();
      return `${arr.join(", ")}, and ${last}`;
    }
  }
  const testColl = await getCollection("test");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test", "description": "a page for testing things", "data-astro-cid-6d7mwtum": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-6d7mwtum": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Picture", $$Picture, { "src": myImage, "formats": ["avif", "webp"], "alt": "I love Astro Weekly!", "data-astro-cid-6d7mwtum": true })}${maybeRenderHead()}<nav class="group rounded-xl mb-4 p-2 font-medium bg-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900" data-astro-cid-6d7mwtum>${[
    ["Home", "/"],
    ["Test", "/test"],
    ["Posts", "/posts"],
    ["About", "/about"]
  ].map(([title, url]) => renderTemplate`<a${addAttribute(url, "href")} class="rounded-xl mx-2 px-3 py-2 font-medium bg-slate-200 hover:bg-zinc-300 text-slate-700 group-hover:text-zinc-800" data-astro-cid-6d7mwtum>${title}</a>`)}</nav><h2 class="font-bold text-lg capitalize underline font-serif" data-astro-cid-6d7mwtum>
local frontmatter data
</h2><ul class="mb-12" data-astro-cid-6d7mwtum>${data1.map((i) => renderTemplate`<li data-astro-cid-6d7mwtum>${i}</li>`)}</ul><h2 class="font-bold text-lg capitalize underline font-serif" data-astro-cid-6d7mwtum>
fetch data from external API
</h2><ul class="mb-12" data-astro-cid-6d7mwtum>${data2.slice(0, 5).map((i) => renderTemplate`<li data-astro-cid-6d7mwtum>${i.id} - ${i.title}<br data-astro-cid-6d7mwtum>${i.body}</li>`)}</ul><h2 class="font-bold text-lg capitalize underline" data-astro-cid-6d7mwtum>
import local files: list of movies
</h2><ul data-astro-cid-6d7mwtum>${sortedData.map((movies) => renderTemplate`<li class="mb-4" data-astro-cid-6d7mwtum>${movies.year} - <span class="underline" data-astro-cid-6d7mwtum>${movies.title}</span>${" "}
starring ${joinWithAnd(movies.starring)}<br data-astro-cid-6d7mwtum>${" "}<span class="italic pl-8" data-astro-cid-6d7mwtum>${movies.plot}</span></li>`)}</ul><h2 class="font-bold text-lg capitalize underline" data-astro-cid-6d7mwtum>
import local files: list of popular cars
</h2><ul data-astro-cid-6d7mwtum>${carsJson.map((cars) => renderTemplate`<li class="mb-4" data-astro-cid-6d7mwtum>${cars.year}&nbsp;${cars.make}&nbsp;${cars.model}</li>`)}</ul><h2 class="font-bold text-lg capitalize underline" data-astro-cid-6d7mwtum>content collections</h2><ul data-astro-cid-6d7mwtum>${testColl.map((item) => renderTemplate`<li class="mb-4" data-astro-cid-6d7mwtum>${item.id}. - ${item.data.name} - $${item.data.price} -${" "}${item.data.color} - ${item.data.brand} - ${item.data.category}</li>`)}</ul><div class="shadow-mine1 flex flex-col mx-auto max-w-2xl mt-24 p-8 bg-slate-200" data-astro-cid-6d7mwtum><h2 class="font-mono font-bold text-gray-700 bg-gray-400 rounded-md block mb-4 pl-4" data-astro-cid-6d7mwtum>
.mine1
</h2><p data-astro-cid-6d7mwtum>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        dolores qui rerum iste architecto consequatur earum odio eum, quo
        corporis blanditiis sapiente quas sequi fuga ipsa in impedit repellat,
        illo veniam totam. Provident excepturi officia reiciendis cumque
        similique laborum in quam. Temporibus inventore tenetur vitae deserunt
        explicabo quasi quos perspiciatis. Asperiores accusamus reprehenderit
        voluptate magnam!
</p></div><div class="shadow-mine2 flex flex-col mx-auto max-w-3xl mt-24 p-8 bg-slate-200" data-astro-cid-6d7mwtum><h2 class="font-mono font-bold text-gray-700 bg-gray-400 rounded-md block mb-4 pl-4" data-astro-cid-6d7mwtum>
.mine2
</h2><p data-astro-cid-6d7mwtum>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        dolores qui rerum iste architecto consequatur earum odio eum, quo
        corporis blanditiis sapiente quas sequi fuga ipsa in impedit repellat,
        illo veniam totam. Provident excepturi officia reiciendis cumque
        similique laborum in quam. Temporibus inventore tenetur vitae deserunt
        explicabo quasi quos perspiciatis. Asperiores accusamus reprehenderit
        voluptate magnam!
</p></div>` })}` })}`;
}, "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/test.astro", void 0);

const $$file = "/home/jaime/www/astrocourse.dev/astrocourse-demo/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
