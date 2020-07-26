import { Package, Action } from "silea/types";

interface Router<T = null> extends Package {
	state: {
		silea?: Package["state"]["silea"];
		router: {
			link: string;
			state: SetOptions["state"];
		};
	};
	actions: {
		router: {
			set:
				| Action<T extends null ? Router : T, string>
				| Action<T extends null ? Router : T, string, SetOptions>;
		};
	};
}

export default Router;

export interface SetOptions {
	method?: "push" | "replace";
	state?: object;
}
