import { Package } from "silea/types";

interface Iframe extends Package {
	name: "iframe";
	state: {};
	actions: {};
	roots: {
		iframe: React.ReactType;
	};
	libraries: {};
}

export default Iframe;
