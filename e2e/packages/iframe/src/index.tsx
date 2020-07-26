import React from "react";
import Iframe from "@sileajs/components/iframe";
import Package from "../types";
import { styled } from "silea";

const Component: React.FC = () => (
	<Container>
		<Iframe
			src="https://sileajs.com"
			width={500}
			height={500}
			loading="lazy"
			title="Silea Website"
		/>
	</Container>
);

const Container = styled.div`
	margin-top: 1200vh;
	margin-left: 1200vw;
`;

const IframePackage: Package = {
	name: "iframe",
	state: {},
	actions: {},
	libraries: {},
	roots: {
		iframe: Component,
	},
};

export default IframePackage;
