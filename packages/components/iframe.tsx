/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { connect, Head } from "silea";
import { Connect, Package } from "silea/types";
import useInView from "@sileajs/hooks/use-in-view";

const noJsStyles = `
  :non(noscript) > .silea-lazy-iframe {
    display: none;
  }
`;

const noProxyScript = `
  if (typeof window !== "undefined" && (!("Proxy" in window) || !("IntersectionObserver" in window))) {
    document.addEventListener("DOMContentLoaded", function() {
      var iframes = document.querySelectorAll("iframe.silea-lazy-iframe");
      for (i = 0; i < iframes.length; ++i) {
        var iframe = iframes[i];
        iframe.setAttribute("src", iframe.getAttribute("data-src"));
        iframe.removeAttribute("data-src");
        iframe.removeAttribute("style");
      }
    });
  }
`;

interface Props {
	title: string;
	src?: string;
	width?: number;
	height?: number;
	className?: string;
	rootMargin?: string;
	loading?: "lazy" | "eager";
}

type Component = React.FC<Connect<Package, Props>>;

interface Attributes extends Props {
	"data-src"?: string;
	style?: { visibility: "hidden" };
}

type NoScriptIframe = React.FC<Attributes>;

interface ChangeAttributes {
	(attrs: Attributes): Attributes;
}

const changeAttributes: ChangeAttributes = (attrs) => {
	const attributes = { ...attrs };

	attributes.src = attributes["data-src"];

	delete attributes["data-src"];
	delete attributes["style"];

	return attributes;
};

const NoScriptIframe: NoScriptIframe = (props) => {
	const attributes = { ...props };

	return (
		<noscript>
			<iframe {...attributes} />
		</noscript>
	);
};

const Iframe: Component = ({
	state,
	src,
	title,
	width,
	height,
	className,
	loading = "lazy",
	rootMargin,
}) => {
	const lazyAttributes: Attributes = {
		"data-src": src,
		className: "silea-lazy-iframe".concat(className ? ` ${className}` : ""),
		loading,
		style: { visibility: "hidden" },
		height,
		width,
		title,
	};

	const eagerAttributes = changeAttributes(lazyAttributes);

	const { ref, inView, supported } = useInView({
		rootMargin,
		triggerOnce: true,
	});

	if (loading === "eager") return <iframe {...eagerAttributes} />;

	if (typeof window !== "undefined") {
		if (
			supported &&
			!("loading" in HTMLIFrameElement.prototype && height > 0)
		) {
			return (
				<>
					<NoScriptIframe {...eagerAttributes} />
					<iframe
						ref={ref}
						{...(inView ? eagerAttributes : lazyAttributes)}
					/>
				</>
			);
		}

		return (
			<>
				<NoScriptIframe {...eagerAttributes} />
				<iframe
					{...(state.silea.rendering === "csr"
						? eagerAttributes
						: lazyAttributes)}
				/>
			</>
		);
	}

	return (
		<>
			<Head
				script={[
					{
						id: "silea-no-proxy-iframe",
						type: "text/javascript",
						innerHTML: noProxyScript,
					},
				]}
				noscript={[
					{
						innerHTML: `<style id="silea-no-js-iframes" type="text/css">${noJsStyles}</style>`,
					},
				]}
			/>
			<NoScriptIframe {...eagerAttributes} />
			<iframe {...lazyAttributes} />
		</>
	);
};

export default connect(Iframe);
