import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found", "bodyClass": "page", "description": "The page you're looking for doesn't exist" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="generic-wrap page-post-wrap"> <section class="page-post-detail"> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, {}, { "default": ($$result3) => renderTemplate`
Oops! Page Not Found
` })} <p>The page you're looking for doesn't exist. It may have been moved or deleted.</p> <p>Here are some helpful links:</p> <ul> <li><a href="/">Home</a></li> <li><a href="/about/">About</a></li> <li><a href="/writing/">Writing</a></li> <li><a href="/talks/">Talks</a></li> <li><a href="/contact/">Contact</a></li> </ul> </section> </div> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/404.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
