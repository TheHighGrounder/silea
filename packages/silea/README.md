# `silea`

[![Version](https://img.shields.io/npm/v/silea.svg)](https://www.npmjs.com/package/silea) [![npm](https://img.shields.io/npm/dw/silea)](https://www.npmjs.com/package/silea) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

Silea cli and entry point to other packages.

More info about this package can be found in the docs → https://docs.sileajs.com/api-reference-1/silea

## Install

It is automatically installed when you create your Silea project by doing

```sh
npx silea create [project-name]
```

> More info on `npx silea create` [here](https://docs.sileajs.com/silea-cli/create)

## Usage

```jsx
import { Global, css } from "silea";

const Page = () => (
	<>
		<Global
			styles={css`
				body {
					margin: 0;
					font-family: "Roboto";
				}
			`}
		/>
		<OtherContent />
	</>
);
```

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages//CHANGELOG.md)

---

### » Silea Resources 🌎

[![Twitter: silea](https://img.shields.io/twitter/follow/silea.svg?style=social)](https://twitter.com/silea) ![Silea Github Stars](https://img.shields.io/github/stars/sileajs/silea?style=social)

We have a number of different channels at your disposal where you can find out more information about the project, join in discussions about it, and also get involved:

-   **📖 [Docs](https://docs.sileajs.com/):** our primary documentation resource - this is the place to learn how to build amazing sites with Silea.

*   **🐞 Contribute:** we use [GitHub](https://github.com/SileaJS/silea) for bugs and pull requests. See our [Contributing](../contributing/) section to find out how you can help develop Silea, or improve this documentation.
*   **🗣 Social media**: interact with other Silea users. Reach out to us on [Twitter](https://twitter.com/silea). Mention us in your tweets about Silea and what you're building by using **`@silea`**.
*   💌 **Newsletter:** do you want to receive the latest news about Silea and find out as soon as there's an update to the framework? Subscribe to our [newsletter](https://sileajs.com/#newsletter).

### » Get involved 🤗

[![GitHub issues by-label](https://img.shields.io/github/issues/sileajs/silea/good%20first%20issue)](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start then this guide might help: [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute).

If you would like to start contributing to the code please open a pull request to address one of our [_good first issues_](https://github.com/SileaJS/silea/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
