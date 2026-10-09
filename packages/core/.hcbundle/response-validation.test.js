import { Protocol } from "./api.js";
import { lenient, strict } from "./response-validation.js";
import { makeRestProtocol } from "./protocol-rest.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Effect from "effect/Effect";
import "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import * as HttpClientResponse from "effect/http/HttpClientResponse";

//#region lib/response-validation.test.js
var TestParseError = class extends Schema.TaggedError()("TestParseError", {
	body: Schema.Unknown,
	cause: Schema.Unknown
}) {};
var TestUnknownError = class extends Schema.TaggedError()("TestUnknownError", { message: Schema.String }) {};
const TestProtocol = makeRestProtocol({
	credentials: Effect.succeed({}),
	baseUrl: () => "https://api.test",
	headers: () => ({}),
	unknownError: ({ message }) => new TestUnknownError({ message }),
	parseError: ({ body, cause }) => new TestParseError({
		body,
		cause
	})
});
const Output = Schema.Struct({ id: Schema.String });
const decode = (body) => Effect.gen(function* () {
	const protocol = yield* Protocol;
	const request = HttpClientRequest.get("https://api.test/thing");
	return yield* protocol.decode({
		response: HttpClientResponse.fromWeb(request, new Response(body, { status: 200 })),
		outputAst: Output.ast,
		errors: [],
		config: {}
	});
}).pipe(Effect.provide(TestProtocol));
const run = (effect, layer) => Effect.runPromise(Effect.result(layer ? effect.pipe(Effect.provide(layer)) : effect));
describe("makeRestProtocol response validation", () => {
	test("lenient (default) returns a non-JSON 2xx body as text", async () => {
		const result = await run(decode("not json"));
		globalExpect(result).toMatchObject({
			_tag: "Success",
			success: "not json"
		});
	});
	test("lenient (default) returns {} for an output that requires id", async () => {
		const result = await run(decode("{}"));
		globalExpect(result).toMatchObject({
			_tag: "Success",
			success: {}
		});
	});
	test("strict fails a non-JSON 2xx body with the provider's parse error", async () => {
		const result = await run(decode("not json"), strict);
		globalExpect(result._tag).toBe("Failure");
		const error = result.failure;
		globalExpect(error).toBeInstanceOf(TestParseError);
		globalExpect(error.body).toBe("not json");
	});
	test("strict fails a body missing a required member", async () => {
		const result = await run(decode("{}"), strict);
		globalExpect(result._tag).toBe("Failure");
		globalExpect(result.failure).toBeInstanceOf(TestParseError);
		globalExpect(result.failure.body).toEqual({});
	});
	test("strict passes a matching body through unchanged, extra members included", async () => {
		const result = await run(decode(JSON.stringify({
			id: "a",
			extra: 1
		})), strict);
		globalExpect(result).toMatchObject({
			_tag: "Success",
			success: {
				id: "a",
				extra: 1
			}
		});
	});
	test("an inner lenient layer overrides an outer strict one", async () => {
		const result = await run(decode("{}").pipe(Effect.provide(lenient)), strict);
		globalExpect(result).toMatchObject({
			_tag: "Success",
			success: {}
		});
	});
});

//#endregion