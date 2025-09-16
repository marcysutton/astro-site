import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, u as unescapeHTML } from './astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://marcysutton.com");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$List;
  const {
    className = "",
    listName,
    subtitle,
    items,
    pathname = "",
    allItems = false,
    linkNewWindow = false,
    showExcerpts = false
  } = Astro2.props;
  items.filter((item) => !item.data.unlisted).filter((item) => pathname.indexOf(item.data.path) === -1);
  console.log("items:", items);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`list ${className}`, "class")}> ${subtitle && renderTemplate`<h2 class="subhead">${subtitle}</h2>`} <ul> ${items.map((item) => renderTemplate`<li> <a class="item"${addAttribute(item.data.path, "href")}${addAttribute(linkNewWindow ? "_blank" : void 0, "target")}${addAttribute(linkNewWindow ? "noopener noreferrer" : void 0, "rel")}> ${item.data.title} </a> ${showExcerpts && item.data.excerpt && renderTemplate`<div>${unescapeHTML(item.data.excerpt)}</div>`} </li>`)} </ul> ${!allItems && renderTemplate`<p class="more-link"> <a${addAttribute(`/${listName}/`, "href")}> <span class="more-link-text">All ${listName}</span> </a> </p>`} </div>`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/components/List.astro", void 0);

export { $$List as $ };
