import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_CShMESIN.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
import { $ as $$LinkList, I as Items } from '../chunks/links_CEnUhs_l.mjs';
export { renderers } from '../renderers.mjs';

const linkPageImage = new Proxy({"src":"/_astro/cascadiafest-netmag.BBA5pJ_v.jpg","width":640,"height":835,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/site-images/cascadiafest-netmag.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/site-images/cascadiafest-netmag.jpg");
							return target[name];
						}
					});

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Links", "bodyClass": "page", "pathname": "/links/", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="generic-wrap"> <div class="breathing-room"> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, {}, { "default": ($$result3) => renderTemplate`
Links
` })} ${renderComponent($$result2, "Image", $$Image, { "class": "floating-image width50", "src": linkPageImage, "alt": "Netmag layout: Marcy emceeing CascadiaFest in a Canadian Mounty costume with Matthew Claypotch on stage in a horse head" })} <p>A list of blog posts and podcasts on other sites, either written by me or referencing me somehow.</p> <p>All links open in new windows.</p> ${renderComponent($$result2, "LinkList", $$LinkList, { "className": "list-links no-background", "items": Items, "listName": "links", "allItems": true, "linkNewWindow": true })} </div> </section> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/links.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/links.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Links,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
