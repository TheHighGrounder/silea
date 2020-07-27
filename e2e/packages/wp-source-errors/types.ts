import { Package, Action, ServerAction } from "silea/types";
import Source from "@sileajs/source/types";

interface WpSourceErrors extends Package {
	name: "wp-source-errors";
	state: {
		silea?: Package["state"]["silea"];
		source?: Source["state"]["source"] & {
			api: string;
		};
	};
	actions: {
		source?: Source["actions"]["source"];
		wpSourceErrors: {
			init: Action<WpSourceErrors>;
			beforeSSR?: ServerAction<WpSourceErrors>;
		};
	};
	roots: {
		wpSourceErrors: React.ReactType;
	};
	libraries: {
		source?: Source["libraries"]["source"];
	};
}

export default WpSourceErrors;
