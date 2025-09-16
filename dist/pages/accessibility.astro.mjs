import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
export { renderers } from '../renderers.mjs';

const $$Accessibility = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Accessibility Statement", "bodyClass": "page", "pathname": "/accessibility/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="generic-wrap"> <div class="breathing-room"> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, {}, { "default": ($$result3) => renderTemplate`
Accessibility Statement
` })} <p>I want everyone who visits MarcySutton.com to feel welcome and find the experience rewarding. This site recently underwent a major redesign and build, and is a work-in-progress.</p> <h2>What am I doing?</h2> <p>To make the website a positive place for everyone, I'm using the <a href="http://www.w3.org/TR/WCAG/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Web Content Accessibility Guidelines (WCAG) 2.2</a>. These guidelines explain how to make web content more accessible for people with disabilities, and user friendly for everyone.</p> <p>The guidelines have three levels of accessibility (A, AA and AAA). I’ve chosen Level AA as the initial target for this website.</p> <h2>How am I doing?</h2> <p>I've worked hard on the accessibility of MarcySutton.com to achieve my goal of Level AA accessibility. I monitor it regularly to maintain access, but if you do find any problems, please <a href="/contact">get in touch</a>.</p> <h2>Learn more</h2> <p>For accessible design and development resources, visit my resources page: <a href="/web-accessibility-resources">/web-accessibility-resources</a></p> </div> </section> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/accessibility.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/accessibility.astro";
const $$url = "/accessibility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Accessibility,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
