import Router from "@sileajs/router/types";
import Source from "@sileajs/source/types";
import { Action, ServerAction } from "silea/types";

interface TinyRouter extends Router {
	name: "@sileajs/tiny-router";
	state: Router<TinyRouter>["state"] & {
		silea?: Router["state"]["silea"];
		router: {
			autoFetch?: boolean;
		};
		source?: {
			get?: Source["state"]["source"]["get"];
		};
	};
	actions: Router<TinyRouter>["actions"] & {
		router: {
			init: Action<TinyRouter>;
			beforeSSR: ServerAction<TinyRouter>;
		};
		source?: {
			fetch?: Source["actions"]["source"]["fetch"];
		};
	};
	libraries: {
		source?: {
			normalize?: Source["libraries"]["source"]["normalize"];
		};
	};
}

export default TinyRouter;
