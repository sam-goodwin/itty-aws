import { make as make$1 } from "./api.js";
import { BadRequest, InternalServerError, NotFound, ServiceUnavailable, TooManyRequests } from "./errors.js";
import { Body, Header, Http, HttpBody, Label, Query, applyErrorMatchers } from "./trait.js";
import { strict } from "./response-validation.js";
import { BinaryResponse, RawResponseRoot, SensitiveValue, makeRestProtocol } from "./protocol-rest.js";
import { Array as Array$2, Number as Number$1, String as String$2, Struct as Struct$1, Unknown as Unknown$1, optional as optional$1 } from "./schema.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Duration from "effect/Duration";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import * as Redacted from "effect/Redacted";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Result from "effect/Result";

//#region lib/protocol-rest.test.js
var TestCreds = class extends Context.Service()("ProtocolRestTest/Creds") {};
var TestUnknownError = class extends Schema.TaggedError()("TestUnknownError", { info: Schema.Unknown }) {};
var TestParseError = class extends Schema.TaggedError()("TestParseError", { info: Schema.Unknown }) {};
var ThingLocked = class extends applyErrorMatchers(Schema.TaggedError()("ThingLocked", { message: Schema.String }), [{
	status: 409,
	message: { includes: "locked" }
}]) {};
var QuotaExceeded = class extends applyErrorMatchers(Schema.TaggedError()("QuotaExceeded", { message: Schema.String }), [{ code: 4001 }]) {};
var QuotaExceededOnCreate = class extends applyErrorMatchers(Schema.TaggedError()("QuotaExceededOnCreate", { message: Schema.String }), [{
	code: 4001,
	status: 403
}]) {};
var Teapot = class extends applyErrorMatchers(Schema.TaggedError()("Teapot", {
	message: Schema.String,
	body: Schema.Unknown,
	headers: Schema.Unknown
}), [{
	status: 418,
	headers: { "X-Reason": "teapot" }
}]) {};
var Gone = class extends applyErrorMatchers(Schema.TaggedError()("Gone", { message: Schema.String }), [{ body: { "/detail/kind": "gone" } }]) {};
const baseOptions = {
	credentials: Effect.gen(function* () {
		return yield* TestCreds;
	}),
	baseUrl: (creds) => `https://${creds.host}`,
	headers: (creds) => ({ authorization: `Bearer ${creds.token}` }),
	unknownError: (info) => new TestUnknownError({ info }),
	parseError: (info) => new TestParseError({ info })
};
const DefaultProtocol = makeRestProtocol(baseOptions);
const ThingInput = Struct$1({
	id: String$2.pipe(Label()),
	limit: optional$1(Number$1.pipe(Query("limit"))),
	tags: optional$1(Array$2(String$2).pipe(Query("tag"))),
	trace: optional$1(String$2.pipe(Header("X-Trace-Id"))),
	displayName: optional$1(String$2.pipe(Body("display_name"))),
	secret: optional$1(String$2.pipe(SensitiveValue(), Body("secret_value")))
}).pipe(Http({
	method: "POST",
	uri: "/things/{id}"
}));
const ThingOutput = Struct$1({
	id: optional$1(String$2),
	displayName: optional$1(String$2.pipe(Body("display_name"))),
	secret: optional$1(String$2.pipe(SensitiveValue(), Body("secret_value")))
});
const thingOp = (protocol, errors = []) => make$1(() => ({
	input: ThingInput,
	output: ThingOutput,
	errors,
	protocol
}));
const createThing = thingOp(DefaultProtocol);
const createThingWithErrors = thingOp(DefaultProtocol, [
	ThingLocked,
	QuotaExceeded,
	QuotaExceededOnCreate,
	Teapot,
	Gone
]);
const fakeClient = (respond, recorded = { requests: [] }) => Layer.succeed(HttpClient.HttpClient, HttpClient.make((request) => Effect.sync(() => {
	recorded.requests.push(request);
	return HttpClientResponse.fromWeb(request, respond(request));
})));
const creds = (token = "tok-1", host = "api.test") => Layer.succeed(TestCreds, {
	token,
	host
});
const json = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), {
	status,
	headers: {
		"content-type": "application/json",
		...headers
	}
});
const run = (effect, ...layers) => Effect.runPromise(Effect.result(effect.pipe(Effect.provide(Layer.mergeAll(...layers)))));
const succeed = async (effect, ...layers) => {
	const result = await run(effect, ...layers);
	if (result._tag !== "Success") throw new Error(`expected success, got ${String(result.failure)}`);
	return result.success;
};
const failWith = async (effect, ...layers) => {
	const result = await run(effect, ...layers);
	if (result._tag !== "Failure") throw new Error("expected failure");
	return result.failure;
};
const failOn = (response, op = createThingWithErrors) => failWith(op({ id: "t1" }), fakeClient(response), creds());
const bodyText = (request) => {
	const body = request.body;
	if (body._tag === "Uint8Array") return new TextDecoder().decode(body.body);
	if (body._tag === "Text") return body.body;
};
describe("makeRestProtocol request encoding", () => {
	test("builds path, query, header and JSON body members from the input schema", async () => {
		const recorded = { requests: [] };
		await succeed(createThing({
			id: "a b/c",
			limit: 5,
			tags: ["x", "y"],
			trace: "trace-1",
			displayName: "Widget"
		}), fakeClient(() => json({}), recorded), creds());
		const [request] = recorded.requests;
		globalExpect(request.method).toBe("POST");
		globalExpect(request.url).toBe("https://api.test/things/a%20b%2Fc?limit=5&tag=x&tag=y");
		globalExpect(request.headers["x-trace-id"]).toBe("trace-1");
		globalExpect(JSON.parse(bodyText(request))).toEqual({ display_name: "Widget" });
	});
	test("unwraps Redacted input values before serializing them", async () => {
		const recorded = { requests: [] };
		await succeed(createThing({
			id: "t1",
			secret: Redacted.make("s3cret")
		}), fakeClient(() => json({}), recorded), creds());
		globalExpect(JSON.parse(bodyText(recorded.requests[0]))).toEqual({ secret_value: "s3cret" });
	});
	test("applies the headers hook from the resolved credentials", async () => {
		const recorded = { requests: [] };
		await succeed(createThing({ id: "t1" }), fakeClient(() => json({}), recorded), creds("tok-abc"));
		globalExpect(recorded.requests[0].headers.authorization).toBe("Bearer tok-abc");
	});
	test("resolves credentials on every request from the calling fiber's context", async () => {
		const recorded = { requests: [] };
		const client = fakeClient(() => json({}), recorded);
		await succeed(createThing({ id: "t1" }), client, creds("first", "one.test"));
		await succeed(createThing({ id: "t1" }), client, creds("second", "two.test"));
		globalExpect(recorded.requests.map((r) => [r.url, r.headers.authorization])).toEqual([["https://one.test/things/t1", "Bearer first"], ["https://two.test/things/t1", "Bearer second"]]);
	});
	test("a credentials failure fails the call before any request is sent", async () => {
		const CredsFailProtocol = makeRestProtocol({
			...baseOptions,
			credentials: Effect.fail(new BadRequest({ message: "no creds" }))
		});
		const recorded = { requests: [] };
		const error = await failWith(thingOp(CredsFailProtocol)({ id: "t1" }), fakeClient(() => json({}), recorded));
		globalExpect(error).toBeInstanceOf(BadRequest);
		globalExpect(recorded.requests).toHaveLength(0);
	});
	test("baseUrl receives the operation's route", async () => {
		const targets = [];
		const RoutingProtocol = makeRestProtocol({
			...baseOptions,
			baseUrl: (c, target) => {
				targets.push(target);
				return `https://routed.${c.host}`;
			}
		});
		const recorded = { requests: [] };
		await succeed(thingOp(RoutingProtocol)({ id: "t1" }), fakeClient(() => json({}), recorded), creds());
		globalExpect(targets).toEqual([{
			uri: "/things/{id}",
			method: "POST"
		}]);
		globalExpect(recorded.requests[0].url).toBe("https://routed.api.test/things/t1");
	});
	test("an error thrown by baseUrl fails the call instead of dying", async () => {
		const refusal = new BadRequest({ message: "scope missing" });
		const RefusingProtocol = makeRestProtocol({
			...baseOptions,
			baseUrl: () => {
				throw refusal;
			}
		});
		const recorded = { requests: [] };
		const error = await failWith(thingOp(RefusingProtocol)({ id: "t1" }), fakeClient(() => json({}), recorded), creds());
		globalExpect(error).toBe(refusal);
		globalExpect(recorded.requests).toHaveLength(0);
	});
	test("mapMemberHeader transforms member headers but not the auth headers", async () => {
		const MappedHeaderProtocol = makeRestProtocol({
			...baseOptions,
			mapMemberHeader: (name, value) => `${name}=${value.toUpperCase()}`
		});
		const recorded = { requests: [] };
		await succeed(thingOp(MappedHeaderProtocol)({
			id: "t1",
			trace: "abc"
		}), fakeClient(() => json({}), recorded), creds());
		globalExpect(recorded.requests[0].headers["x-trace-id"]).toBe("x-trace-id=ABC");
		globalExpect(recorded.requests[0].headers.authorization).toBe("Bearer tok-1");
	});
	test("unknownKeyToWire names input keys the schema does not model", async () => {
		const SnakeProtocol = makeRestProtocol({
			...baseOptions,
			unknownKeyToWire: (key) => key.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`)
		});
		const recorded = { requests: [] };
		await succeed(thingOp(SnakeProtocol)({
			id: "t1",
			extraField: 1
		}), fakeClient(() => json({}), recorded), creds());
		globalExpect(JSON.parse(bodyText(recorded.requests[0]))).toEqual({ extra_field: 1 });
	});
	test("without unknownKeyToWire, unmodeled input keys pass through verbatim", async () => {
		const recorded = { requests: [] };
		await succeed(createThing({
			id: "t1",
			extraField: 1
		}), fakeClient(() => json({}), recorded), creds());
		globalExpect(JSON.parse(bodyText(recorded.requests[0]))).toEqual({ extraField: 1 });
	});
});
describe("makeRestProtocol raw request bodies", () => {
	const UploadInput = Struct$1({
		key: String$2.pipe(Label()),
		body: optional$1(String$2.pipe(HttpBody())),
		contentType: optional$1(String$2.pipe(Header("Content-Type")))
	}).pipe(Http({
		method: "PUT",
		uri: "/objects/{key}",
		bodyMediaType: "application/octet-stream"
	}));
	const NdjsonInput = Struct$1({ body: optional$1(String$2.pipe(HttpBody())) }).pipe(Http({
		method: "POST",
		uri: "/insert",
		bodyMediaType: "application/x-ndjson"
	}));
	const UntypedUploadInput = Struct$1({ body: optional$1(Unknown$1.pipe(HttpBody())) }).pipe(Http({
		method: "PUT",
		uri: "/blob"
	}));
	const op = (input) => make$1(() => ({
		input,
		output: Struct$1({}),
		errors: [],
		protocol: DefaultProtocol
	}));
	const upload = op(UploadInput);
	const insert = op(NdjsonInput);
	const untypedUpload = op(UntypedUploadInput);
	const send = async (effect) => {
		const recorded = { requests: [] };
		await succeed(effect, fakeClient(() => json({}), recorded), creds());
		return Result.getOrThrow(HttpClientRequest.toWebResult(recorded.requests[0]));
	};
	test("a raw body is sent under the caller's Content-Type, for every body type", async () => {
		const bytes = new Uint8Array([
			1,
			2,
			3
		]);
		for (const body of [
			bytes,
			bytes.buffer,
			new Blob([bytes]),
			"#EXTM3U"
		]) {
			const request = await send(upload({
				key: "a.mp4",
				body,
				contentType: "video/mp4"
			}));
			globalExpect(request.headers.get("content-type")).toBe("video/mp4");
		}
		const request = await send(upload({
			key: "a.mp4",
			body: bytes,
			contentType: "video/mp4"
		}));
		globalExpect(new Uint8Array(await request.arrayBuffer())).toEqual(bytes);
	});
	test("without a Content-Type member value, the declared bodyMediaType is used", async () => {
		const object = await send(upload({
			key: "a.bin",
			body: new Uint8Array([1])
		}));
		globalExpect(object.headers.get("content-type")).toBe("application/octet-stream");
		const ndjson = await send(insert({ body: "{\"id\":\"1\"}\n" }));
		globalExpect(ndjson.headers.get("content-type")).toBe("application/x-ndjson");
		globalExpect(await ndjson.text()).toBe("{\"id\":\"1\"}\n");
	});
	test("with neither, a Blob body is sent under its own type", async () => {
		const request = await send(untypedUpload({ body: new Blob(["<p>"], { type: "text/html" }) }));
		globalExpect(request.headers.get("content-type")).toBe("text/html");
	});
});
describe("makeRestProtocol success decoding", () => {
	test("maps wire keys to TS names and wraps sensitive members in Redacted", async () => {
		const out = await succeed(createThing({ id: "t1" }), fakeClient(() => json({
			id: "t1",
			display_name: "Widget",
			secret_value: "s3cret",
			extra: 1
		})), creds());
		globalExpect(out).toEqual({
			id: "t1",
			displayName: "Widget",
			secret: Redacted.make("s3cret"),
			extra: 1
		});
		globalExpect(Redacted.value(out.secret)).toBe("s3cret");
		globalExpect(JSON.stringify(out)).not.toContain("s3cret");
	});
	test("a 204 with no body decodes to an empty object", async () => {
		const out = await succeed(createThing({ id: "t1" }), fakeClient(() => new Response(null, { status: 204 })), creds());
		globalExpect(out).toEqual({});
	});
	test("a whitespace-only 200 body decodes to an empty object", async () => {
		const out = await succeed(createThing({ id: "t1" }), fakeClient(() => new Response("  \n", { status: 200 })), creds());
		globalExpect(out).toEqual({});
	});
	test("transformResponse runs on the parsed body before key mapping", async () => {
		const seen = [];
		const UnwrapProtocol = makeRestProtocol({
			...baseOptions,
			transformResponse: (body) => {
				seen.push(body);
				return body.data;
			}
		});
		const out = await succeed(thingOp(UnwrapProtocol)({ id: "t1" }), fakeClient(() => json({ data: {
			id: "t1",
			display_name: "Widget"
		} })), creds());
		globalExpect(seen).toEqual([{ data: {
			id: "t1",
			display_name: "Widget"
		} }]);
		globalExpect(out).toEqual({
			id: "t1",
			displayName: "Widget"
		});
	});
	test("transformResponse is not applied to error responses", async () => {
		let calls = 0;
		const CountingProtocol = makeRestProtocol({
			...baseOptions,
			transformResponse: (body) => {
				calls++;
				return body;
			}
		});
		await failWith(thingOp(CountingProtocol)({ id: "t1" }), fakeClient(() => json({ message: "nope" }, 404)), creds());
		globalExpect(calls).toBe(0);
	});
	test("strict validation failures go through the parseError hook with the raw body", async () => {
		const StrictOutput = Struct$1({ id: String$2 });
		const strictOp = make$1(() => ({
			input: ThingInput,
			output: StrictOutput,
			protocol: DefaultProtocol
		}));
		const error = await failWith(strictOp({ id: "t1" }), fakeClient(() => json({ id: 42 })), creds(), strict);
		globalExpect(error).toBeInstanceOf(TestParseError);
		const info = error.info;
		globalExpect(info.body).toEqual({ id: 42 });
		globalExpect(info.cause).toBeDefined();
	});
	test("RawResponseRoot outputs return a bare array body as-is", async () => {
		const ListOutput = Array$2(Struct$1({ id: String$2 })).pipe(RawResponseRoot());
		const listOp = make$1(() => ({
			input: ThingInput,
			output: ListOutput,
			protocol: DefaultProtocol
		}));
		const out = await succeed(listOp({ id: "t1" }), fakeClient(() => json([{ id: "a" }, { id: "b" }])), creds());
		globalExpect(out).toEqual([{ id: "a" }, { id: "b" }]);
	});
	test("BinaryResponse outputs return the body bytes untouched", async () => {
		const bytes = new Uint8Array([
			0,
			255,
			1,
			128,
			10
		]);
		const BinaryOutput = Unknown$1.pipe(BinaryResponse());
		const binaryOp = make$1(() => ({
			input: ThingInput,
			output: BinaryOutput,
			protocol: DefaultProtocol
		}));
		const out = await succeed(binaryOp({ id: "t1" }), fakeClient(() => new Response(bytes, { status: 200 })), creds());
		globalExpect(out).toBeInstanceOf(Uint8Array);
		globalExpect(Array.from(out)).toEqual(Array.from(bytes));
	});
});
describe("makeRestProtocol typed error matching", () => {
	test("a declared error whose status and message matcher match wins over the status map", async () => {
		const error = await failOn(() => json({ message: "thing is locked" }, 409));
		globalExpect(error).toBeInstanceOf(ThingLocked);
		globalExpect(error.message).toBe("thing is locked");
	});
	test("a numeric envelope code selects the declared error with that code", async () => {
		const error = await failOn(() => json({
			code: 4001,
			message: "quota"
		}, 400));
		globalExpect(error).toBeInstanceOf(QuotaExceeded);
		globalExpect(error.message).toBe("quota");
	});
	test("the most specific matching declared error wins", async () => {
		const error = await failOn(() => json({
			code: 4001,
			message: "quota"
		}, 403));
		globalExpect(error).toBeInstanceOf(QuotaExceededOnCreate);
	});
	test("a string envelope code never satisfies a numeric code matcher", async () => {
		const error = await failOn(() => json({
			code: "4001",
			message: "quota"
		}, 400));
		globalExpect(error).toBeInstanceOf(BadRequest);
	});
	test("header matchers see the response headers case-insensitively, with body and headers passed to the class", async () => {
		const error = await failOn(() => json({ message: "short and stout" }, 418, { "x-reason": "teapot" }));
		globalExpect(error).toBeInstanceOf(Teapot);
		globalExpect(error.body).toEqual({ message: "short and stout" });
		globalExpect(error.headers["x-reason"]).toBe("teapot");
	});
	test("body pointer matchers see the parsed JSON body", async () => {
		const error = await failOn(() => json({
			message: "bye",
			detail: { kind: "gone" }
		}, 410));
		globalExpect(error).toBeInstanceOf(Gone);
	});
	test("declared errors are ignored when nothing matches", async () => {
		const error = await failOn(() => json({ message: "thing is busy" }, 409));
		globalExpect(error._tag).toBe("Conflict");
		globalExpect(error.message).toBe("thing is busy");
	});
	test("operations without declared errors fall straight to the status map", async () => {
		const error = await failOn(() => json({ message: "thing is locked" }, 409), createThing);
		globalExpect(error._tag).toBe("Conflict");
	});
});
describe("makeRestProtocol status mapping and fallbacks", () => {
	test("mapped 4xx statuses become core HTTP errors with the envelope message", async () => {
		const error = await failOn(() => json({ message: "no such thing" }, 404));
		globalExpect(error).toBeInstanceOf(NotFound);
		globalExpect(error.message).toBe("no such thing");
	});
	test("the default envelope falls back to a string `error` field for the message", async () => {
		const error = await failOn(() => json({ error: "bad input" }, 400));
		globalExpect(error).toBeInstanceOf(BadRequest);
		globalExpect(error.message).toBe("bad input");
	});
	test("a JSON body without a message yields an `HTTP <status>` message", async () => {
		const error = await failOn(() => json({ detail: "x" }, 400));
		globalExpect(error.message).toBe("HTTP 400");
	});
	test("retryable statuses carry retryAfter from the Retry-After header", async () => {
		const error = await failOn(() => json({ message: "slow down" }, 429, { "retry-after": "7" }));
		globalExpect(error).toBeInstanceOf(TooManyRequests);
		globalExpect(Duration.toMillis(error.retryAfter)).toBe(7e3);
	});
	test("retryable statuses carry retryAfter from the RateLimit header", async () => {
		const error = await failOn(() => json({}, 503, { ratelimit: "r=0, t=12" }));
		globalExpect(error).toBeInstanceOf(ServiceUnavailable);
		globalExpect(Duration.toMillis(error.retryAfter)).toBe(12e3);
	});
	test("non-retryable statuses never carry retryAfter", async () => {
		const error = await failOn(() => json({ message: "gone" }, 404, { "retry-after": "7" }));
		globalExpect(error).toBeInstanceOf(NotFound);
		globalExpect(error.retryAfter).toBeUndefined();
	});
	test("unmapped 5xx statuses become a retryable InternalServerError", async () => {
		const error = await failOn(() => json({ message: "origin down" }, 521, { "retry-after": "3" }));
		globalExpect(error).toBeInstanceOf(InternalServerError);
		globalExpect(error.message).toBe("origin down");
		globalExpect(error.retryAfter).toBeUndefined();
	});
	test("unmapped 4xx statuses go to the unknownError hook with the wire details", async () => {
		const error = await failOn(() => json({
			code: "PAYMENT",
			message: "pay up"
		}, 402, { "x-id": "r1" }));
		globalExpect(error).toBeInstanceOf(TestUnknownError);
		const info = error.info;
		globalExpect(info.status).toBe(402);
		globalExpect(info.code).toBe("PAYMENT");
		globalExpect(info.message).toBe("pay up");
		globalExpect(info.body).toEqual({
			code: "PAYMENT",
			message: "pay up"
		});
		globalExpect(info.headers["x-id"]).toBe("r1");
	});
	test("a non-JSON error body becomes the trimmed message and the raw body", async () => {
		const info = (await failOn(() => new Response("  <html>Bad gateway thing</html>\n", { status: 402 }))).info;
		globalExpect(info.message).toBe("<html>Bad gateway thing</html>");
		globalExpect(info.body).toBe("  <html>Bad gateway thing</html>\n");
		globalExpect(info.code).toBeUndefined();
	});
	test("a non-JSON error body can still be matched by a declared message matcher", async () => {
		const error = await failOn(() => new Response("resource locked by another op", { status: 409 }));
		globalExpect(error).toBeInstanceOf(ThingLocked);
		globalExpect(error.message).toBe("resource locked by another op");
	});
	test("a non-JSON mapped error keeps the text as the message", async () => {
		const error = await failOn(() => new Response("Service Unavailable", { status: 503 }));
		globalExpect(error).toBeInstanceOf(ServiceUnavailable);
		globalExpect(error.message).toBe("Service Unavailable");
	});
	test("an empty error body yields an `HTTP <status>` message", async () => {
		const info = (await failOn(() => new Response(null, { status: 402 }))).info;
		globalExpect(info.message).toBe("HTTP 402");
		globalExpect(info.body).toBeUndefined();
	});
});
var CustomNotFound = class extends Schema.TaggedError()("CustomNotFound", {
	message: Schema.String,
	retryAfter: Schema.optional(Schema.Unknown)
}) {};
const customOp = thingOp(makeRestProtocol({
	...baseOptions,
	errorEnvelope: (body) => {
		const err = body?.err;
		return err ? {
			code: err.id,
			message: err.text
		} : void 0;
	},
	statusMap: { 404: CustomNotFound }
}), [QuotaExceeded]);
describe("makeRestProtocol errorEnvelope and statusMap options", () => {
	test("a custom errorEnvelope supplies the code and message used for matching", async () => {
		const error = await failOn(() => json({ err: {
			id: 4001,
			text: "quota"
		} }, 400), customOp);
		globalExpect(error).toBeInstanceOf(QuotaExceeded);
		globalExpect(error.message).toBe("quota");
	});
	test("a custom errorEnvelope returning undefined falls back to `HTTP <status>`", async () => {
		const error = await failOn(() => json({ message: "ignored" }, 404), customOp);
		globalExpect(error).toBeInstanceOf(CustomNotFound);
		globalExpect(error.message).toBe("HTTP 404");
	});
	test("a custom statusMap replaces the default map rather than extending it", async () => {
		const error = await failOn(() => json({ err: { text: "bad" } }, 400), customOp);
		globalExpect(error).toBeInstanceOf(TestUnknownError);
		globalExpect(error.info.message).toBe("bad");
	});
	test("unmapped 5xx still become InternalServerError with a custom statusMap", async () => {
		const error = await failOn(() => json({ err: { text: "boom" } }, 500), customOp);
		globalExpect(error).toBeInstanceOf(InternalServerError);
		globalExpect(error.message).toBe("boom");
	});
});

//#endregion