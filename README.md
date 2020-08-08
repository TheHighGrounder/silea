<div align="center">
  <img
    src="https://uploads.sileajs.com/images/logo/silea-letters-black-transparent-background.png"
    width="300px"
  />
</div>
<h1 align="center">
  Create amazing sites using WordPress & React
</h1>

<p align="center">
  <a href="https://sileajs.com">sileajs.com</a> |
  <a href="https://docs.sileajs.com/getting-started?utm_source=github-readme&utm_medium=get-started-link">Get Started</a> |
  <a href="https://docs.sileajs.com/silea-features">Features</a> |
  <a href="https://docs.sileajs.com/getting-started">Docs</a> |
  <a href="https://twitter.com/SileaJS">Twitter</a>
</p>

---

> Silea is a free and open source framework to develop WordPress themes based on ReactJS. To learn more about the framework, its basic concepts and how they work together, check out our docs:
>
> -   [About Silea framework](https://docs.sileajs.com/#about-silea-framework)
> -   [Learning Silea guide](https://docs.sileajs.com/learning-silea)
>
> If you can't wait to see what Silea can do, head over to our [Quick Start Guide](https://docs.sileajs.com/getting-started/quick-start-guide) to get up and running!
>
> Silea will continue to be improved during the next months, and new features will be added progressively.
>
> Feel free to [subscribe to our newsletter](https://sileajs.com/#newsletter) to **get notified of the latest framework updates and news**.
>
> <div align="center"><a href="https://docs.sileajs.com/getting-started?utm_source=github-readme&utm_medium=get-started-link"><strong>GET STARTED!</strong></a></div>
> <br />

---

<ul>
  <li><a href="#-what-is-silea">What is Silea?</a></li>
  <li><a href="#-how-does-silea-work">How does Silea work?</a></li>
  <li><a href="#-how-is-silea-organized">How is Silea organized?</a></li>
  <li><a href="#-get-involved-">Get involved 🤗</a></li>
  <li><a href="#-open-source">Open Source</a></li>
</ul>

# » What is Silea?

**Silea** can be explained in two different ways:

1. As an alternative rendering engine for WordPress.
1. As a React framework to create WordPress themes.

Both are true :)

## 1. An alternative rendering engine for WordPress

In the past the only way to get HTML out of WordPress was to use its **PHP rendering engine**. Quite an old friend, isn't it? ;)

But in WordPress 4.7 the [**WP API**](https://developer.wordpress.org/rest-api/) was included in the core.

> _An API is a protocol to retrieve content from an external service._

Thanks to the **WP API**, developers are not longer limited to the **PHP rendering engine**. They can retrieve their WordPress content and use it wherever they want. A new world of possibilities started.

One of those possibilities is to create WordPress themes using React. That's where **Silea** comes into play.

## 2. A React framework to create WordPress themes

[**React**](https://reactjs.org/) is a super powerful library for building user interfaces. It was created by **Facebook** and is taking over front-end development.

But, in spite of how amazing it is, React is just **a JavaScript library, not a framework**. It does not assume anything about the other parts in any full solution. It focuses on just one thing, and on doing that thing very well.

In order to create a WordPress theme with React, developers need to learn and configure lots of different things: _bundling, transpiling, routing, server rendering, retrieving data from WordPress, managing state, managing css, linting, testing..._

**There is a reason React frameworks exist**. For example, [Next.js](https://nextjs.org/) and [GatbsyJS](https://www.gatsbyjs.org/) are two amazing React frameworks. Both _can_ work with WordPress, but they are not focused on WordPress. Therefore, there's still some configuration and additional tooling left to the developer.

[**Silea**](https://sileajs.com), on the other hand, is an **opinionated React framework focused on WordPress**:

-   **Focused on WordPress:** each part of the framework has been simplified and optimized to be used with WordPress.
-   **Opinionated framework:** developers don't need to figure out what tools to use for things like css or state management.

This means everything is ready so you can jump in and create a new amazing WordPress theme using React right away! 🎉🚀

---

#### Curious? Learn how to start building your website with Silea in a few minutes >> [Get Started!](https://docs.sileajs.com/getting-started)

---

# » How does Silea work?

**Silea** apps live in Node.js, separated from WordPress.

-   It uses the WP API to retrieve content and generate the final HTML.
-   It is also capable of generating AMP pages with the same React code and CSS.

<div align="center"><img alt="Silea & WordPress explanation" src="https://uploads.sileajs.com/images/github/silea-wordpress-explanation.png" width="600px"></div>

### Why a different Node.js server?

React is a JavaScript library. In order to generate HTML for the visitors or Google, the server needs to be able to run JavaScript as well.

> _In theory a PHP server can send an empty HTML with the JavaScript files and the visitor will see the page after the JavaScript has loaded, but it is not a good user experience and certainly not recommended if your site needs to rank in Google._

**Silea** is prepared to be hosted either in a regular Node.js server or in **serverless** services like [AWS Lambda](https://aws.amazon.com/lambda), [Now](https://zeit.co/now), [Netlify](https://www.netlify.com/), [Google Functions](https://cloud.google.com/functions/) and so on. That makes it super cheap and infinitely scalable.

Oh, and by the way, **Silea is extensible**. It allows you to easily add new features to your theme via extensions and NPM packages without having to create them from scratch. Right now, we are working on extensions like _Disqus comments, OneSignal notifications, Adsense, Doubleclick, SmartAds, Google Analytics, Google Tag Manager, Custom CSS or Custom HTML_. This means, Silea Themes won't have to reinvent the wheel and include the same functionalities over and over.

---

Discover all features here >> **[Silea features](https://docs.sileajs.com/silea-features)**.

---

# » How is Silea organized?

GitHub is where magic happens, but there are more channels where you can find information about the project, discuss about it and get involved:

<ul>
  <li>📖 <strong>Docs</strong>: this is the place to learn how to build amazing sites with Silea. <a href="https://docs.sileajs.com/getting-started">Get started!</a></li>
  <li>🐞 <strong>GitHub</strong>: we use GitHub for bugs and pull requests, doubts are solved at the community forum.</li>
  <li>🗣 <strong>Social media</strong>: a more informal place to interact with Silea users, reach out to us on <a href="https://twitter.com/SileaJS">Twitter.</a></li>
  <li>💌 <strong>Newsletter</strong>: do you want to receive the latest framework updates and news? Subscribe <a href="https://twitter.com/SileaJS">here.</a></li>
</ul>

# » Get involved 🤗

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help >> [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute).

# » Open source

Silea is licensed under the terms of the [The Hippocratic License 2.1](https://github.com/SileaJS/silea/blob/master/LICENSE) license.
<br />
<br />

---

Do you miss any important information? Check out [our docs](https://docs.sileajs.com/getting-started).
