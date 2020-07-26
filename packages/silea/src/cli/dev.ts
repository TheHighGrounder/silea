import dev from "../commands/dev";
import { errorLogger } from "../utils";

export default async ({
	target = process.env.SILEA_DEV_TARGET || "module",
	port = process.env.SILEA_DEV_PORT || "3000",
	https = !!process.env.SILEA_DEV_HTTPS,
	production = !!process.env.SILEA_DEV_PRODUCTION,
	publicPath = process.env.SILEA_DEV_PUBLIC_PATH || "/static/",
	dontOpenBrowser = !!process.env.SILEA_DEV_DONT_OPEN_BROWSER,
}: {
	target?: string;
	port?: string;
	https?: boolean;
	production?: boolean;
	publicPath?: string;
	dontOpenBrowser?: boolean;
}) => {
	// Check `target` parameter.
	if (target && target !== "es5" && target !== "module") {
		errorLogger(
			new Error(
				`The target specified is invalid: "${target}". Use either "module" or "es5".`
			)
		);
	}

	// Check `port` parameter.
	if (port && Number.isNaN(parseInt(port, 10))) {
		errorLogger(
			new Error(`The port number specified is not valid: ${port}.`)
		);
	}

	// Execute `dev` command.
	dev({
		target: target as "es5" | "module",
		port: parseInt(port, 10),
		production,
		https,
		publicPath,
		dontOpenBrowser,
	});
};
