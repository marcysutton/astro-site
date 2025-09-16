import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DbFUBqyA.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
import { $ as $$MediaGrid } from '../chunks/MediaGrid_BJY_vNH6.mjs';
export { renderers } from '../renderers.mjs';

const $$Talks = createComponent(async ($$result, $$props, $$slots) => {
  const allTalks = await getCollection("talks");
  const publishedTalks = allTalks.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Talks", "bodyClass": "page", "pathname": "/talks/", "description": "Conference talks and presentations by Marcy Sutton Todd about web accessibility" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="generic-wrap page-post-wrap"> <section class="page-post-detail"> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, {}, { "default": async ($$result3) => renderTemplate`
Talks
` })} <p>I've been fortunate to speak at many conferences around the world about web accessibility and inclusive development practices. Here are recordings of some of my talks:</p> ${renderComponent($$result2, "MediaGrid", $$MediaGrid, { "className": "media-grid-talks no-background media-talks-page", "subtitle": "Conference Presentations", "items": publishedTalks, "itemLabel": "talks" })} </section> </div> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/talks.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/talks.astro";
const $$url = "/talks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Talks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
