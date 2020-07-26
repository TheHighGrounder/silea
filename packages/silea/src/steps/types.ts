// Options passed to the `create` function.
export type Options = {
	// Name of the app.
	name?: string;
	// Path where the app should be created.
	path?: string;
	// Support for TypeScript.
	typescript?: boolean;
	// Silea packages that need to be installed.
	packages?: string[];
	// Silea starter theme to clone.
	theme?: string;
};

// Settings generated in `createPackageJson` function
// to populate the initial `package.json` file.
export type PackageJson = {
	name: string;
	version: string;
	private: boolean;
	description: string;
	keywords: string[];
	scripts: {
		dev: string;
		build: string;
		serve: string;
	};
	dependencies: {
		[key: string]: string;
	};
};
