# `@sileajs/mars-theme`

[![Version](https://img.shields.io/npm/v/@sileajs/mars-theme.svg)](https://www.npmjs.com/package/@sileajs/mars-theme) [![npm](https://img.shields.io/npm/dw/@sileajs/mars-theme)](https://www.npmjs.com/package/@sileajs/mars-theme) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

A starter theme for Silea

Full info about this theme can be found in the [docs](https://docs.sileajs.com/silea-themes/silea-mars-theme)

![](https://raw.githubusercontent.com/silea/gitbook-docs/master/docs/.gitbook/assets/screenshot-mars-theme-demo.png)

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
npm i @sileajs/mars-theme
```

## Usage

Once installed it should be included in your `silea.settings.js`.
The theme options can be specified in the `state.theme` property.

```javascript
{
  name: "@sileajs/mars-theme",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["Nature", "/category/nature/"],
        ["Travel", "/category/travel/"],
        ["Japan", "/tag/japan/"],
        ["About Us", "/about-us/"]
      ],
      featured: {
        showOnList: true,
        showOnPost: true
      }
    }
  }
},
```

Full info about this theme can be found in the [docs](https://docs.sileajs.com/silea-themes/silea-mars-theme)

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages/mars-theme/CHANGELOG.md)

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
