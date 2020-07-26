# `@sileajs/head-tags`

[![Version](https://img.shields.io/npm/v/@sileajs/head-tags.svg)](https://www.npmjs.com/package/@sileajs/head-tags) [![npm](https://img.shields.io/npm/dw/@sileajs/head-tags)](https://www.npmjs.com/package/@sileajs/head-tags) [![License: Apache--2.0](https://img.shields.io/badge/license-Apache%202-lightgrey)](https://github.com/sileajs/silea/blob/master/LICENSE)

This package is designed to automatically get all the data that the [REST API Head Tags plugin](https://wordpress.org/plugins/rest-api-head-tags/) exposes in the REST API, depending on the URL.

This package needs to be used together with the Head Tags WordPress plugin, so before installing this package you have to install the Head Tags plugin in your WordPress backend.

Full info about this package can be found in the [docs](https://docs.sileajs.com/api-reference-1/silea-head-tags)

## Table of contents

<!-- toc -->

-   [Install](#install)
-   [Usage](#usage)
-   [Feature Discussions](#feature-discussions)
-   [Changelog](#changelog)
-   [Open Source Community](#open-source-community)
    -   [Channels](#channels)
    -   [Get involved](#get-involved)

<!-- tocstop -->

## Install

```sh
npm i @sileajs/head-tags
```

## Usage

Once installed it should be included in your `silea.settings.js`

```jsx
module.exports = {
	packages: ["@sileajs/head-tags"],
};
```

Full info about this package can be found in the [docs](https://docs.sileajs.com/api-reference-1/silea-head-tags)

## Feature Discussions

[**Feature Discussions**](https://community.sileajs.com/c/feature-discussions/33) about Silea are public. You can join the discussions, vote for those you're interested in or create new ones.

These are the ones related to this package: https://community.sileajs.com/tags/c/feature-discussions/33/head-tags

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/sileajs/silea/blob/dev/packages/head-tags/CHANGELOG.md)

---

## Open Source Community

### Channels

[![Community Forum Topics](https://img.shields.io/discourse/topics?color=blue&label=community%20forum&server=https%3A%2F%2Fcommunity.sileajs.com%2F)](https://community.sileajs.com/) [![Twitter: silea](https://img.shields.io/twitter/follow/silea.svg?style=social)](https://twitter.com/silea) ![Silea Github Stars](https://img.shields.io/github/stars/silea/silea?style=social)

Silea has a number of different channels at your disposal where you can find out more information about the project, join in discussions about it, and also get involved:

-   **📖 [Docs](https://docs.sileajs.com/):** Silea's primary documentation resource - this is the place to learn how to build amazing sites with Silea.

*   **👨‍👩‍👧‍👦 [Community forum](https://community.sileajs.com/):** join Silea's forum and ask questions, share your knowledge, give feedback and meet other cool Silea people. We'd love to know about what you're building with Silea, so please do swing by the [forum](https://community.sileajs.com/) and tell us about your projects.
*   **🐞 Contribute:** Silea uses [GitHub](https://github.com/sileajs/silea) for bugs and pull requests. Check out the [Contributing](../contributing/) section to find out how you can help develop Silea, or improve this documentation.
*   **🗣 Social media**: interact with other Silea users. Reach out to the Silea team on [Twitter](https://twitter.com/silea). Mention us in your tweets about Silea and what you're building by using **`@silea`**.
*   💌 **Newsletter:** do you want to receive the latest news about Silea and find out as soon as there's an update to the framework? Subscribe to our [newsletter](https://sileajs.com/#newsletter).

### Get involved

[![GitHub issues by-label](https://img.shields.io/github/issues/silea/silea/good%20first%20issue)](https://github.com/sileajs/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Got questions or feedback about Silea? We'd love to hear from you in our [community forum](https://community.sileajs.com).

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start then this guide might help: [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute).

If you would like to start contributing to the code please open a pull request to address one of our [_good first issues_](https://github.com/sileajs/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
