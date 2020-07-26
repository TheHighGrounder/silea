import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "@sileajs/connect";
import { Html2React } from "../../src/libraries/component";
import iframe from "../iframe";
import Html2ReactPackage from "../../src";

const store = createStore(Html2ReactPackage);
store.libraries.html2react.processors.push(iframe);

jest.mock("@sileajs/components/iframe", () => "mocked-iframe");

describe("Iframe Processor", () => {
	it("should process iframes from src", () => {
		const { container } = render(
			<Html2React
				html="<iframe src='https://sileajs.com' title='Silea' width='500' />"
				{...store}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it("should process iframes from data-src", () => {
		const { container } = render(
			<Html2React
				html="<iframe data-src='https://sileajs.com' title='Silea' width='500' />"
				{...store}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});
