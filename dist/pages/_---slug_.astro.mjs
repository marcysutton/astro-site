import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DbFUBqyA.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
import { $ as $$List } from '../chunks/List_CKasYfBW.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://marcysutton.com");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  const features = await getCollection("features");
  const talks = await getCollection("talks");
  const allContent = [
    ...posts.map((post) => ({ params: { slug: post.data.path.replace(/^\//, "").replace(/\/$/, "") }, props: { entry: post, type: "post" } })),
    ...features.map((feature) => ({ params: { slug: feature.data.path.replace(/^\//, "").replace(/\/$/, "") }, props: { entry: feature, type: "feature" } })),
    ...talks.map((talk) => ({ params: { slug: talk.data.path.replace(/^\//, "").replace(/\/$/, "") }, props: { entry: talk, type: "talk" } }))
  ];
  return allContent;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry, type } = Astro2.props;
  const { Content } = await entry.render();
  let relatedItems = [];
  if (type === "post") {
    const allPosts = await getCollection("posts");
    relatedItems = allPosts.filter((p) => p.slug !== entry.slug && !p.data.unlisted).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 10);
  }
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "bodyClass": type, "pathname": entry.data.path, "description": entry.data.excerpt || entry.data.description, "image": entry.data.coverImage }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="generic-wrap page-post-wrap"> <section class="page-post-detail breathing-room"> <article> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, { "targetID": "global-nav" }, { "default": async ($$result3) => renderTemplate`${entry.data.title}` })} ${entry.data.date && type !== "feature" && renderTemplate`<h2 class="subhead">${formatDate(entry.data.date)}</h2>`} ${renderComponent($$result2, "Content", Content, {})} </article> </section> ${type === "post" && relatedItems.length > 0 && renderTemplate`<aside class="page-post-list-wrap"> ${renderComponent($$result2, "List", $$List, { "className": "list-writing-post breathing-room", "items": relatedItems, "listName": "writing", "subtitle": "More Posts", "pathname": Astro2.url.pathname })} </aside>`} </div> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/[...slug].astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
