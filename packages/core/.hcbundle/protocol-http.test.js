import { Body, Http, Label, LabelEncoding, StringEncoded, UnionCases } from "./trait.js";
import { buildRequest, mapKeys } from "./protocol-http.js";
import { SensitiveValue, wrapSensitive } from "./protocol-rest.js";
import { Array, Boolean, Literal, NullOr, String, Struct, Union, Unknown, optional, suspend } from "./schema.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Redacted from "effect/Redacted";

//#region lib/protocol-http.test.js
const JsonInput = Struct({
	flag: optional(Boolean.pipe(Body("flag"), StringEncoded())),
	plain: optional(Boolean.pipe(Body("plain"))),
	nullable: optional(NullOr(Boolean).pipe(Body("nullable"), StringEncoded())),
	flags: optional(Array(Boolean).pipe(Body("flags"), StringEncoded())),
	profile: optional(Struct({
		nested: optional(Boolean.pipe(Body("nested_flag"), StringEncoded())),
		plain: optional(Boolean.pipe(Body("plain_flag")))
	}).pipe(Body("profile")))
}).pipe(Http({
	method: "POST",
	uri: "/things"
}));
const jsonBodyOf = (input) => {
	const body = buildRequest({
		input,
		inputAst: JsonInput.ast,
		baseUrl: "https://example.test"
	}).body;
	return JSON.parse(body.body ?? "{}");
};
describe("StringEncoded members", () => {
	test("booleans serialize as their string spelling", () => {
		globalExpect(jsonBodyOf({
			flag: true,
			plain: true
		})).toEqual({
			flag: "true",
			plain: true
		});
		globalExpect(jsonBodyOf({
			flag: false,
			plain: false
		})).toEqual({
			flag: "false",
			plain: false
		});
	});
	test("a list stringifies element-wise", () => {
		globalExpect(jsonBodyOf({ flags: [true, false] })).toEqual({ flags: ["true", "false"] });
	});
	test("a member nested in a body struct stringifies too", () => {
		globalExpect(jsonBodyOf({ profile: {
			nested: true,
			plain: true
		} })).toEqual({ profile: {
			nested_flag: "true",
			plain_flag: true
		} });
	});
	test("null stays null and an omitted member stays omitted", () => {
		globalExpect(jsonBodyOf({ nullable: null })).toEqual({ nullable: null });
		globalExpect(jsonBodyOf({})).toEqual({});
	});
});
describe("URI label encoding", () => {
	const input = (preserve) => Struct({ scope: preserve === void 0 ? String.pipe(Label()) : String.pipe(Label(), LabelEncoding({ preserve })) }).pipe(Http({
		method: "POST",
		uri: "/runtime/{scope}"
	}));
	const url = (scope, preserve) => buildRequest({
		input: { scope },
		inputAst: input(preserve).ast,
		baseUrl: "https://example.test"
	}).url;
	test("keeps the existing escaping unless a model opts in", () => {
		globalExpect(url("__KV:abc")).toBe("https://example.test/runtime/__KV%3Aabc");
		globalExpect(url("__KV:abc", ":")).toBe("https://example.test/runtime/__KV:abc");
	});
	test("preserves only modeled pchar delimiters, not separators or escapes", () => {
		globalExpect(url("__KV:a/b?c#d%3Aé", ":")).toBe("https://example.test/runtime/__KV:a%2Fb%3Fc%23d%253A%C3%A9");
		globalExpect(url("$&:@", "$&:")).toBe("https://example.test/runtime/$&:%40");
	});
	test("refuses unsafe preservation rules", () => {
		for (const preserve of [
			"/",
			"?",
			"#",
			"%",
			"\\r",
			"[",
			"]"
		]) globalExpect(() => LabelEncoding({ preserve })).toThrow(TypeError);
	});
});
describe("greedy labels", () => {
	const ScopedInput = Struct({
		scope: String.pipe(Label()),
		name: String.pipe(Label())
	}).pipe(Http({
		method: "GET",
		uri: "/{scope+}/providers/Things/{name}"
	}));
	const urlOf = (input) => buildRequest({
		input,
		inputAst: ScopedInput.ast,
		baseUrl: "https://example.test"
	}).url;
	test("keeps slashes and drops the leading slash of the value", () => {
		globalExpect(urlOf({
			scope: "/subscriptions/abc/resourceGroups/my rg",
			name: "a/b"
		})).toBe("https://example.test/subscriptions/abc/resourceGroups/my%20rg/providers/Things/a%2Fb");
	});
	test("accepts a value without a leading slash", () => {
		globalExpect(urlOf({
			scope: "subscriptions/abc",
			name: "x"
		})).toBe("https://example.test/subscriptions/abc/providers/Things/x");
	});
});
describe("multipart binary parts", () => {
	const schema = Struct({
		zip: Unknown,
		environment: String
	}).pipe(Http({
		method: "POST",
		uri: "/deployments",
		contentType: "multipart"
	}));
	test("preserves typed-array slices and an already JSON-encoded environment", async () => {
		const input = new Uint8Array([
			99,
			80,
			75,
			0,
			255,
			99
		]).subarray(1, 5);
		const environment = JSON.stringify({
			SECRET: "value",
			REMOVED: ""
		});
		const request = buildRequest({
			input: {
				zip: input,
				environment
			},
			inputAst: schema.ast,
			baseUrl: "https://example.test"
		});
		if (request.body._tag !== "FormData") throw new Error("Expected multipart");
		const part = request.body.formData.get("zip");
		globalExpect(part).toBeInstanceOf(File);
		globalExpect(new Uint8Array(await part.arrayBuffer())).toEqual(input);
		globalExpect(request.body.formData.getAll("environment")).toEqual([environment]);
		const wire = new Request(request.url, {
			method: "POST",
			body: request.body.formData
		});
		globalExpect(wire.headers.get("content-type")).toContain("multipart/form-data; boundary=");
	});
	test("preserves File names and ArrayBuffer bytes", async () => {
		for (const zip of [new File([new Uint8Array([
			80,
			75,
			255
		])], "bundle.zip"), new Uint8Array([
			80,
			75,
			255
		]).buffer]) {
			const request = buildRequest({
				input: {
					zip,
					environment: "{}"
				},
				inputAst: schema.ast,
				baseUrl: "https://example.test"
			});
			if (request.body._tag !== "FormData") throw new Error("Expected multipart");
			const part = request.body.formData.get("zip");
			globalExpect(part.name).toBe(zip instanceof File ? "bundle.zip" : "zip");
			globalExpect(new Uint8Array(await part.arrayBuffer())).toEqual(new Uint8Array([
				80,
				75,
				255
			]));
		}
	});
});
describe("sensitive union responses", () => {
	const schema = suspend(() => Union([
		Struct({
			type: Literal("standard"),
			password: String.pipe(SensitiveValue())
		}),
		Struct({
			type: Literal("token"),
			token: String.pipe(SensitiveValue())
		}),
		Struct({ type: Literal("shared") })
	]));
	test("all arms redact their secrets, even in partial or ambiguous responses", () => {
		for (const value of [
			{
				type: "standard",
				password: "fixture-password"
			},
			{
				type: "token",
				token: "fixture-token"
			},
			{
				password: "fixture-password",
				token: "fixture-token"
			}
		]) {
			const wrapped = wrapSensitive(schema.ast, value);
			globalExpect(wrapped).toEqual(Object.fromEntries(Object.entries(value).map(([key, value]) => [key, key === "type" ? value : Redacted.make(value)])));
			globalExpect(JSON.stringify(wrapped)).not.toContain("fixture-password");
			globalExpect(JSON.stringify(wrapped)).not.toContain("fixture-token");
			globalExpect(wrapSensitive(schema.ast, wrapped)).toEqual(wrapped);
		}
	});
	test("nested arrays and optional nullable unions preserve nonsecret values", () => {
		const nested = Struct({
			provider: optional(NullOr(schema)),
			providers: Array(schema)
		});
		for (const value of [
			{},
			{ provider: null },
			{ provider: { type: "shared" } }
		]) globalExpect(wrapSensitive(nested.ast, {
			...value,
			providers: [{
				type: "standard",
				password: "fixture-password"
			}, { type: "shared" }]
		})).toEqual({
			...value,
			providers: [{
				type: "standard",
				password: Redacted.make("fixture-password")
			}, { type: "shared" }]
		});
	});
});
describe("UnionCases decoding", () => {
	const cases = [[
		"id",
		"type",
		"zoneName"
	], [
		"id",
		"type",
		"accountName"
	]];
	const merged = {
		id: "1",
		type: "account",
		zoneName: "zone-a",
		accountName: "acct-a"
	};
	const decode = (schema, value) => mapKeys(schema.ast, value, "decode");
	test("the discriminator picks the case key sets cannot tell apart", () => {
		const schema = Unknown.pipe(UnionCases(cases, {
			key: "type",
			values: ["zone", "account"]
		}));
		globalExpect(decode(schema, merged)).toEqual({
			id: "1",
			type: "account",
			accountName: "acct-a"
		});
		globalExpect(decode(schema, {
			...merged,
			type: "zone"
		})).toEqual({
			id: "1",
			type: "zone",
			zoneName: "zone-a"
		});
	});
	test("an unknown tag falls back to key-set scoring", () => {
		const schema = Unknown.pipe(UnionCases(cases, {
			key: "type",
			values: ["zone", "account"]
		}));
		globalExpect(decode(schema, {
			...merged,
			type: "other",
			accountName: null
		})).toEqual({
			id: "1",
			type: "other",
			zoneName: "zone-a"
		});
	});
	test("without a discriminator the best-explaining case wins", () => {
		const schema = Unknown.pipe(UnionCases(cases));
		globalExpect(decode(schema, {
			...merged,
			zoneName: null
		})).toEqual({
			id: "1",
			type: "account",
			accountName: "acct-a"
		});
	});
});

//#endregion