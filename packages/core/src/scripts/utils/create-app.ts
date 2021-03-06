import { MultiCompiler } from "webpack";
import express from "express";
import createServer from "./create-server";
import { openBrowserTab } from "./open-browser";
import { Mode } from "../../../types";

// Create an express app ready to be used with webpack-dev-middleware.
export default async ({
	mode,
	port,
	isHttps,
	target,
	openBrowser = true,
}: {
	mode: Mode;
	port: number;
	isHttps: boolean;
	target: "es5" | "module";
	openBrowser?: boolean;
}): Promise<{
	app: express.Express;
	done: (compiler: MultiCompiler) => void;
}> => {
	// Create the app.
	const app = express();

	// Use the http or https modules to create the server.
	const server = await createServer({ app, isHttps });

	// Start listening once webpack has finished.
	let clientFinished = false;
	let serverFinished = false;
	let isListening = false;
	const url = `${isHttps ? "https" : "http"}://localhost:${port}`;

	// Do not return a response until webpack has finished loading.
	app.use((_, ___, next) => {
		if (!isListening) {
			const interval = setInterval(() => {
				if (isListening) {
					clearInterval(interval);
					next();
				}
			}, 1000);
		} else {
			next();
		}
	});

	// Start listening.
	server.listen(port, () => {
		console.log(
			`\n\nSERVER STARTED -- Listening @ ${url}\n  - mode: ${mode}\n  - target: ${target}\n\n`
		);
	});

	// Open localhost on the local browser.
	if (openBrowser) openBrowserTab(url);

	// Check if webpack has finished (both the client and server bundles).
	const done = (compiler: MultiCompiler) => {
		compiler.compilers[0].hooks.done.tapAsync(
			"silea-dev-server",
			(_, cb) => {
				clientFinished = true;
				if (clientFinished && serverFinished && !isListening) {
					isListening = true;
				}
				cb();
			}
		);
		compiler.compilers[1].hooks.done.tapAsync(
			"silea-dev-server",
			(_, cb) => {
				serverFinished = true;
				if (clientFinished && serverFinished && !isListening) {
					isListening = true;
				}
				cb();
			}
		);
	};
	return { app, done };
};
