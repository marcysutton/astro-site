import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DbFUBqyA.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$List } from '../chunks/List_CKasYfBW.mjs';
import { $ as $$MediaGrid } from '../chunks/MediaGrid_BJY_vNH6.mjs';
import 'clsx';
import { I as Items, $ as $$LinkList } from '../chunks/links_CEnUhs_l.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://marcysutton.com");
const $$NewsletterForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsletterForm;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`newsletter-wrap ${className}`, "class")}> <h3 id="newsletter-signup">Join my mailing list to keep up to date with the latest!</h3> <form class="newsletter__form" action="https://app.convertkit.com/forms/1863867/subscriptions" method="post"> <label> <span class="labelText">Enter your email:</span> <input class="newsletter__field" type="email" id="email_address" name="email_address" placeholder="you@email.com" required> </label> <button type="submit">Subscribe</button> </form> <div aria-live="polite" id="newsletter-status"> <!-- Status messages will be handled by JavaScript --> </div> <p class="privacy-note">
This adds you to my TestingAccessibility.com subscriber list.<br>
I will not sell or share your information, period. Read my <a href="/privacy/">Privacy Policy</a> </p> </div>`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/components/NewsletterForm.astro", void 0);

const $$Astro = createAstro("https://marcysutton.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const allFeatures = await getCollection("features");
  const allTalks = await getCollection("talks");
  const sevenItems = Object.values(Items).slice(0, 7);
  const recentPosts = allPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 6);
  console.log(allPosts);
  const featuredFeature = allFeatures.find(
    (feature) => feature.slug === "testing-accessibility"
  );
  const recentTalks = allTalks.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "bodyClass": "home", "pathname": "/" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="feature-list-wrap"> ${featuredFeature && renderTemplate`<section class="feature"> <div class="breathing-room"> <h2 class="subhead">Latest:Feature</h2> <h3><a${addAttribute(featuredFeature.data.path, "href")}>${featuredFeature.data.title}</a></h3> <p>${unescapeHTML(featuredFeature.data.description)}</p> ${featuredFeature.data.extendedDescription && renderTemplate`<div>${unescapeHTML(featuredFeature.data.extendedDescription)}</div>`} </div> </section>`} <div class="home-aside"> <div class="service-tagline breathing-room"> <h2>I'm a senior web developer with a specialty in frontend accessibility.</h2> <p>Learn <a href="/about/">about my work</a>.</p> </div> ${renderComponent($$result2, "List", $$List, { "className": "list-writing-home breathing-room", "subtitle": "Latest:Writing", "items": recentPosts, "showExcerpts": false, "listName": "writing" })} </div> </div> ${renderComponent($$result2, "NewsletterForm", $$NewsletterForm, { "className": "home breathing-room" })} <section aria-label="talks"> ${renderComponent($$result2, "MediaGrid", $$MediaGrid, { "className": "media-talks-home", "subtitle": "I've spoken at some conferences:", "items": recentTalks, "itemLabel": "talks" })} </section> <section class="list-image-wrap" aria-label="links"> <div class="list-links-home breathing-room"> <h2 class="subhead">Latest:Professional</h2> ${renderComponent($$result2, "LinkList", $$LinkList, { "className": "list-links no-background", "items": sevenItems, "listName": "links", "allItems": true, "linkNewWindow": true })} </div> <div class="retro-image"></div> </section> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/index.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
