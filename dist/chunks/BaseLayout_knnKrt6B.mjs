import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, f as renderHead, r as renderComponent, e as renderSlot } from './astro/server_Cci5PH9G.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Astro$2 = createAstro("https://marcysutton.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.props;
  const isHome = pathname === "/";
  const isWriting = pathname?.includes("post") || pathname === "/writing/";
  const isTalks = pathname?.includes("talk") || pathname === "/talks/";
  return renderTemplate`${maybeRenderHead()}<header class="site-header" role="banner" data-astro-cid-3ef6ksr2> <div class="header-bg" data-astro-cid-3ef6ksr2> <ul class="skip-links" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#main" id="skip-link-main" data-astro-cid-3ef6ksr2>Skip to main content</a></li> </ul> <div class="nav-wrap" data-astro-cid-3ef6ksr2> ${isHome ? renderTemplate`<h1 id="routeSkipLink" class="site-logo" data-astro-cid-3ef6ksr2> <a href="/" id="top" tabindex="-1" data-astro-cid-3ef6ksr2> <span class="logotype-line1" data-astro-cid-3ef6ksr2>Marcy</span> <span class="logotype-line2" data-astro-cid-3ef6ksr2>Sutton</span> <span class="logotype-line3" data-astro-cid-3ef6ksr2>.com</span> </a> </h1>` : renderTemplate`<div class="site-logo" data-astro-cid-3ef6ksr2> <a href="/" id="top" tabindex="-1" data-astro-cid-3ef6ksr2> <span class="logotype-line1" data-astro-cid-3ef6ksr2>Marcy</span> <span class="logotype-line2" data-astro-cid-3ef6ksr2>Sutton</span> <span class="logotype-line3" data-astro-cid-3ef6ksr2>.com</span> </a> </div>`} <nav id="global-nav" aria-label="Global" tabindex="-1" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(pathname === "/" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>Home</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/about/"${addAttribute(pathname === "/about/" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>About</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/writing/"${addAttribute(isWriting ? "active" : "", "class")} data-astro-cid-3ef6ksr2>Writing</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/talks/"${addAttribute(isTalks ? "active" : "", "class")} data-astro-cid-3ef6ksr2>Talks</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/links/"${addAttribute(pathname === "/links/" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>Links</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/contact/"${addAttribute(pathname === "/contact/" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>Contact</a> </li> </ul> </nav> </div> </div> </header> `;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://marcysutton.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer role="contentinfo" class="site-footer"> <p class="back-to-top"> <a href="#top" id="skip-to-top" title="Skip back to top of page"> <span aria-hidden="true">▲ <span class="text">top</span></span> <span class="visually-hidden">Back to top</span> </a> </p> <ul> <li><a href="/about/">About</a></li> <li><a href="/contact/">Contact</a></li> <li><a href="/privacy/">Privacy Policy</a></li> <li><a href="/accessibility/">Accessibility</a></li> </ul> <div class="footer-copyright"> <p class="copyright">
Made with ♥ and <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a>.
      ©&nbsp;2003-${currentYear} Marcy Sutton.
</p> </div> </footer>`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://marcysutton.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Independent Web Development Consultant and Accessibility Advocate", image, pathname, bodyClass } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${image && renderTemplate`<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:creator" content="@marcysutton">${image && renderTemplate`<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`}<title>${title} - MarcySutton.com</title><!-- Font imports --><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab:wght@400&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body${addAttribute(bodyClass, "class")} id="site-wrap"> <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true" focusable="false"> <defs> <symbol id="icon-triangle-right" width="1024" height="1024" viewBox="0 0 1024 1024"> <path d="M1024 512l-921.6 512v-1024l921.6 512z"></path> </symbol> </defs> </svg> ${renderComponent($$result, "Header", $$Header, { "pathname": pathname })} <main id="main" role="main" tabindex="-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
