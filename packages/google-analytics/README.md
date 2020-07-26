# `@sileajs/google-analytics`

[![Version](https://img.shields.io/npm/v/@sileajs/google-analytics.svg)](https://www.npmjs.com/package/@sileajs/google-analytics) [![npm](https://img.shields.io/npm/dw/@sileajs/google-analytics)](https://www.npmjs.com/package/@sileajs/google-analytics) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

Analytics package to use Google Analytics with Silea

## Install

```sh
npm i @sileajs/google-analytics
```

## Usage

Once is installed the GA Tracking ID should be added in the `silea.settings.js` under the package `state`

**`silea.settings.js`**

```js
export default {
	packages: [
		{
			name: "@sileajs/google-analytics",
			state: {
				googleAnalytics: {
					trackingId: "UA-12345678-9",
				},
			},
		},
	],
};
```

## Feature Discussions

[**Feature Discussions**](https://community.sileajs.com/c/feature-discussions/33) about Silea are public. You can join the discussions, vote for those you're interested in or create new ones.

These are the ones related to this package: https://community.sileajs.com/tags/c/feature-discussions/33/google-analytics

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages/google-analytics/CHANGELOG.md)

---

### » Silea Channels 🌎

[![Community Forum Topics](https://img.shields.io/discourse/topics?color=blue&label=community%20forum&server=https%3A%2F%2Fcommunity.sileajs.com%2F)](https://community.sileajs.com/) [![Twitter: silea](https://img.shields.io/twitter/follow/silea.svg?style=social)](https://twitter.com/silea) ![Silea Github Stars](https://img.shields.io/github/stars/sileajs/silea?style=social)

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

-   📖 **[Docs](https://docs.sileajs.com)**: this is the place to learn how to build amazing sites with Silea.
-   👨‍👩‍👧‍👦 **[Community](https://community.sileajs.com/)**: use our forum to [ask any questions](https://community.sileajs.com/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Silea](https://community.sileajs.com/c/showcases)!
-   🐞 **[GitHub](https://github.com/SileaJS/silea)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.sileajs.com/)!
-   🗣 **Social media**: a more informal place to interact with Silea users, reach out to us on [Twitter](https://twitter.com/silea).
-   💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://sileajs.com/)

### » Get involved 🤗

[![GitHub issues by-label](https://img.shields.io/github/issues/sileajs/silea/good%20first%20issue)](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Got questions or feedback about Silea? We'd love to hear from you. Use our [community forum](https://community.sileajs.com) yo ! ❤️

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help: [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute)

If you're eager to start contributing to the code, maybe you'd like to open a pull request to address one of our [_good first issues_](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
