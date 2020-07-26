import { Configuration } from "webpack";
import {
	Target,
	Mode,
	WebpackConfigs,
	BabelConfigs,
	EntryPoints,
	SileaConfig,
} from "../../../types";
import name from "./name";
import targets from "./targets";
import devtool from "./devtool";
import entry from "./entry";
import output from "./output";
import modules from "./modules";
import resolve from "./resolve";
import externals from "./externals";
import plugins from "./plugins";
import performance from "./performance";

export default ({
	mode,
	babel,
	silea,
	entryPoints,
	publicPath = "/static/",
}: {
	mode: Mode;
	babel: BabelConfigs;
	silea: SileaConfig;
	entryPoints: EntryPoints[];
	publicPath?: string;
}): WebpackConfigs => {
	const getConfig = (target: Target): Configuration => ({
		mode,
		name: name({ target }),
		target: targets({ target }),
		devtool: devtool({ mode }),
		entry: entry({ target, mode, entryPoints }),
		output: output({ target, mode, outDir: silea.outDir, publicPath }),
		module: modules({ target, babel, mode }),
		resolve: resolve(),
		externals: externals({ target }),
		plugins: plugins({ target, mode, outDir: silea.outDir }),
		performance: performance({ target }),
	});

	return {
		module: getConfig("module"),
		es5: getConfig("es5"),
		server: getConfig("server"),
	};
};
