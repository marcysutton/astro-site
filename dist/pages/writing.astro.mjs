import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DbFUBqyA.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
import { $ as $$List } from '../chunks/List_CKasYfBW.mjs';
export { renderers } from '../renderers.mjs';

const $$Writing = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const publishedPosts = allPosts.filter((post) => !post.data.unlisted).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Writing", "bodyClass": "page", "pathname": "/writing/", "description": "Web accessibility articles and blog posts by Marcy Sutton Todd" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="generic-wrap page-post-wrap"> <section class="page-post-detail"> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, {}, { "default": async ($$result3) => renderTemplate`
Writing
` })} <p>I write about web accessibility, JavaScript development, and my experiences working in tech. Here are all my posts:</p> ${renderComponent($$result2, "List", $$List, { "className": "list-writing-page breathing-room", "items": publishedPosts, "listName": "writing", "allItems": true })} </section> </div> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/writing.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/writing.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Writing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
