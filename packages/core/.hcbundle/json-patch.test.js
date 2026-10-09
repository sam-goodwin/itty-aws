import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import { StaleTargetError, applyOperation } from "./json-patch.js";

//#region lib/json-patch.test.js
describe("RFC 6902 arrays", () => {
	test("add at an index inserts before it", () => {
		const doc = { errors: ["a", "c"] };
		applyOperation(doc, {
			op: "add",
			path: "/errors/1",
			value: "b"
		});
		globalExpect(doc.errors).toEqual([
			"a",
			"b",
			"c"
		]);
	});
	test("add at the length appends, like `-`", () => {
		const doc = { errors: ["a"] };
		applyOperation(doc, {
			op: "add",
			path: "/errors/1",
			value: "b"
		});
		applyOperation(doc, {
			op: "add",
			path: "/errors/-",
			value: "c"
		});
		globalExpect(doc.errors).toEqual([
			"a",
			"b",
			"c"
		]);
	});
	test("add past the end is a stale target", () => {
		globalExpect(() => applyOperation({ errors: [] }, {
			op: "add",
			path: "/errors/2",
			value: "x"
		})).toThrow(StaleTargetError);
	});
	test("replace at an index overwrites", () => {
		const doc = { errors: [
			"a",
			"x",
			"c"
		] };
		applyOperation(doc, {
			op: "replace",
			path: "/errors/1",
			value: "b"
		});
		globalExpect(doc.errors).toEqual([
			"a",
			"b",
			"c"
		]);
	});
	test("replace keeps an object key in place", () => {
		const doc = {
			a: 1,
			b: 2,
			c: 3
		};
		applyOperation(doc, {
			op: "replace",
			path: "/b",
			value: 4
		});
		globalExpect(Object.keys(doc)).toEqual([
			"a",
			"b",
			"c"
		]);
	});
	test("move into an array inserts", () => {
		const doc = {
			from: "b",
			list: ["a", "c"]
		};
		applyOperation(doc, {
			op: "move",
			from: "/from",
			path: "/list/1"
		});
		globalExpect(doc).toEqual({ list: [
			"a",
			"b",
			"c"
		] });
	});
});
describe("`before` on object keys", () => {
	test("add inserts a new key before the named sibling", () => {
		const doc = {
			input: 1,
			output: 2,
			traits: 3
		};
		applyOperation(doc, {
			op: "add",
			path: "/errors",
			value: [],
			before: "traits"
		});
		globalExpect(Object.keys(doc)).toEqual([
			"input",
			"output",
			"errors",
			"traits"
		]);
	});
	test("add keeps an existing key where it is", () => {
		const doc = {
			a: 1,
			b: 2,
			c: 3
		};
		applyOperation(doc, {
			op: "add",
			path: "/c",
			value: 4,
			before: "a"
		});
		globalExpect(doc).toEqual({
			a: 1,
			b: 2,
			c: 4
		});
		globalExpect(Object.keys(doc)).toEqual([
			"a",
			"b",
			"c"
		]);
	});
	test("add appends when the sibling is absent", () => {
		const doc = { a: 1 };
		applyOperation(doc, {
			op: "add",
			path: "/b",
			value: 2,
			before: "missing"
		});
		globalExpect(Object.keys(doc)).toEqual(["a", "b"]);
	});
	test("add keeps the parent object's identity", () => {
		const shapes = {
			a: 1,
			c: 3
		};
		const doc = { shapes };
		applyOperation(doc, {
			op: "add",
			path: "/shapes/b",
			value: 2,
			before: "c"
		});
		globalExpect(doc.shapes).toBe(shapes);
		globalExpect(Object.keys(shapes)).toEqual([
			"a",
			"b",
			"c"
		]);
	});
	test("move onto itself reorders a key", () => {
		const doc = {
			a: 1,
			b: 2,
			c: 3
		};
		applyOperation(doc, {
			op: "move",
			from: "/c",
			path: "/c",
			before: "a"
		});
		globalExpect(Object.keys(doc)).toEqual([
			"c",
			"a",
			"b"
		]);
		globalExpect(doc).toEqual({
			a: 1,
			b: 2,
			c: 3
		});
	});
});

//#endregion