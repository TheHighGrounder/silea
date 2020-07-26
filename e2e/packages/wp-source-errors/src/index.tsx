import React from "react";
import { connect } from "silea";
import WpSourceErrors from "../types";

const Root: React.FC = connect(({ state }) => {
	const data = state.source.get(state.silea.initialLink);
	return (
		<>
			<div data-test-id="is404">
				is404: {data.is404 ? "true" : "false"}
			</div>
			<div data-test-id="isError">
				isError: {data.isError ? "true" : "false"}
			</div>
			<div data-test-id="status">error status: {data.errorStatus}</div>
		</>
	);
});

const wpSourceErrors: WpSourceErrors = {
	name: "wp-source-errors",
	state: {},
	actions: {
		wpSourceErrors: {
			init: ({ state, libraries }) => {
				const { query } = libraries.source.parse(
					state.silea.initialLink
				);
				if (query.statusCode) {
					state.source.api = `http://httpstat.us/${query.statusCode}?rest_route=/`;
				} else {
					state.source.api = "https://test.sileajs.com/wp-json";
				}
			},
		},
	},
	roots: {
		wpSourceErrors: Root,
	},
	libraries: {},
};

export default wpSourceErrors;
