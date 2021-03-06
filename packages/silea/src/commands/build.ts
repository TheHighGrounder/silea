import chalk from "chalk";
import { errorLogger } from "../utils";

export default async ({
	development = false,
	target = "both",
	publicPath = "/static/",
}: {
	development?: boolean;
	target?: "es5" | "module" | "both";
	publicPath?: string;
}) => {
	let build: Function;

	const options = {
		mode: development ? "development" : "production",
		target,
		publicPath,
	};

	try {
		build = require("@sileajs/core").build;
	} catch (error) {
		const message =
			`Make sure that you are running ${chalk.green(
				"silea"
			)} inside a Silea project.\n` +
			`If so try installing ${chalk.green(
				"@sileajs/core"
			)} again with ${chalk.green("npm i @sileajs/core")}.\n`;
		errorLogger(error, message);
	}

	try {
		await build(options);
	} catch (error) {
		errorLogger(error);
	}
};
