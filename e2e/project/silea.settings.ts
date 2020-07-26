import { Settings } from "silea/types";

const settings: Settings = [
	{
		name: "head",
		packages: ["e2e-head"],
	},
	{
		name: "image",
		packages: ["e2e-image"],
	},
	{
		name: "fonts",
		packages: [
			{
				name: "@sileajs/tiny-router",
				state: { router: { autoFetch: false } },
			},
			"e2e-fonts",
		],
	},
	{
		name: "emotion",
		packages: [
			{
				name: "@sileajs/tiny-router",
				state: { router: { autoFetch: false } },
			},
			"e2e-emotion",
		],
	},
	{
		name: "loadable",
		packages: ["e2e-loadable"],
	},
	{
		name: "iframe",
		packages: ["e2e-iframe"],
	},
	{
		name: "wp-source-errors",
		packages: [
			"e2e-wp-source-errors",
			"@sileajs/wp-source",
			"@sileajs/tiny-router",
		],
	},
	{
		name: "script",
		packages: ["e2e-script"],
	},
	{
		name: "switch",
		packages: ["e2e-switch"],
	},
	{
		name: "html2react",
		packages: ["e2e-html2react", "@sileajs/html2react"],
	},
	{
		name: "tiny-router",
		packages: [
			"e2e-tiny-router",
			{
				name: "@sileajs/tiny-router",
				state: { router: { autoFetch: false } },
			},
			{
				name: "@sileajs/wp-source",
				state: {
					source: { api: "https://test.sileajs.com/wp-json" },
				},
			},
		],
	},
	{
		name: "google-tag-manager",
		packages: [
			"e2e-analytics",
			"@sileajs/tiny-router",
			{
				name: "@sileajs/google-tag-manager-analytics",
				state: {
					googleTagManagerAnalytics: {
						containerId: "GTM-XXXXXX-X",
					},
				},
			},
		],
	},
	{
		name: "comscore-analytics",
		packages: [
			"e2e-analytics",
			"@sileajs/tiny-router",
			{
				name: "@sileajs/comscore-analytics",
				state: {
					comscoreAnalytics: {
						trackingIds: ["111111", "222222"],
					},
				},
			},
		],
	},
	{
		name: "use-in-view",
		packages: ["e2e-use-in-view"],
	},
	{
		name: "slot-and-fill",
		packages: ["e2e-slot-and-fill"],
	},
	{
		name: "analytics",
		packages: [
			"e2e-analytics",
			"@sileajs/tiny-router",
			"@sileajs/analytics",
		],
	},
	{
		name: "google-analytics",
		packages: [
			"e2e-analytics",
			"@sileajs/tiny-router",
			{
				name: "@sileajs/google-analytics",
				state: {
					googleAnalytics: {
						trackingIds: ["UA-XXXXXX-X", "UA-YYYYYY-Y"],
					},
				},
			},
		],
	},
];

export default settings;
