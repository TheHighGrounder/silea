import { Package } from "silea/types";

interface Head extends Package {
	name: "head";
	state: {};
	actions: {};
	roots: {
		head: React.ReactType;
	};
	libraries: {};
}

export default Head;
