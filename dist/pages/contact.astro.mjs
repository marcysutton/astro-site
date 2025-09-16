import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_knnKrt6B.mjs';
import { $ as $$RouteTargetHeading } from '../chunks/RouteTargetHeading_DXmo5R70.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "bodyClass": "page", "pathname": "/contact/", "description": "Get in touch with Marcy Sutton Todd" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="generic-wrap page-post-wrap"> <section class="page-post-detail"> ${renderComponent($$result2, "RouteTargetHeading", $$RouteTargetHeading, {}, { "default": ($$result3) => renderTemplate`
Contact
` })} <p>Thanks for your interest in getting in touch! Here are the best ways to reach me:</p> <h2>For Quick Questions or Consultations</h2> <p>I offer 1:1 calls through <a href="https://superpeer.com/marcysutton" target="_blank" rel="noopener noreferrer">Superpeer</a> for accessibility advice, career guidance, and technical questions.</p> <h2>Social Media & Professional Networks</h2> <ul> <li><a href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer">Twitter</a> - For quick questions and accessibility discussions</li> <li><a href="https://www.linkedin.com/in/marcysutton/" target="_blank" rel="noopener noreferrer">LinkedIn</a> - For professional inquiries</li> <li><a href="https://github.com/marcysutton" target="_blank" rel="noopener noreferrer">GitHub</a> - For technical discussions and open source</li> </ul> <h2>Speaking Engagements</h2> <p>While I'm currently working full-time, I occasionally speak at conferences and events. Please reach out through LinkedIn or Twitter to discuss speaking opportunities.</p> <h2>Media & Press</h2> <p>For media inquiries, interviews, or press requests, please connect with me on LinkedIn with details about your publication and story.</p> <p><strong>Please note:</strong> I'm currently working full-time as a senior engineer and am not available for consulting projects at this time.</p> </section> </div> ` })}`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/contact.astro", void 0);

const $$file = "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
