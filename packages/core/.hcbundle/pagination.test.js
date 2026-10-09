import { extractItems, paginateCursor } from "./pagination.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";

//#region lib/pagination.test.js
const pagination = {
	mode: "cursor",
	inputToken: "cursor",
	outputToken: "pagination.cursor",
	items: "items",
	pageSize: "limit"
};
const scenarios = [
	{
		name: "advances normally until the cursor is omitted",
		pages: [
			{
				items: [1],
				pagination: { cursor: "a" }
			},
			{
				items: [2],
				pagination: { cursor: "b" }
			},
			{ items: [3] }
		],
		cursors: [
			void 0,
			"a",
			"b"
		]
	},
	...[null, ""].map((cursor) => ({
		name: `terminates on ${JSON.stringify(cursor)}`,
		pages: [{
			items: [1],
			pagination: { cursor: "a" }
		}, {
			items: [2],
			pagination: { cursor }
		}],
		cursors: [void 0, "a"]
	})),
	{
		name: "terminates on an empty page echoing the requested cursor",
		pages: [{
			items: [1],
			pagination: { cursor: "a" }
		}, {
			items: [],
			pagination: { cursor: "a" }
		}],
		cursors: [void 0, "a"]
	},
	{
		name: "emits a nonempty page before stopping on a repeated cursor",
		pages: [{
			items: [1],
			pagination: { cursor: "a" }
		}, {
			items: [2],
			pagination: { cursor: "a" }
		}],
		cursors: [void 0, "a"]
	},
	{
		name: "terminates when the first response echoes the initial cursor",
		start: "initial",
		pages: [{
			items: [1],
			pagination: { cursor: "initial" }
		}],
		cursors: ["initial"]
	},
	{
		name: "terminates a multi-cursor cycle",
		pages: [
			{
				items: [1],
				pagination: { cursor: "a" }
			},
			{
				items: [2],
				pagination: { cursor: "b" }
			},
			{
				items: [3],
				pagination: { cursor: "a" }
			}
		],
		cursors: [
			void 0,
			"a",
			"b"
		]
	},
	{
		name: "terminates a cycle returning to the initial cursor",
		start: "initial",
		pages: [{
			items: [1],
			pagination: { cursor: "a" }
		}, {
			items: [2],
			pagination: { cursor: "initial" }
		}],
		cursors: ["initial", "a"]
	},
	{
		name: "preserves empty and sparse pages whose cursors advance",
		pages: [
			{
				items: [],
				pagination: { cursor: "a" }
			},
			{ pagination: { cursor: "b" } },
			{
				items: [1],
				pagination: { cursor: "c" }
			},
			{
				items: [],
				pagination: { cursor: "d" }
			},
			{ items: [2] }
		],
		cursors: [
			void 0,
			"a",
			"b",
			"c",
			"d"
		]
	}
];
const fixture = ({ pages, start }) => {
	const requests = [];
	const input = {
		...start === void 0 ? {} : { cursor: start },
		limit: 1
	};
	return {
		stream: paginateCursor((request) => Effect.sync(() => {
			const page = pages[requests.length];
			requests.push(request);
			if (!page) throw new Error("Paginator made an unexpected extra request");
			return page;
		}), input, pagination),
		requests,
		input
	};
};
const collect = (stream) => Stream.runCollect(stream).pipe(Effect.timeout("1 second"));
describe("cursor pagination", () => {
	test.each(scenarios)("$name", (scenario) => Effect.runPromise(Effect.gen(function* () {
		const { stream, requests, input } = fixture(scenario);
		const pages = yield* collect(stream);
		globalExpect(Array.from(pages)).toEqual(scenario.pages);
		globalExpect(requests.map((request) => request.cursor)).toEqual(scenario.cursors);
		globalExpect(requests.every((request) => request.limit === 1)).toBe(true);
		globalExpect(input.cursor).toBe(scenario.start);
	})));
	test.each(scenarios)("item extraction: $name", (scenario) => Effect.runPromise(Effect.gen(function* () {
		const { stream, requests } = fixture(scenario);
		const items = yield* collect(extractItems(stream, "items"));
		globalExpect(Array.from(items)).toEqual(scenario.pages.flatMap((page) => page.items ?? []));
		globalExpect(requests.map((request) => request.cursor)).toEqual(scenario.cursors);
	})));
	test("cursor history is isolated across repeated and concurrent stream runs", () => Effect.runPromise(Effect.gen(function* () {
		let calls = 0;
		const pages = [
			{
				items: [1],
				pagination: { cursor: "a" }
			},
			{
				items: [2],
				pagination: { cursor: "b" }
			},
			{
				items: [],
				pagination: { cursor: "b" }
			}
		];
		const stream = paginateCursor((input) => Effect.sync(() => {
			if (++calls > 12) throw new Error("Paginator exceeded the request bound");
			return pages[input.cursor === "a" ? 1 : input.cursor === "b" ? 2 : 0];
		}), {}, pagination);
		globalExpect(Array.from(yield* collect(stream))).toEqual(pages);
		globalExpect(Array.from(yield* collect(stream))).toEqual(pages);
		const concurrent = yield* Effect.all([collect(stream), collect(stream)], { concurrency: "unbounded" });
		globalExpect(concurrent.map((result) => Array.from(result))).toEqual([pages, pages]);
		globalExpect(calls).toBe(12);
	})));
});

//#endregion