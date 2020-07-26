import { Package } from "silea/types";

interface Switch extends Package {
	name: "switch";
	state: {};
	actions: {};
	roots: {
		switch: React.ReactType;
	};
	libraries: {};
}

export default Switch;
