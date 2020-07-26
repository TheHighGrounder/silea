import { Package } from "silea/types";

interface Fonts extends Package {
	name: "fonts";
	state: {};
	actions: {};
	roots: {
		fonts: React.ReactType;
	};
	libraries: {};
}

export default Fonts;
