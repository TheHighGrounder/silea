import { Package } from "silea/types";
import Router from "@sileajs/tiny-router/types";

interface TinyRouter extends Package {
	name: "tiny-router";
	state: {
		router?: Router["state"]["router"];
	};
	actions: {
		router?: Router["actions"]["router"];
	};
	roots: {
		tinyRouter: React.ReactType;
	};
	libraries: {};
}

export default TinyRouter;
