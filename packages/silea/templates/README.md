# $name$

This project was bootstrapped with [Silea](https://sileajs.com/).

#### Table of Contents

-   [Launch a development server](#launch-a-development-server)
-   [Create your custom theme](#create-your-custom-theme)
-   [Create a production-ready build](#create-a-production-ready-build)
-   [Deploy](#deploy)

### Launch a development server

```
npx silea dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.

> Have a look at our [Quick Start Guide](https://docs.sileajs.com/getting-started/quick-start-guide)

### Create your custom theme

```
npx silea create-package your-custom-theme
```

Use the command `npx silea create-package` to create a new package that can be set in your `silea.settings.js` as your theme

> Have a look at our blog post [How to Create a React WordPress Theme in 30 Minutes](https://sileajs.com/blog/how-to-create-a-react-theme-in-30-minutes/)

### Create a production-ready build

```
npx silea build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Silea's architecture](https://docs.sileajs.com/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project

#### As a node app

Use `npx silea serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Now or Netlify.

> Get more info about [how to deploy](https://docs.sileajs.com/deployment) a Silea project

---

### » Silea Channels 🌎

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

-   📖 **[Docs](https://docs.sileajs.com)**: this is the place to learn how to build amazing sites with Silea.
-   👨‍👩‍👧‍👦 **[Community](https://community.sileajs.com/)**: use our forum to [ask any questions](https://community.sileajs.com/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Silea](https://community.sileajs.com/c/showcases)!
-   🐞 **[GitHub](https://github.com/sileajs/silea)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.sileajs.com/)!
-   🗣 **Social media**: a more informal place to interact with Silea users, reach out to us on [Twitter](https://twitter.com/silea).
-   💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://sileajs.com/)

### » Get involved 🤗

Got questions or feedback about Silea? We'd love to hear from you. Use our [community forum](https://community.sileajs.com) yo ! ❤️

Silea also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help → [How to contribute?](https://docs.sileajs.com/contributing/how-to-contribute)
