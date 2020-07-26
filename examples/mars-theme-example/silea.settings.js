export default {
	name: "mars-theme-example",
	state: {
		silea: {
			url: "https://mars.sileajs.com",
			title: "Test Silea Blog",
			description: "Useful content for Silea development",
		},
	},
	packages: [
		"@sileajs/tiny-router",
		"@sileajs/html2react",
		{
			name: "@sileajs/mars-theme",
			state: {
				theme: {
					menu: [
						["Home", "/"],
						["Nature", "/category/nature/"],
						["Travel", "/category/travel/"],
						["Japan", "/tag/japan/"],
						["About Us", "/about-us/"],
					],
					featured: {
						showOnList: true,
						showOnPost: true,
					},
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
