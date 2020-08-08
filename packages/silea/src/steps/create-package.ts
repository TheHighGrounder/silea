import { EOL } from "os";
import { resolve as resolvePath, join } from "path";
import { writeFile } from "fs-extra";
import { exec } from "child_process";
import { promisify } from "util";
import { fetchPackageVersion } from "../utils";

// Options passed to the `create-package` function.
export type Options = {
	// Name of the package.
	name?: string;
	// Namespace of the package.
	namespace?: string;
	// Path of the Silea project.
	projectPath?: string;
	// Path where the package should be created (relative to `projectPath`).
	packagePath?: string;
};

// This function creates a `package.json` file.
export const createPackageJson = async (
	name: string,
	namespace: string,
	projectPath: string,
	packagePath: string
) => {
	// Get the latest version of Silea from NPM registry
	const sileaVersion = await fetchPackageVersion("silea");

	const filePath = resolvePath(projectPath, packagePath, "package.json");
	const fileData = `{
  "name": "${name}",
  "version": "0.0.1",
  "description": "Silea package created using the Silea CLI.",
  "keywords": [
    "silea",
    "silea-${namespace}"
  ],
  "license": "SEE LICENSE IN LICENSE",
  "dependencies": {
    "silea": "${sileaVersion}"
  }
}${EOL}`;
	await writeFile(filePath, fileData);
};

// This function creates an `index.js` file.
export const createSrcIndexJs = async (
	name: string,
	namespace: string,
	projectPath: string,
	packagePath: string
) => {
	const filePath = resolvePath(projectPath, packagePath, "src/index.js");
	const fileData = `import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>${join(packagePath, "src/index.js")}</pre>
    </>
  );
};

export default {
  name: "${name}",
  roots: {
    ${namespace}: Root
  },
  state: {
    ${namespace}: {}
  },
  actions: {
    ${namespace}: {}
  }
};${EOL}`;
	await writeFile(filePath, fileData);
};

// This function executes the `npm i` command to add the
// created package
export const installPackage = async (
	projectPath: string,
	packagePath: string
) => {
	await promisify(exec)(`npm install ${packagePath}`, { cwd: projectPath });
};
