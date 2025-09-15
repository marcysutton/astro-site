declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"features": {
"frontend-masters-javascript-accessibility.md": {
	id: "frontend-masters-javascript-accessibility.md";
  slug: "frontend-masters-javascript-accessibility";
  body: string;
  collection: "features";
  data: InferEntrySchema<"features">
} & { render(): Render[".md"] };
"smashing-book-6.md": {
	id: "smashing-book-6.md";
  slug: "smashing-book-6";
  body: string;
  collection: "features";
  data: InferEntrySchema<"features">
} & { render(): Render[".md"] };
"testing-accessibility.md": {
	id: "testing-accessibility.md";
  slug: "testing-accessibility";
  body: string;
  collection: "features";
  data: InferEntrySchema<"features">
} & { render(): Render[".md"] };
};
"posts": {
"2009-12-02-why-outlook-2010-sucks.md": {
	id: "2009-12-02-why-outlook-2010-sucks.md";
  slug: "2009-12-02-why-outlook-2010-sucks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2009-12-23-holiday-2009.md": {
	id: "2009-12-23-holiday-2009.md";
  slug: "2009-12-23-holiday-2009";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-01-05-as3-mouse-events.md": {
	id: "2010-01-05-as3-mouse-events.md";
  slug: "2010-01-05-as3-mouse-events";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-02-17-as3-loading-workflow-xml-first-then-multiple-assets.md": {
	id: "2010-02-17-as3-loading-workflow-xml-first-then-multiple-assets.md";
  slug: "2010-02-17-as3-loading-workflow-xml-first-then-multiple-assets";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-04-25-simple-xml-in-php.md": {
	id: "2010-04-25-simple-xml-in-php.md";
  slug: "2010-04-25-simple-xml-in-php";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-09-29-urban-type.md": {
	id: "2010-09-29-urban-type.md";
  slug: "2010-09-29-urban-type";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-11-05-naccc.md": {
	id: "2010-11-05-naccc.md";
  slug: "2010-11-05-naccc";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-11-06-zend-framework.md": {
	id: "2010-11-06-zend-framework.md";
  slug: "2010-11-06-zend-framework";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-12-29-css-and-accessibility.md": {
	id: "2010-12-29-css-and-accessibility.md";
  slug: "2010-12-29-css-and-accessibility";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-12-29-xmas-js1k.md": {
	id: "2010-12-29-xmas-js1k.md";
  slug: "2010-12-29-xmas-js1k";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2010-12-30-holiday-2010.md": {
	id: "2010-12-30-holiday-2010.md";
  slug: "2010-12-30-holiday-2010";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2012-01-14-2011-music-roundup.md": {
	id: "2012-01-14-2011-music-roundup.md";
  slug: "2012-01-14-2011-music-roundup";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2012-10-01-decibel-recap-2012.md": {
	id: "2012-10-01-decibel-recap-2012.md";
  slug: "2012-10-01-decibel-recap-2012";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2012-12-24-holiday-2012.md": {
	id: "2012-12-24-holiday-2012.md";
  slug: "2012-12-24-holiday-2012";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2013-04-22-mobile-web-accessibility-with-voiceover.md": {
	id: "2013-04-22-mobile-web-accessibility-with-voiceover.md";
  slug: "2013-04-22-mobile-web-accessibility-with-voiceover";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2013-11-18-girl-develop-it-web-accessibility.md": {
	id: "2013-11-18-girl-develop-it-web-accessibility.md";
  slug: "2013-11-18-girl-develop-it-web-accessibility";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2014-01-01-favorite-music-2013.md": {
	id: "2014-01-01-favorite-music-2013.md";
  slug: "2014-01-01-favorite-music-2013";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2014-one-to-remember/index.md": {
	id: "2014-one-to-remember/index.md";
  slug: "2014-one-to-remember";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2015-04-25-button-focus-hell.md": {
	id: "2015-04-25-button-focus-hell.md";
  slug: "2015-04-25-button-focus-hell";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2016-02-18-web-accessibility-resources.md": {
	id: "2016-02-18-web-accessibility-resources.md";
  slug: "2016-02-18-web-accessibility-resources";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2016-a-year-of-milestones/index.md": {
	id: "2016-a-year-of-milestones/index.md";
  slug: "2016-a-year-of-milestones";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2017-in-music/index.md": {
	id: "2017-in-music/index.md";
  slug: "2017-in-music";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2019-02-03-great-leadership-gatsby-girl-develop-it.md": {
	id: "2019-02-03-great-leadership-gatsby-girl-develop-it.md";
  slug: "2019-02-03-great-leadership-gatsby-girl-develop-it";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2019-03-12-prototype-testing-accessible-clientside-routing.md": {
	id: "2019-03-12-prototype-testing-accessible-clientside-routing.md";
  slug: "2019-03-12-prototype-testing-accessible-clientside-routing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2020-09-15-outsider-leverage-accessibility.md": {
	id: "2020-09-15-outsider-leverage-accessibility.md";
  slug: "2020-09-15-outsider-leverage-accessibility";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-picture-is-worth-a-thousand-words/index.md": {
	id: "a-picture-is-worth-a-thousand-words/index.md";
  slug: "a-picture-is-worth-a-thousand-words";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"accessibility-and-performance/index.md": {
	id: "accessibility-and-performance/index.md";
  slug: "accessibility-and-performance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"accessibility-and-the-shadow-dom/index.md": {
	id: "accessibility-and-the-shadow-dom/index.md";
  slug: "accessibility-and-the-shadow-dom";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"accessibility-is-a-civil-right/index.md": {
	id: "accessibility-is-a-civil-right/index.md";
  slug: "accessibility-is-a-civil-right";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"accessibility-jobs-specialized-mainstream/index.md": {
	id: "accessibility-jobs-specialized-mainstream/index.md";
  slug: "accessibility-jobs-specialized-mainstream";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"accessibility-wins/index.md": {
	id: "accessibility-wins/index.md";
  slug: "accessibility-wins";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"angular-protractor-accessibility-plugin/index.md": {
	id: "angular-protractor-accessibility-plugin/index.md";
  slug: "angular-protractor-accessibility-plugin";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"angularjs-material-design-ngaria/index.md": {
	id: "angularjs-material-design-ngaria/index.md";
  slug: "angularjs-material-design-ngaria";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-of-2016-music/index.md": {
	id: "best-of-2016-music/index.md";
  slug: "best-of-2016-music";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"chapter-two-at-deque/index.md": {
	id: "chapter-two-at-deque/index.md";
  slug: "chapter-two-at-deque";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"content-visibility-accessible-semantics/index.md": {
	id: "content-visibility-accessible-semantics/index.md";
  slug: "content-visibility-accessible-semantics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"csun-accessibility-conference-recap/index.md": {
	id: "csun-accessibility-conference-recap/index.md";
  slug: "csun-accessibility-conference-recap";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"developing-anti-slapp-policies-a11y-slack-harvard-cyberlaw/index.md": {
	id: "developing-anti-slapp-policies-a11y-slack-harvard-cyberlaw/index.md";
  slug: "developing-anti-slapp-policies-a11y-slack-harvard-cyberlaw";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"drupalcon.md": {
	id: "drupalcon.md";
  slug: "drupalcon";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"encouraging-contributions-with-docs/index.md": {
	id: "encouraging-contributions-with-docs/index.md";
  slug: "encouraging-contributions-with-docs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"evinced-automated-accessibility-testing/index.md": {
	id: "evinced-automated-accessibility-testing/index.md";
  slug: "evinced-automated-accessibility-testing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"focus-on-what-matters/index.md": {
	id: "focus-on-what-matters/index.md";
  slug: "focus-on-what-matters";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how-i-audit-a-website-for-accessibility/index.md": {
	id: "how-i-audit-a-website-for-accessibility/index.md";
  slug: "how-i-audit-a-website-for-accessibility";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js-civil-rights-resources.md": {
	id: "js-civil-rights-resources.md";
  slug: "js-civil-rights-resources";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"jsconf-2014-australia-accessibility-shadow-dom/index.md": {
	id: "jsconf-2014-australia-accessibility-shadow-dom/index.md";
  slug: "jsconf-2014-australia-accessibility-shadow-dom";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"links-vs-buttons-in-modern-web-applications/index.md": {
	id: "links-vs-buttons-in-modern-web-applications/index.md";
  slug: "links-vs-buttons-in-modern-web-applications";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"live-coding-accessibility/index.md": {
	id: "live-coding-accessibility/index.md";
  slug: "live-coding-accessibility";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"notes-from-csun-2015/index.md": {
	id: "notes-from-csun-2015/index.md";
  slug: "notes-from-csun-2015";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"one-year-of-independence-modern-sole-design-llc/index.md": {
	id: "one-year-of-independence-modern-sole-design-llc/index.md";
  slug: "one-year-of-independence-modern-sole-design-llc";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"oreilly-web-platform-award-omg/index.md": {
	id: "oreilly-web-platform-award-omg/index.md";
  slug: "oreilly-web-platform-award-omg";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"page-scrolling-in-mobile-safari-voiceover/index.md": {
	id: "page-scrolling-in-mobile-safari-voiceover/index.md";
  slug: "page-scrolling-in-mobile-safari-voiceover";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pop-clock/index.md": {
	id: "pop-clock/index.md";
  slug: "pop-clock";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"remote-work-van-life/index.md": {
	id: "remote-work-van-life/index.md";
  slug: "remote-work-van-life";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"riding-a-bicycle-to-an-accessibility-conference/index.md": {
	id: "riding-a-bicycle-to-an-accessibility-conference/index.md";
  slug: "riding-a-bicycle-to-an-accessibility-conference";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"salary-and-career-growth/2019-08-21-salary-career-growth.md": {
	id: "salary-and-career-growth/2019-08-21-salary-career-growth.md";
  slug: "salary-and-career-growth/2019-08-21-salary-career-growth";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"speak-at-your-local-elementary-school/index.md": {
	id: "speak-at-your-local-elementary-school/index.md";
  slug: "speak-at-your-local-elementary-school";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"spiceboard-for-ipad/index.md": {
	id: "spiceboard-for-ipad/index.md";
  slug: "spiceboard-for-ipad";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"summing-up-jsconf-eu-2014/index.md": {
	id: "summing-up-jsconf-eu-2014/index.md";
  slug: "summing-up-jsconf-eu-2014";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"sutton-rv/index.md": {
	id: "sutton-rv/index.md";
  slug: "sutton-rv";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"target-corporate-website/index.md": {
	id: "target-corporate-website/index.md";
  slug: "target-corporate-website";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-deal-with-developer-advocacy/index.md": {
	id: "the-deal-with-developer-advocacy/index.md";
  slug: "the-deal-with-developer-advocacy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"this-is-what-a-developer-looks-like/index.md": {
	id: "this-is-what-a-developer-looks-like/index.md";
  slug: "this-is-what-a-developer-looks-like";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"wallys-last-day/index.md": {
	id: "wallys-last-day/index.md";
  slug: "wallys-last-day";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"webstock-nz-2013/index.md": {
	id: "webstock-nz-2013/index.md";
  slug: "webstock-nz-2013";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-ive-learned-working-on-a-large-open-source-framework/index.md": {
	id: "what-ive-learned-working-on-a-large-open-source-framework/index.md";
  slug: "what-ive-learned-working-on-a-large-open-source-framework";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"whats-your-legacy/index.md": {
	id: "whats-your-legacy/index.md";
  slug: "whats-your-legacy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"writing-winning-talk-abstracts/index.md": {
	id: "writing-winning-talk-abstracts/index.md";
  slug: "writing-winning-talk-abstracts";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};
"talks": {
"a-web-for-everybody-smashing-conf-whistler.md": {
	id: "a-web-for-everybody-smashing-conf-whistler.md";
  slug: "a-web-for-everybody-smashing-conf-whistler";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"accessibility-and-performance-generate-nyc.md": {
	id: "accessibility-and-performance-generate-nyc.md";
  slug: "accessibility-and-performance-generate-nyc";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"accessibility-and-the-shadow-dom-jsconfau.md": {
	id: "accessibility-and-the-shadow-dom-jsconfau.md";
  slug: "accessibility-and-the-shadow-dom-jsconfau";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"accessibility-of-mvcs-at-cascadiajs-2014.md": {
	id: "accessibility-of-mvcs-at-cascadiajs-2014.md";
  slug: "accessibility-of-mvcs-at-cascadiajs-2014";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"angular-accessibility-at-ngeurope.md": {
	id: "angular-accessibility-at-ngeurope.md";
  slug: "angular-accessibility-at-ngeurope";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"angular-connect-2016-testing-for-accessibility-with-angular.md": {
	id: "angular-connect-2016-testing-for-accessibility-with-angular.md";
  slug: "angular-connect-2016-testing-for-accessibility-with-angular";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"cascadiafest-where-in-the-stack-is-carmen-sanfrancisco.md": {
	id: "cascadiafest-where-in-the-stack-is-carmen-sanfrancisco.md";
  slug: "cascadiafest-where-in-the-stack-is-carmen-sanfrancisco";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"creative-mornings-empathy.md": {
	id: "creative-mornings-empathy.md";
  slug: "creative-mornings-empathy";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"dotjs-enabling-users-in-client-rendered-applications.md": {
	id: "dotjs-enabling-users-in-client-rendered-applications.md";
  slug: "dotjs-enabling-users-in-client-rendered-applications";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"empathy-driven-development-react-js-girls.md": {
	id: "empathy-driven-development-react-js-girls.md";
  slug: "empathy-driven-development-react-js-girls";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"empathy-driven-development.md": {
	id: "empathy-driven-development.md";
  slug: "empathy-driven-development";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"fluent-2015-accessibility-in-angularjs-and-beyond.md": {
	id: "fluent-2015-accessibility-in-angularjs-and-beyond.md";
  slug: "fluent-2015-accessibility-in-angularjs-and-beyond";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"fronteers-accessibility-and-performance.md": {
	id: "fronteers-accessibility-and-performance.md";
  slug: "fronteers-accessibility-and-performance";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"how-to-win-at-mobile-accessibility.md": {
	id: "how-to-win-at-mobile-accessibility.md";
  slug: "how-to-win-at-mobile-accessibility";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"innovating-with-accessibility-in-mind-fluent-2017-keynote.md": {
	id: "innovating-with-accessibility-in-mind-fluent-2017-keynote.md";
  slug: "innovating-with-accessibility-in-mind-fluent-2017-keynote";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"javascript-and-civil-rights-web-rebels.md": {
	id: "javascript-and-civil-rights-web-rebels.md";
  slug: "javascript-and-civil-rights-web-rebels";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"jsconf-2014.md": {
	id: "jsconf-2014.md";
  slug: "jsconf-2014";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"jsconf-eu-2014.md": {
	id: "jsconf-eu-2014.md";
  slug: "jsconf-eu-2014";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"live-accessibility-audit-smashing-conf-toronto.md": {
	id: "live-accessibility-audit-smashing-conf-toronto.md";
  slug: "live-accessibility-audit-smashing-conf-toronto";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"mobile-web-accessibility-responsive-field-day.md": {
	id: "mobile-web-accessibility-responsive-field-day.md";
  slug: "mobile-web-accessibility-responsive-field-day";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"radically-accessible-internet-applications-beyond-tellerrand.md": {
	id: "radically-accessible-internet-applications-beyond-tellerrand.md";
  slug: "radically-accessible-internet-applications-beyond-tellerrand";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"smashing-conf-sf-the-links-vs-buttons-showdown.md": {
	id: "smashing-conf-sf-the-links-vs-buttons-showdown.md";
  slug: "smashing-conf-sf-the-links-vs-buttons-showdown";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"testing-for-accessibility-with-axe-npm-camp.md": {
	id: "testing-for-accessibility-with-axe-npm-camp.md";
  slug: "testing-for-accessibility-with-axe-npm-camp";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"the-magic-of-automated-accessibility-testing-jsconf-2015.md": {
	id: "the-magic-of-automated-accessibility-testing-jsconf-2015.md";
  slug: "the-magic-of-automated-accessibility-testing-jsconf-2015";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"webexpo-2016-testing-for-accessibility-with-angular-2.md": {
	id: "webexpo-2016-testing-for-accessibility-with-angular-2.md";
  slug: "webexpo-2016-testing-for-accessibility-with-angular-2";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
"where-in-the-stack-is-carmen-sanfrancisco-react-rally-edition.md": {
	id: "where-in-the-stack-is-carmen-sanfrancisco-react-rally-edition.md";
  slug: "where-in-the-stack-is-carmen-sanfrancisco-react-rally-edition";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
