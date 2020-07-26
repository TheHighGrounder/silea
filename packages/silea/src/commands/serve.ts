import chalk from "chalk";
import { errorLogger } from "../utils";

export default async ({
	port = 3000,
	https = false,
}: {
	port?: number;
	https?: boolean;
}) => {
	let serve: Function;

	const options = { port, isHttps: https };

	try {
		serve = require("@sileajs/core").serve;
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
		await serve(options);
	} catch (error) {
		errorLogger(error);
	}
};
