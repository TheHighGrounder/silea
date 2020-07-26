import { Mode, Config, EntryPoints } from "../../types";
import getBabel from "./babel";
import getWebpack from "./webpack";
import getSilea from "./silea";

// This returns our SileaConfig defaults. In the future,
// we will add here logic to inject the silea.config.js of each package.
export default ({
	mode,
	entryPoints,
	publicPath,
}: {
	mode: Mode;
	entryPoints: EntryPoints[];
	publicPath: string;
}): Config => {
	const silea = getSilea();
	const babel = getBabel({ mode });
	const webpack = getWebpack({
		mode,
		babel,
		silea,
		entryPoints,
		publicPath,
	});
	return {
		babel,
		webpack,
		silea,
	};
};
