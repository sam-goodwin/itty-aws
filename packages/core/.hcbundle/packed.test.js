import { Array as Array$1, String as String$1, Struct as Struct$1, optional as optional$1, suspend as suspend$1, t as schema_exports } from "./schema.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import { evaluate, packer } from "./packed.js";
import * as Schema from "effect/Schema";

//#region lib/packed.test.js
const scope = () => ({
	S: schema_exports,
	T: { Tag: (v) => (s) => s.annotate({ tag: v }) }
});
describe("packed schemas", () => {
	test("evaluates calls, members, objects, arrays, literals and args", () => {
		const out = evaluate("f({a:#0,\"b c\":[1,-2.5,\"x\\\"y\",true,null]}).k", [7], () => ({ f: (o) => ({ k: o }) }));
		globalExpect(out).toEqual({
			a: 7,
			"b c": [
				1,
				-2.5,
				"x\"y",
				true,
				null
			]
		});
	});
	test("thunks evaluate their body on each call", () => {
		let n = 0;
		const thunk = evaluate(">g()", [], () => ({ g: () => ++n }));
		globalExpect(n).toBe(0);
		globalExpect([thunk(), thunk()]).toEqual([1, 2]);
	});
	test("a packed schema builds the same schema as the plain initializer", () => {
		const $ = packer(scope);
		const Inner = $("S.Struct({x:S.String.pipe(T.Tag(\"t\"))})");
		const Outer = $("S.suspend(>S.Struct({inner:S.optional(#0),list:S.Array(#0)})).annotate({identifier:\"Outer\"})", Inner);
		const plain = suspend$1(() => Struct$1({
			inner: optional$1(Inner),
			list: Array$1(Inner)
		})).annotate({ identifier: "Outer" });
		const value = {
			inner: { x: "a" },
			list: [{ x: "b" }]
		};
		globalExpect(Schema.decodeUnknownSync(Outer)(value)).toEqual(value);
		globalExpect(() => Schema.decodeUnknownSync(Outer)({ list: [{ x: 1 }] })).toThrow();
		globalExpect(Outer.ast.annotations).toEqual(plain.ast.annotations);
		globalExpect(Inner.ast.fields ?? Inner.fields).toBeDefined();
	});
	test("forward references resolve through the scope", () => {
		const later = {};
		const A = packer(() => ({
			S: schema_exports,
			Later: later.value
		}))("S.Array(Later)");
		later.value = String$1;
		globalExpect(Schema.decodeUnknownSync(A)(["x"])).toEqual(["x"]);
	});
});

//#endregion