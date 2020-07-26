/* eslint-disable @typescript-eslint/camelcase */
import clone from "clone-deep";
import { createStore, InitializedStore } from "@sileajs/connect";
import wpSource from "@sileajs/wp-source/src";
import HeadTagsPackage, { State, HeadTags } from "../../types";
import headTagsPackage from "..";
import {
	mockPostEntity,
	mockPostType,
	mockTaxonomy,
	mockAuthor,
} from "./mocks/utils";

// Spy `console.warn`
const warn = jest.spyOn(global.console, "warn");

// Mock Silea state.
let store: InitializedStore<HeadTagsPackage>;
beforeEach(() => {
	warn.mockClear();

	// Create store.
	const config: HeadTagsPackage = clone(headTagsPackage());

	// Mock wp-source state.
	config.state.source = clone(wpSource()).state.source;
	config.state.source.api = "https://test.sileajs.com/wp-json";
	// Mock router state.
	config.state.router = { link: "/", state: {} };
	// Mock site url.
	config.state.silea = { url: "https://mars.sileajs.com" };
	// Initialize store.
	store = createStore(config);
});

describe("state.headTags.get() (post entity)", () => {
	const setUpState = (state: State, headTags?: HeadTags) => {
		// Populate source state.
		const { post, data } = mockPostEntity(headTags);
		state.source.post = post;
		state.source.data = data;

		// Populate router state.
		state.router.link = "/post-1/";
	};

	test("returns an empty array if `head_tags` is undefined", () => {
		const headTags = undefined;
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(store.state.headTags.get(store.state.router.link)).toEqual([]);
	});

	test("returns elements without attributes (title)", () => {
		const headTags: HeadTags = [
			{ tag: "title", content: "Post 1 - Silea" },
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("returns elements without content (meta tags)", () => {
		const headTags: HeadTags = [
			{
				tag: "meta",
				attributes: {
					name: "robots",
					content:
						"max-snippet:-1, max-image-preview:large, max-video-preview:-1",
				},
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("transforms links that point to WordPress pages", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/post-1/",
				},
			},
			{
				tag: "meta",
				attributes: {
					property: "og:url",
					content: "https://test.sileajs.com/post-1/",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "shortlink",
					href: "https://test.sileajs.com/?p=1",
				},
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("doesn't change links that don't point to WordPress pages", () => {
		const headTags: HeadTags = [
			{
				tag: "meta",
				attributes: {
					property: "og:image",
					content:
						"https://test.sileajs.com/wp-content/uploads/2019/12/img.jpg",
				},
			},
			{
				tag: "meta",
				attributes: {
					name: "twitter:image",
					content:
						"https://test.sileajs.com/wp-content/uploads/2019/12/img.jpg",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "dns-prefetch",
					href: "//s.w.org",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "alternate",
					type: "application/rss+xml",
					title: "silea » Feed",
					href: "https://test.sileajs.com/feed/",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "alternate",
					type: "application/rss+xml",
					title: "silea » Comments Feed",
					href: "https://test.sileajs.com/comments/feed/",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "alternate",
					type: "application/rss+xml",
					title: "silea » Post 1 Comments Feed",
					href: "https://test.sileajs.com/post-1/feed/",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "EditURI",
					type: "application/rsd+xml",
					title: "RSD",
					href: "https://test.sileajs.com/xmlrpc.php?rsd",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "wlwmanifest",
					type: "application/wlwmanifest+xml",
					href:
						"https://test.sileajs.com/wp-includes/wlwmanifest.xml",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "alternate",
					type: "application/json+oembed",
					href:
						"https://test.sileajs.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Ftest.sileajs.com%2Fpost-1%2F",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "alternate",
					type: "text/xml+oembed",
					href:
						"https://test.sileajs.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Ftest.sileajs.com%2Fpost-1%2F&format=xml",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "pingback",
					href: "https://test.sileajs.com/xmlrpc.php",
				},
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("transform links inside ld+json data", () => {
		const headTags: HeadTags = [
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
					class: "yoast-schema-graph yoast-schema-graph--main",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change...
							"@type": "WebSite",
							"@id": "https://test.sileajs.com/#website",
							url: "https://test.sileajs.com/",
							potentialAction: {
								"@type": "SearchAction",
								target:
									"https://test.sileajs.com/?s={search_term_string}",
							},
						},
						{
							"@type": "ImageObject",
							"@id":
								"https://test.sileajs.com/post-1/#primaryimage",
							// ...except this one.
							url:
								"https://test.sileajs.com/wp-content/uploads/2019/12/img.jpg",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("transforms links appropiately when WP is in a subdirectory", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/subdir/post-1/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/subdir/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change
							"@type": "WebSite",
							"@id":
								"https://test.sileajs.com/subdir/#website",
							url: "https://test.sileajs.com/subdir/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Change API prop
		store.state.source.api = "https://test.sileajs.com/subdir/wp-json/";

		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("transforms links appropiately when Silea is in a subdirectory", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/subdir/post-1/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/subdir/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change
							"@type": "WebSite",
							"@id":
								"https://test.sileajs.com/subdir/#website",
							url: "https://test.sileajs.com/subdir/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Change API and Silea URL prop
		store.state.silea.url = "https://sileajs.com/mars/";
		store.state.source.api = "https://test.sileajs.com/subdir/wp-json/";

		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("shows a warning message if `state.silea.url` is not defined", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/subdir/post-1/", // should change
				},
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Remove `state.silea.url`.
		delete store.state.silea.url;

		const warn = jest.spyOn(global.console, "warn");

		// Test current head tags.
		store.state.headTags.get(store.state.router.link);

		expect(warn).toHaveBeenCalled();
		expect(warn.mock.calls).toMatchSnapshot();
	});

	test('shows a warning message if a <script type="ld+json"> could not be parsed', () => {
		const headTags: HeadTags = [
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://test.sileajs.com/wrong-title/#webpage",
      "url": "https://test.sileajs.com/wrong-title/",
      "inLanguage": "en-US",
      "name": "Wrong title with "quotes" - silea",
      "isPartOf": {
        "@id": "https://test.sileajs.com/#website"
      }
    }
  ]
}`,
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Test current head tags.
		store.state.headTags.get(store.state.router.link);

		expect(warn).toHaveBeenCalled();
		expect(warn.mock.calls).toMatchSnapshot();
	});

	test("doesn't transform links if `state.headTags.transformLinks` = false", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/post-1/", // should not change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should not change
							"@type": "WebSite",
							"@id": "https://test.sileajs.com/#website",
							url: "https://test.sileajs.com/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Set `transformLinks` to false.
		store.state.headTags.transformLinks = false;

		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("doesn't transform links if `source.api` and `silea.url` are the same site", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/post-1/", // should not change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should not change
							"@type": "WebSite",
							"@id": "https://test.sileajs.com/#website",
							url: "https://test.sileajs.com/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Set `silea.url` to the same site.
		store.state.silea.url = "https://test.sileajs.com/";

		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("transform links using a custom `base` value", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://different.sileajs.com/blog/post-1/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change
							"@type": "WebSite",
							"@id":
								"https://different.sileajs.com/blog/#website",
							url: "https://different.sileajs.com/blog/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Set `transformLinks` to false.
		const { transformLinks } = store.state.headTags;
		if (transformLinks)
			transformLinks.base = "https://different.sileajs.com/blog/";

		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});

	test("transform links using a custom `ignore` value", () => {
		const headTags: HeadTags = [
			{
				tag: "meta",
				attributes: {
					name: "twitter:image",
					// should change
					content:
						"https://test.sileajs.com/wp-content/uploads/2019/12/img.jpg",
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "alternate",
					type: "application/rss+xml",
					title: "silea » Feed",
					// SHOULD NOT CHANGE
					href: "https://test.sileajs.com/do-not-change/me/",
				},
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);

		// Set `transformLinks` to false.
		const { transformLinks } = store.state.headTags;
		if (transformLinks) {
			transformLinks.base = "https://test.sileajs.com/";
			transformLinks.ignore = "do\\-not\\-change";
		}

		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});
});

describe("state.headTags.get() (post type)", () => {
	const setUpState = (state: State, headTags?: HeadTags) => {
		// Populate source state.
		const { type, data } = mockPostType(headTags);
		state.source.type = type;
		state.source.data = data;

		// Populate router state.
		state.router.link = "/";
	};

	test("works with post types", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "next",
					href: "https://test.sileajs.com/page/2/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change
							"@type": "WebSite",
							"@id": "https://test.sileajs.com/#website",
							url: "https://test.sileajs.com/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});
});

describe("state.headTags.get() (taxonomy)", () => {
	const setUpState = (state: State, headTags?: HeadTags) => {
		// Populate source state.
		const { category, data } = mockTaxonomy(headTags);
		state.source.category = category;
		state.source.data = data;

		// Populate router state.
		state.router.link = "/category/cat-1/";
	};

	test("works with taxonomies", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/category/cat-1/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "next",
					href: "https://test.sileajs.com/category/cat-1/page/2/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change
							"@type": "WebSite",
							"@id": "https://test.sileajs.com/#website",
							url: "https://test.sileajs.com/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});
});

describe("state.headTags.get() (author)", () => {
	const setUpState = (state: State, headTags?: HeadTags) => {
		// Populate source state.
		const { author, data } = mockAuthor(headTags);
		state.source.author = author;
		state.source.data = data;

		// Populate router state.
		state.router.link = "/author/author-1/";
	};

	test("works with auhors", () => {
		const headTags: HeadTags = [
			{
				tag: "link",
				attributes: {
					rel: "canonical",
					href: "https://test.sileajs.com/author/author-1/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "next",
					href:
						"https://test.sileajs.com/author/author-1/page/2/", // should change
				},
			},
			{
				tag: "link",
				attributes: {
					rel: "https://api.w.org/",
					href: "https://test.sileajs.com/wp-json/", // should not change
				},
			},
			{
				tag: "script",
				attributes: {
					type: "application/ld+json",
				},
				content: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							// All these links should change
							"@type": "WebSite",
							"@id": "https://test.sileajs.com/#website",
							url: "https://test.sileajs.com/",
						},
					],
				}),
			},
		];
		// Populate all state.
		setUpState(store.state, headTags);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});
});

describe("state.headTags.get() (no entity)", () => {
	const setUpState = (state: State) => {
		// Populate source state.
		state.source.data = {
			"/2019/12/": {
				items: [],
				isArchive: true,
				isDate: true,
				year: 2019,
				month: 12,
				day: undefined,
				isFetching: false,
				isReady: true,
			},
		};

		// Populate router state.
		state.router.link = "/2019/12/";
	};

	test("returns an empty array if there is no entity for current link", () => {
		// Populate all state.
		setUpState(store.state);
		// Test current head tags.
		expect(
			store.state.headTags.get(store.state.router.link)
		).toMatchSnapshot();
	});
});
