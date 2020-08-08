# `@sileajs/google-tag-manager-analytics`

[![Version](https://img.shields.io/npm/v/@sileajs/google-tag-manager-analytics.svg)](https://www.npmjs.com/package/@sileajs/google-tag-manager-analytics) [![npm](https://img.shields.io/npm/dw/@sileajs/google-tag-manager-analytics)](https://www.npmjs.com/package/@sileajs/google-tag-manager-analytics) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

Analytics package to use Google Tag Manager with Silea

## Install

```sh
npm i @sileajs/google-tag-manager-analytics
```

## Usage

Once is installed the Container ID should be added in the `silea.settings.js` under the package `state`

**`silea.settings.js`**

```js
export default {
	packages: [
		{
			name: "@sileajs/google-tag-manager-analytics",
			state: {
				googleTagManagerAnalytics: {
					containerId: "GTM-BCDFGHJ",
				},
			},
		},
	],
};
```

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages/google-tag-manager-analytics/CHANGELOG.md)

---

### » Silea Channels 🌎

[![Twitter: silea](https://img.shields.io/twitter/follow/silea.svg?style=social)](https://twitter.com/silea) ![Silea Github Stars](https://img.shields.io/github/stars/sileajs/silea?style=social)

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

-   📖 **[Docs](https://docs.sileajs.com)**: this is the place to learn how to build amazing sites with Silea.
-   🐞 **[GitHub](https://github.com/SileaJS/silea)**: we use GitHub for bugs and pull requests.!
-   🗣 **Social media**: a more informal place to interact with Silea users, reach out to us on [Twitter](https://twitter.com/silea).
-   💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://sileajs.com/)

### » Get involved 🤗

[![GitHub issues by-label](https://img.shields.io/github/issues/sileajs/silea/good%20first%20issue)](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help: [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute)

If you're eager to start contributing to the code, maybe you'd like to open a pull request to address one of our [_good first issues_](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
