import { Package } from "silea/types";

interface Image extends Package {
	name: "image";
	state: {};
	actions: {};
	roots: {
		image: React.ReactType;
	};
	libraries: {};
}

export default Image;
