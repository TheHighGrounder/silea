# `@sileajs/error`

[![Version](https://img.shields.io/npm/v/@sileajs/error.svg)](https://www.npmjs.com/package/@sileajs/error) [![npm](https://img.shields.io/npm/dw/@sileajs/error)](https://www.npmjs.com/package/@sileajs/error) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

Silea errors and warnings.
`warn` and `error` are just wrappers for `console.warn` and `console.error`

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

This package is not meant to be installed individually, it comes within [`silea`](https://github.com/SileaJS/silea/tree/dev/packages/silea).

## Usage

These tools are only meant to be used by silea code (packages included).

```js
import { warn, error } from "silea";
...
warn("Warning: myMethod() is being used in a non ... ");
...
```

## Feature Discussions

[**Feature Discussions**](https://community.sileajs.com/c/feature-discussions/33) about Silea are public. You can join the discussions, vote for those you're interested in or create new ones.

These are the ones related to this package: https://community.sileajs.com/tags/c/feature-discussions/33/error

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages/error/CHANGELOG.md)

---

## Open Source Community

### Channels

[![Community Forum Topics](https://img.shields.io/discourse/topics?color=blue&label=community%20forum&server=https%3A%2F%2Fcommunity.sileajs.com%2F)](https://community.sileajs.com/) [![Twitter: silea](https://img.shields.io/twitter/follow/silea.svg?style=social)](https://twitter.com/silea) ![Silea Github Stars](https://img.shields.io/github/stars/sileajs/silea?style=social)

Silea has a number of different channels at your disposal where you can find out more information about the project, join in discussions about it, and also get involved:

-   **📖 [Docs](https://docs.sileajs.com/):** Silea's primary documentation resource - this is the place to learn how to build amazing sites with Silea.

*   **👨‍👩‍👧‍👦 [Community forum](https://community.sileajs.com/):** join Silea's forum and ask questions, share your knowledge, give feedback and meet other cool Silea people. We'd love to know about what you're building with Silea, so please do swing by the [forum](https://community.sileajs.com/) and tell us about your projects.
*   **🐞 Contribute:** Silea uses [GitHub](https://github.com/SileaJS/silea) for bugs and pull requests. Check out the [Contributing](../contributing/) section to find out how you can help develop Silea, or improve this documentation.
*   **🗣 Social media**: interact with other Silea users. Reach out to the Silea team on [Twitter](https://twitter.com/silea). Mention us in your tweets about Silea and what you're building by using **`@silea`**.
*   💌 **Newsletter:** do you want to receive the latest news about Silea and find out as soon as there's an update to the framework? Subscribe to our [newsletter](https://sileajs.com/#newsletter).

### Get involved

[![GitHub issues by-label](https://img.shields.io/github/issues/sileajs/silea/good%20first%20issue)](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Got questions or feedback about Silea? We'd love to hear from you in our [community forum](https://community.sileajs.com).

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start then this guide might help: [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute).

If you would like to start contributing to the code please open a pull request to address one of our [_good first issues_](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
