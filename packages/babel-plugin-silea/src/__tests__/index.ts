import pluginTester from "babel-plugin-tester";
import sileaPlugin from "../";

pluginTester({
	title: "Unrelated imports",
	plugin: sileaPlugin,
	tests: [
		{
			title: "Unrelated named import",
			code: 'import { named } from "other-module";',
		},
		{
			title: "Unrelated default import",
			code: 'import def from "other-module";',
		},
		{
			title: "Unrelated import from silea",
			code: 'import { connect } from "silea";',
		},
		{
			title: "Unrelated multiple import from silea",
			code: 'import { connect, loadable } from "silea";',
		},
	],
});

pluginTester({
	title: "styled",
	plugin: sileaPlugin,
	tests: [
		{
			title: "Only styled import",
			code: 'import { styled } from "silea";',
			output: 'import styled from "@emotion/styled";',
		},
		{
			title: "Styled import with other unrelated import",
			code: 'import { connect, styled } from "silea";',
			output: `
        import { connect } from "silea";
        import styled from "@emotion/styled";
      `,
		},
		{
			title: "Styled import with other two unrelated imports",
			code: 'import { connect, loadable, styled } from "silea";',
			output: `
        import { connect } from "silea";
        import { loadable } from "silea";
        import styled from "@emotion/styled";
      `,
		},
	],
});

pluginTester({
	title: "css",
	plugin: sileaPlugin,
	tests: [
		{
			title: "Only css import",
			code: 'import { css } from "silea";',
			output: 'import { css } from "@emotion/core";',
		},
		{
			title: "css import with other unrelated import",
			code: 'import { connect, css } from "silea";',
			output: `
        import { connect } from "silea";
        import { css } from "@emotion/core";
      `,
		},
	],
});

pluginTester({
	title: "Global",
	plugin: sileaPlugin,
	tests: [
		{
			title: "Only Global import",
			code: 'import { Global } from "silea";',
			output: 'import { Global } from "@emotion/core";',
		},
		{
			title: "Global import with other unrelated import",
			code: 'import { connect, Global } from "silea";',
			output: `
        import { connect } from "silea";
        import { Global } from "@emotion/core";
      `,
		},
	],
});

pluginTester({
	title: "keyframes",
	plugin: sileaPlugin,
	tests: [
		{
			title: "Only keyframes import",
			code: 'import { keyframes } from "silea";',
			output: 'import { keyframes } from "@emotion/core";',
		},
		{
			title: "keyframes import with other unrelated import",
			code: 'import { connect, keyframes } from "silea";',
			output: `
        import { connect } from "silea";
        import { keyframes } from "@emotion/core";
      `,
		},
	],
});

pluginTester({
	title: "css and styled",
	plugin: sileaPlugin,
	tests: [
		{
			title: "css import with styled import",
			code: 'import { styled, css } from "silea";',
			output: `
        import styled from "@emotion/styled";
        import { css } from "@emotion/core";
      `,
		},
		{
			title: "css import with styled and other unrelated import",
			code: 'import { styled, css, connect } from "silea";',
			output: `
        import styled from "@emotion/styled";
        import { css } from "@emotion/core";
        import { connect } from "silea";
      `,
		},
	],
});
