import { Package } from "silea/types";

interface Emotion extends Package {
	name: "emotion";
	state: {};
	actions: {};
	roots: {
		emotion: React.ReactType;
	};
	libraries: {};
}

export default Emotion;
