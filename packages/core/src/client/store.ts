import { createStore } from "@sileajs/connect";
import { Package } from "@sileajs/types";
import mergePackages from "../utils/merge-packages";

export default ({
	packages,
	state,
}: {
	packages: {
		[name: string]: Package;
	};
	state: Package["state"];
}) => {
	state.silea.platform = "client";
	const merged = mergePackages({ packages, state, overwriteArrays: true });
	const store = createStore(merged);
	return store;
};
