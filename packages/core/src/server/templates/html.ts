import { Template } from "../../../types";

const template: Template = ({ html, silea, head }) => `<!doctype html>
    <html ${head.htmlAttributes || ""}>
      <head>
        <meta charset="utf-8">
        <meta name="generator" content="Silea">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${head.title || ""}
        ${head.meta || ""}
        ${head.link || ""}
        ${head.script || ""}
        ${head.noscript || ""}
        ${head.style || ""}
        ${silea.link || ""}
        ${silea.style || ""}
      </head>
      <body ${head.bodyAttributes || ""}>
        <div id="root">${html}</div>
        ${silea.script || ""}
      </body>
    </html>`;

export default template;
