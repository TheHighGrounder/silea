# `@sileajs/connect`

[![Version](https://img.shields.io/npm/v/@sileajs/connect.svg)](https://www.npmjs.com/package/@sileajs/connect) [![npm](https://img.shields.io/npm/dw/@sileajs/connect)](https://www.npmjs.com/package/@sileajs/connect) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

The state manager of Silea.
Similar to [MobX](https://mobx.js.org/README.html) but much more lightweight because it's based on [ES6 proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

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

This package is not meant to be installed individually.
The public methods defined in `@sileajs/connect` are meant to be used through [`silea`](https://github.com/SileaJS/silea/tree/dev/packages/silea) package (from which we can import these [methods](https://github.com/SileaJS/silea/blob/dev/packages/silea/src/index.ts)).

## Usage

Some interesting methods defined in this package and available through [`silea`](https://github.com/SileaJS/silea/tree/dev/packages/silea) package are:

-   [`connect`](https://docs.sileajs.com/api-reference-1/silea#connect)
-   [`useConnect`](https://docs.sileajs.com/api-reference-1/silea#useconnect)

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages/connect/CHANGELOG.md)

---

## Open Source Community

### Channels

[![Twitter: silea](https://img.shields.io/twitter/follow/silea.svg?style=social)](https://twitter.com/silea) ![Silea Github Stars](https://img.shields.io/github/stars/sileajs/silea?style=social)

Silea has a number of different channels at your disposal where you can find out more information about the project, join in discussions about it, and also get involved:

-   **📖 [Docs](https://docs.sileajs.com/):** Silea's primary documentation resource - this is the place to learn how to build amazing sites with Silea.

*   **🐞 Contribute:** Silea uses [GitHub](https://github.com/SileaJS/silea) for bugs and pull requests. Check out the [Contributing](../contributing/) section to find out how you can help develop Silea, or improve this documentation.
*   **🗣 Social media**: interact with other Silea users. Reach out to the Silea team on [Twitter](https://twitter.com/silea). Mention us in your tweets about Silea and what you're building by using **`@silea`**.
*   💌 **Newsletter:** do you want to receive the latest news about Silea and find out as soon as there's an update to the framework? Subscribe to our [newsletter](https://sileajs.com/#newsletter).

### Get involved

[![GitHub issues by-label](https://img.shields.io/github/issues/sileajs/silea/good%20first%20issue)](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start then this guide might help: [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute).

If you would like to start contributing to the code please open a pull request to address one of our [_good first issues_](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
