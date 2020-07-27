import React from "react";
import Static from "./static";

const Dynamic: React.FC = () => {
	const [toggle, setToggle] = React.useState(false);
	return (
		<>
			<div data-test-id="dynamic-div">I am the Dynamic1 component</div>
			<button
				data-test-id="toggle-button"
				onClick={() => setToggle(!toggle)}
			>
				Toggle
			</button>
			<div data-test-id="toggle-div">{toggle ? "ON" : "OFF"}</div>
			<Static />
		</>
	);
};

export default Dynamic;
