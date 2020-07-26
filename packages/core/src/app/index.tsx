import React from "react";
import { Provider as ConnectProvider } from "@sileajs/connect";
import { Package } from "@sileajs/types";
import { HelmetProvider, FilledContext } from "react-helmet-async";

type Props = {
	store: Package;
	helmetContext?: FilledContext;
};

const App: React.FunctionComponent<Props> = ({ store, helmetContext = {} }) => {
	return (
		<HelmetProvider context={helmetContext}>
			<ConnectProvider value={store}>
				{Object.entries(store.roots).map(([namespace, Root]) => (
					<Root key={namespace} />
				))}
			</ConnectProvider>
		</HelmetProvider>
	);
};

export default App;
