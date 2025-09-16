import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_Cci5PH9G.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/","cacheDir":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/node_modules/.astro/","outDir":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/","srcDir":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/src/","publicDir":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/public/","buildClientDir":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/client/","buildServerDir":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/server/","adapterName":"","routes":[{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/accessibility/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/accessibility","isIndex":false,"type":"page","pattern":"^\\/accessibility\\/?$","segments":[[{"content":"accessibility","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accessibility.astro","pathname":"/accessibility","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/links","isIndex":false,"type":"page","pattern":"^\\/links\\/?$","segments":[[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/links.astro","pathname":"/links","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/talks","isIndex":false,"type":"page","pattern":"^\\/talks\\/?$","segments":[[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/talks.astro","pathname":"/talks","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/writing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing","isIndex":false,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing.astro","pathname":"/writing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://marcysutton.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/accessibility.astro",{"propagation":"none","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/links.astro",{"propagation":"none","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/talks.astro",{"propagation":"in-tree","containsHead":true}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/writing.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marcystodd/Sites/MarcySutton.com/astro-site/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/writing@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/accessibility@_@astro":"pages/accessibility.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/links@_@astro":"pages/links.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/talks@_@astro":"pages/talks.astro.mjs","\u0000@astro-page:src/pages/writing@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_LLw0qK7b.mjs","/Users/marcystodd/Sites/MarcySutton.com/astro-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bliy2cCy.mjs","/Users/marcystodd/Sites/MarcySutton.com/astro-site/.astro/content-assets.mjs":"chunks/content-assets_B5LG8YDZ.mjs","/Users/marcystodd/Sites/MarcySutton.com/astro-site/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C5pzqGOJ.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/404.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/about/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/accessibility/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/contact/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/links/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/privacy/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/rss.xml","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/talks/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/writing/index.html","/file:///Users/marcystodd/Sites/MarcySutton.com/astro-site/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"uruC9v6thL504IyCSX8hKuTReuGA/gDeZLrjNuRb51Y="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
