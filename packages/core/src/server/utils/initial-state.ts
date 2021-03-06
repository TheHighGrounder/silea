import deepmerge from "deepmerge";
import { NormalizedSettings } from "@sileajs/file-settings";
import { Package } from "@sileajs/types";

export default ({
	settings,
	url,
}: {
	settings: NormalizedSettings;
	url: URL;
}) => {
	let state: Package["state"] = {
		silea: {
			name: settings.name,
			mode: settings.mode,
			debug: false,
			platform: "server",
			rendering: "ssr",
			initialLink: `${url.pathname}${url.search}${url.hash}`,
			packages: settings.packages.map((pkg) => pkg.name),
		},
	};

	// Merge the initial state with the general state of settings.
	state = deepmerge(settings.state, state, {
		clone: false,
	});

	// Merge the state with each package state, in order.
	settings.packages.forEach((pkg) => {
		state = deepmerge(state, pkg.state, {
			clone: false,
		});
	});

	return state;
};
