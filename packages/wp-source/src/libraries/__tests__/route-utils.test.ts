import { parse, stringify, normalize } from "../route-utils";

describe("route utils - parse", () => {
	test("from path", () => {
		expect(parse("/some/path/")).toEqual({
			path: "/some/path/",
			route: "/some/path/",
			page: 1,
			query: {},
		});
	});
	test("from path (contains 'page')", () => {
		expect(parse("/some-page/page/2")).toEqual({
			path: "/some-page/",
			route: "/some-page/",
			page: 2,
			query: {},
		});
	});
	test("from path (fixes path)", () => {
		expect(parse("/some/path")).toEqual({
			path: "/some/path/",
			route: "/some/path/",
			page: 1,
			query: {},
		});
	});
	test("from path and page", () => {
		expect(parse("/some/path/page/2/")).toEqual({
			path: "/some/path/",
			route: "/some/path/",
			page: 2,
			query: {},
		});
	});
	test("from path and query", () => {
		expect(parse("/some/path/?k1=v1&k2=v2")).toEqual({
			path: "/some/path/",
			route: "/some/path/",
			page: 1,
			query: {
				k1: "v1",
				k2: "v2",
			},
		});
	});
	test("from path, page and query", () => {
		expect(parse("/some/path/page/2?k1=v1&k2=v2")).toEqual({
			path: "/some/path/",
			route: "/some/path/",
			page: 2,
			query: {
				k1: "v1",
				k2: "v2",
			},
		});
	});
	test("from root path", () => {
		expect(parse("/")).toEqual({
			path: "/",
			route: "/",
			page: 1,
			query: {},
		});
	});
	test("from root path and page", () => {
		expect(parse("/page/2/")).toEqual({
			path: "/",
			route: "/",
			page: 2,
			query: {},
		});
	});
	test("from root path, page and query", () => {
		expect(parse("/page/2?k1=v1&k2=v2")).toEqual({
			path: "/",
			route: "/",
			page: 2,
			query: {
				k1: "v1",
				k2: "v2",
			},
		});
	});
	test("from full URL", () => {
		expect(
			parse("https://test.sileajs.com/some/path/?k1=v1&k2=v2")
		).toEqual({
			path: "/some/path/",
			route: "/some/path/",
			page: 1,
			query: {
				k1: "v1",
				k2: "v2",
			},
		});
	});
	test("from name", () => {
		expect(parse("custom-list")).toEqual({
			path: "custom-list/",
			route: "custom-list/",
			page: 1,
			query: {},
		});
	});
	test("from name (page)", () => {
		expect(parse("custom-list/page/2")).toEqual({
			path: "custom-list/",
			route: "custom-list/",
			page: 2,
			query: {},
		});
	});
});

describe("route utils - stringify", () => {
	//
	// Those tests can be removed when we deprecate the `path`
	// parameter in favour of the `route` parameter
	describe("using only the `path` parameter", () => {
		test("from params (fixes path)", () => {
			expect(stringify({ path: "/some/path" })).toBe("/some/path/");
		});
		test("from params (path is a name)", () => {
			expect(stringify({ path: "custom-list" })).toBe("custom-list/");
		});
		test("from params (path, page)", () => {
			expect(stringify({ path: "/some/path/", page: 2 })).toBe(
				"/some/path/page/2/"
			);
		});
		test("from params (path, page, query)", () => {
			expect(
				stringify({
					path: "/some/path",
					page: 2,
					query: {
						k1: "v1",
						k2: "v2",
					},
				})
			).toBe("/some/path/page/2/?k1=v1&k2=v2");
		});
		test("from params (root, page, query)", () => {
			expect(
				stringify({
					path: "/",
					page: 2,
					query: {
						k1: "v1",
						k2: "v2",
					},
				})
			).toBe("/page/2/?k1=v1&k2=v2");
		});
	});

	describe("Using only the `route` parameter", () => {
		test("from params (fixes path)", () => {
			expect(stringify({ route: "/some/path" })).toBe("/some/path/");
		});
		test("from params (path is a name)", () => {
			expect(stringify({ route: "custom-list" })).toBe("custom-list/");
		});
		test("from params (path, page)", () => {
			expect(stringify({ route: "/some/path/", page: 2 })).toBe(
				"/some/path/page/2/"
			);
		});
		test("from params (path, page, query)", () => {
			expect(
				stringify({
					route: "/some/path",
					page: 2,
					query: {
						k1: "v1",
						k2: "v2",
					},
				})
			).toBe("/some/path/page/2/?k1=v1&k2=v2");
		});
		test("from params (root, page, query)", () => {
			expect(
				stringify({
					route: "/",
					page: 2,
					query: {
						k1: "v1",
						k2: "v2",
					},
				})
			).toBe("/page/2/?k1=v1&k2=v2");
		});
	});
});

describe("route utils - normalize", () => {
	test("from path", () => {
		expect(normalize("/some/path/")).toBe("/some/path/");
	});
	test("from path (contains 'page')", () => {
		expect(normalize("/some-page/")).toBe("/some-page/");
	});
	test("from path (fixes path)", () => {
		expect(normalize("/some/path")).toBe("/some/path/");
	});
	test("from path and page", () => {
		expect(normalize("/some/path/page/2")).toBe("/some/path/page/2/");
	});
	test("from path and query", () => {
		expect(normalize("/some/path?k1=v1&k2=v2")).toBe(
			"/some/path/?k1=v1&k2=v2"
		);
	});
	test("from path, page and query", () => {
		expect(normalize("/some/path/page/2?k1=v1&k2=v2")).toBe(
			"/some/path/page/2/?k1=v1&k2=v2"
		);
	});
	test("from path, query and hash", () => {
		expect(normalize("/some/path/?id=1&search=value#element")).toBe(
			"/some/path/?id=1&search=value#element"
		);
	});

	test("from root path", () => {
		expect(normalize("/")).toEqual("/");
	});
	test("from root path and page", () => {
		expect(normalize("/page/2")).toEqual("/page/2/");
	});
	test("from root path, page and query", () => {
		expect(normalize("/page/2?k1=v1&k2=v2")).toEqual(
			"/page/2/?k1=v1&k2=v2"
		);
	});
	test("from full URL", () => {
		expect(
			normalize(
				"https://test.sileajs.com/some/path/page/2?k1=v1&k2=v2"
			)
		).toBe("/some/path/page/2/?k1=v1&k2=v2");
	});
	test("from root URL", () => {
		expect(normalize("https://test.sileajs.com?k1=v1&k2=v2")).toBe(
			"/?k1=v1&k2=v2"
		);
	});
	test("from name", () => {
		expect(normalize("custom-list")).toBe("custom-list/");
	});
	test("from name (page)", () => {
		expect(normalize("custom-list/page/2/")).toBe("custom-list/page/2/");
	});
});
