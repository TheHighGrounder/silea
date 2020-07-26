export default {
	name: "twentytwenty-theme-example",
	state: {
		silea: {
			url: "https://twentytwenty.sileajs.com",
			title: "Test Silea Blog",
			description: "Useful content for Silea development",
		},
	},
	packages: [
		"@sileajs/tiny-router",
		"@sileajs/html2react",
		{
			name: "@sileajs/twentytwenty-theme",
			state: {
				theme: {
					menu: [
						["Home", "/"],
						["Nature", "/category/nature/"],
						["Travel", "/category/travel/"],
						["Japan", "/tag/japan/"],
						["About Us", "/about-us/"],
					],
					colors: {
						primary: "#E6324B",
						headerBg: "#ffffff",
						footerBg: "#ffffff",
						bodyBg: "#f5efe0",
					},
					// Whether to show the search button in page header
					showSearchInHeader: true,
					// Whether to show all post content or only excerpt (summary) in archive view
					showAllContentOnArchive: false,
					// Settings for the featured media (image or video)
					featuredMedia: {
						// Whether to show it on archive view
						showOnArchive: true,
						// Whether to show it on post
						showOnPost: true,
					},
					// Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
					autoPreFetch: "hover",
					/**
					 * At the moment, we only include the ascii characters of Inter font.
					 * Values can be "us-ascii" | "latin" | "all"
					 */
					fontSets: "us-ascii",
				},
			},
		},
		{
			name: "@sileajs/wp-source",
			state: {
				source: {
					api: "https://test.sileajs.com/wp-json",
				},
			},
		},
	],
};
