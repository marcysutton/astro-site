import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_DbFUBqyA.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection('posts');

  // Filter and sort posts
  const publishedPosts = posts
    .filter(post => !post.data.unlisted)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'MarcySutton.com RSS Feed',
    description: 'Independent Web Development Consultant and Accessibility Advocate',
    site: context.site,
    items: publishedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt || '',
      link: post.data.path,
    })),
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
