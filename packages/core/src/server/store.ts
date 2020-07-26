import { createStore, InitializedStore } from "@sileajs/connect";
import { Package } from "@sileajs/types";
import { NormalizedSettings } from "@sileajs/file-settings";
import mergePackages from "../utils/merge-packages";
import initialState from "./utils/initial-state";

export default ({
	packages,
	settings,
	url,
}: {
	packages: {
		[name: string]: Package;
	};
	settings: NormalizedSettings;
	url: URL;
}): InitializedStore => {
	const state = initialState({ settings, url });
	const merged = mergePackages({ packages, state });
	const store = createStore(merged);
	return store;
};
