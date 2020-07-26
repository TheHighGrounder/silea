import { resolve } from "path";
import ora from "ora";
import chalk from "chalk";
import { prompt, Question, ListQuestion } from "inquirer";
import create from "../commands/create";
import { subscribe } from "../steps";
import { errorLogger, log } from "../utils";
import { Options } from "../steps/types";

export default async ({
	name,
	theme,
	typescript,
	useCwd,
	prompt: promptUser,
}: {
	name: string;
	theme: string;
	typescript: boolean;
	useCwd: boolean;
	prompt: boolean;
}) => {
	name = name || process.env.SILEA_NAME;
	theme = theme || process.env.SILEA_THEME;
	typescript = typescript || !!process.env.SILEA_TYPESCRIPT;
	useCwd = useCwd || !!process.env.SILEA_USE_CWD;

	if (!promptUser && !name) {
		errorLogger(new Error("You need to provide the name for the project"));
	}

	const options: Options = {};

	if (!name) {
		const questions: Question[] = [
			{
				name: "name",
				type: "input",
				message: "Enter a name for the project:",
				default: "my-silea-project",
			},
		];

		const answers = await prompt(questions);
		options.name = answers.name;
	} else {
		options.name = name;
	}

	// The theme was provided as a CLI option
	if (theme) {
		options.theme = theme;
	} else if (promptUser) {
		// The theme was NOT provided as a CLI option
		// In this case, we prompt the user
		const questions: ListQuestion[] = [
			{
				name: "theme",
				type: "list",
				message: "Pick a starter theme to clone:",
				default: "@sileajs/mars-theme",
				choices: [
					{
						name: "@sileajs/mars-theme (recommended)",
						value: "@sileajs/mars-theme",
					},
					{
						name: "@sileajs/twentytwenty-theme",
						value: "@sileajs/twentytwenty-theme",
					},
				],
			},
		];

		const answers = await prompt(questions);
		options.theme = answers.theme;
	}

	options.typescript = typescript;
	options.path = useCwd
		? process.cwd()
		: resolve(process.cwd(), options.name);

	try {
		// Get the emitter for `create`
		const emitter = create(options);
		emitter.on("message", (message, action) => {
			if (action) ora.promise(action, message);
			else log(message);
		});

		await emitter;

		log(chalk.bold("\nSilea project created.\n"));

		const subscribeQuestions: Question[] = [
			{
				name: "subscribe",
				type: "confirm",
				message: "Do you want to receive framework updates by email?",
				default: false,
			},
			{
				name: "email",
				type: "input",
				message: "Please, enter your email:",
				when: (answers) => answers.subscribe,
			},
		];
		const answers = await prompt(subscribeQuestions);

		if (answers.subscribe) {
			emitter.on("subscribe", (message, action) => {
				if (action) ora.promise(action, message);
				else log(message);
			});

			await subscribe(answers.email);

			log("\nThanks for subscribing! 😃");
		} else {
			log(
				`\nOk, that's fine! 😉\nYou can subscribe at any point with ${chalk.bold.green(
					"npx silea subscribe <email>"
				)}.`
			);
		}

		log(
			`\nRun ${chalk.bold.green(
				`cd ${options.name} && npx silea dev`
			)} and have fun! 🎉\n\nYou can find docs at ${chalk.underline.magenta(
				"https://docs.sileajs.com/"
			)}.\nFor technical support and assistance please join our community at ${chalk.underline.magenta(
				"https://community.sileajs.com/"
			)}.\n`
		);
	} catch (error) {
		errorLogger(error);
	}
};
