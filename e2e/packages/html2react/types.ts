import { Package, Action } from "silea/types";
import Html2React from "@sileajs/html2react/types";

interface Html2ReactTests extends Package {
	name: "e2e-html2react";
	state: {
		html2reactTests: {
			color: string;
		};
	};
	actions: {
		html2reactTests: {
			setColor: Action<Html2ReactTests, string>;
		};
	};
	roots: {
		html2reactTests: React.ReactType;
	};
	libraries: {
		html2react: Partial<Html2React["libraries"]["html2react"]>;
	};
}

export default Html2ReactTests;
