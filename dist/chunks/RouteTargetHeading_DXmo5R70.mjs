import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
/* empty css                          */

const $$Astro = createAstro("https://marcysutton.com");
const $$RouteTargetHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RouteTargetHeading;
  const { level = 1, targetID = "global-nav", className = "" } = Astro2.props;
  const HeadingTag = `h${level}`;
  return renderTemplate`${renderComponent($$result, "HeadingTag", HeadingTag, { "class": `routeSkipHeading ${className}`, "data-astro-cid-m34qbrks": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`#${targetID}`, "href")} id="skip-main" class="routeSkipLink" aria-label="Skip to global navigation" data-astro-cid-m34qbrks></a> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/components/RouteTargetHeading.astro", void 0);

export { $$RouteTargetHeading as $ };
