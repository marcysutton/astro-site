import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CShMESIN.mjs';

const $$Astro = createAstro("https://marcysutton.com");
const $$MediaGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MediaGrid;
  const { className = "", subtitle, items, itemLabel } = Astro2.props;
  console.log(items);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`media-grid ${className}`, "class")}> <h2 class="subhead">${subtitle}</h2> <ul class="media-items"> ${items.map((item) => renderTemplate`<li class="media-item"> <a${addAttribute(item.data.path, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": item.data.posterImg, "alt": "" })} ${item.data.title} </a> </li>`)} </ul> </div>`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/components/MediaGrid.astro", void 0);

export { $$MediaGrid as $ };
