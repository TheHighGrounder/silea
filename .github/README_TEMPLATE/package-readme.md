# `<%= projectName %>`

[![Version](https://img.shields.io/npm/v/<%= projectName %>.svg)](https://www.npmjs.com/package/<%= projectName %>) [![npm](https://img.shields.io/npm/dw/<%= projectName %>)](https://www.npmjs.com/package/<%= projectName %>) [![License: The Hippocratic License 2.1](https://img.shields.io/badge/license-The%20Hippocratic%20License%202.1-%23000)](https://github.com/SileaJS/silea/blob/master/LICENSE)

<% if (projectDescription) { -%>
<%= projectDescription %>
<% } -%>

## Table of contents

<!-- toc -->

## Install

```sh
npm i <%= projectName %>
```

<% projectNameTag = projectName.split("/")[1] %>

## Feature Discussions

[**Feature Discussions**](https://community.sileajs.com/c/feature-discussions/33) about Silea are public. You can join the discussions, vote for those you're interested in or create new ones.

These are the ones related to this package: https://community.sileajs.com/tags/c/feature-discussions/33/<%= projectNameTag %>

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/SileaJS/silea/blob/dev/packages/<%= projectNameTag %>/CHANGELOG.md)

---

<%- include('footer.md'); -%>
