import React from "react";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";
import { getSnapshot } from "@sileajs/connect";
import App from "../app";
import createStore from "./store";

export default async ({ packages }) => {
	if (typeof window !== "undefined" && window["Proxy"]) {
		// Hydrate Connect state.
		const stateElement = document.getElementById("__SILEA_CONNECT_STATE__");
		if (!stateElement) {
			console.warn(
				"State for Silea Connect hydratation not found. If you need help please visit https://community.sileajs.com."
			);
		} else {
			// Get a merged object with roots, fills, state, actions...
			const store = createStore({
				// Use initial state from server only if we are not in a HMR reload.
				state: window["silea"]
					? getSnapshot(window["silea"].state)
					: JSON.parse(stateElement.innerHTML),
				packages,
			});

			// Run init actions.
			await Promise.all(
				Object.values(store.actions).map(({ init }) => {
					if (init) return init();
				})
			);

			// Run beforeCSR actions only if we are not in a HMR reload.
			if (!window["silea"]) {
				await Promise.all(
					Object.values(store.actions).map(({ beforeCSR }) => {
						if (beforeCSR) return beforeCSR();
					})
				);
			}

			loadableReady(() => {
				hydrate(
					<App store={store} />,
					window.document.getElementById("root")
				);

				// Switch to CSR mode.
				store.state.silea.rendering = "csr";

				// Run afterCSR actions only if we are not in a HMR reload.
				if (!window["silea"]) {
					Object.values(store.actions).forEach(({ afterCSR }) => {
						if (afterCSR) afterCSR();
					});
				}

				// Assign the store to a global for easy access in console and HMR.
				window["silea"] = store;
			});
		}
	} else {
		console.warn(
			"Silea scripts not loaded because Proxy is not supported in this browser. If you need help please visit https://community.sileajs.com."
		);
	}
};
