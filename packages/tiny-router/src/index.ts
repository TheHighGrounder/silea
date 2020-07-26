import TinyRouter from "../types";
import { set, init, beforeSSR } from "./actions";

const tinyRouter: TinyRouter = {
	name: "@sileajs/tiny-router",
	state: {
		router: {
			link: "/",
			state: {},
			autoFetch: true,
		},
	},
	actions: {
		router: {
			init,
			set,
			beforeSSR,
		},
	},
	libraries: {},
};

export default tinyRouter;
