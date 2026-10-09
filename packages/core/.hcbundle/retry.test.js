import { NetworkError, TimeoutError, withCategory, withRetryable } from "./category.js";
import { DEFAULT_SERVER_RETRY_HINT_CAP_MS, capped, jittered, makeDefault, makeRetryService, readServerRetryHintCapMsFromEnv, serverRetryHintCapLayer, throttlingFactory, throttlingOptions, transientFactory, transientOptions } from "./retry.js";
import { make as make$1 } from "./api.js";
import { BadGateway, BadRequest, Conflict, Forbidden, GatewayTimeout, InternalServerError, Locked, NotFound, ServiceUnavailable, TooManyRequests, Unauthorized } from "./errors.js";
import { Http } from "./trait.js";
import { makeRestProtocol } from "./protocol-rest.js";
import { Boolean as Boolean$1, Struct as Struct$1, optional as optional$1 } from "./schema.js";
import { n as beforeEach, r as describe, s as test, t as afterEach } from "./_chunks/dist-BEWZN_3D.js";
import { n as vi, t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as Layer from "effect/Layer";
import * as Ref from "effect/Ref";
import * as Schema from "effect/Schema";
import * as HttpClientError from "effect/http/HttpClientError";
import * as Duration from "effect/Duration";
import * as Schedule from "effect/Schedule";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import * as ConfigProvider from "effect/ConfigProvider";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Clock from "effect/Clock";
import * as Fiber from "effect/Fiber";
import * as TestClock from "effect/testing/TestClock";

//#region lib/retry.test.js
var TestRetry = class extends makeRetryService("RetryTest/Retry") {};
var OtherRetry = class extends makeRetryService("RetryTest/OtherRetry") {};
var UnknownTestError = class extends Schema.TaggedError()("UnknownTestError", { message: Schema.String }) {};
const TestProtocol = makeRestProtocol({
	credentials: Effect.succeed({}),
	baseUrl: () => "https://api.test",
	headers: () => ({}),
	unknownError: ({ message }) => new UnknownTestError({ message }),
	parseError: ({ body }) => new UnknownTestError({ message: String(body) })
});
const Output = Struct$1({ ok: optional$1(Boolean$1) });
const operation = (method, retry) => make$1(() => ({
	input: Struct$1({}).pipe(Http({
		method,
		uri: "/thing"
	})),
	output: Output,
	protocol: TestProtocol,
	...retry ? { retry } : {}
}));
const getThing = operation("GET", TestRetry);
const createThing = operation("POST", TestRetry);
const getThingWithoutRetry = operation("GET");
const scripted = (script) => {
	const attempts = [];
	return {
		attempts,
		layer: Layer.succeed(HttpClient.HttpClient, HttpClient.make((request) => Effect.gen(function* () {
			const at = yield* Clock.currentTimeMillis;
			const reply = script(attempts.length);
			attempts.push({
				at,
				method: request.method
			});
			if (reply === "transport") return yield* Effect.fail(new HttpClientError.HttpClientError({ reason: new HttpClientError.TransportError({
				request,
				description: "reset"
			}) }));
			return HttpClientResponse.fromWeb(request, reply);
		}))),
		times: () => attempts.map((a) => a.at)
	};
};
const status = (code, headers = {}) => new Response(JSON.stringify({ message: `status ${code}` }), {
	status: code,
	headers
});
const ok = () => new Response(JSON.stringify({ ok: true }), { status: 200 });
const failTimes = (n, reply) => (attempt) => attempt < n ? reply() : ok();
const runVirtual = (effect, layer) => Effect.runPromise(Effect.gen(function* () {
	const fiber = yield* Effect.forkChild(Effect.result(effect));
	yield* TestClock.adjust(Duration.hours(1));
	return yield* Fiber.join(fiber);
}).pipe(Effect.provide(Layer.mergeAll(layer, TestClock.layer()))));
const delays = (times) => times.slice(1).map((t, i) => t - times[i]);
const withPolicy = (policy) => (effect) => effect.pipe(Effect.provideService(TestRetry, policy));
const none = { while: () => false };
beforeEach(() => {
	vi.spyOn(Math, "random").mockReturnValue(0);
});
afterEach(() => {
	vi.restoreAllMocks();
});
const env = (vars) => ConfigProvider.layer(ConfigProvider.fromEnv({ env: vars }));
const request = HttpClientRequest.get("https://api.test/thing");
const transportError = new HttpClientError.HttpClientError({ reason: new HttpClientError.TransportError({ request }) });
const decodeError = new HttpClientError.HttpClientError({ reason: new HttpClientError.DecodeError({
	request,
	response: HttpClientResponse.fromWeb(request, new Response("x"))
}) });
var CategorizedNetworkError = class extends Schema.TaggedError()("CategorizedNetworkError", { message: Schema.String }).pipe(withCategory(NetworkError)) {};
var CategorizedTimeoutError = class extends Schema.TaggedError()("CategorizedTimeoutError", { message: Schema.String }).pipe(withCategory(TimeoutError)) {};
var RetryableMarked = class extends Schema.TaggedError()("RetryableMarked", { message: Schema.String }).pipe(withRetryable()) {};
const transient = [
	new TooManyRequests({ message: "" }),
	new Locked({ message: "" }),
	new InternalServerError({ message: "" }),
	new BadGateway({ message: "" }),
	new ServiceUnavailable({ message: "" }),
	new GatewayTimeout({ message: "" }),
	new CategorizedNetworkError({ message: "" }),
	new CategorizedTimeoutError({ message: "" }),
	new RetryableMarked({ message: "" }),
	transportError
];
const permanent = [
	new BadRequest({ message: "" }),
	new Unauthorized({ message: "" }),
	new Forbidden({ message: "" }),
	new NotFound({ message: "" }),
	new Conflict({ message: "" }),
	new UnknownTestError({ message: "" }),
	decodeError,
	/* @__PURE__ */ new Error("plain"),
	void 0
];
const nameOf = (e) => e?._tag === "HttpClientError" ? `HttpClientError(${e.reason._tag})` : e?._tag ?? String(e);
describe("retry predicates by error category", () => {
	const lastError = Effect.runSync(Ref.make(void 0));
	const policies = {
		makeDefault: makeDefault(lastError),
		transientFactory: transientFactory(lastError),
		transientOptions,
		throttlingFactory: throttlingFactory(lastError),
		throttlingOptions
	};
	for (const error of transient) test(`default and transient policies retry ${nameOf(error)}`, () => {
		globalExpect(policies.makeDefault.while(error)).toBe(true);
		globalExpect(policies.transientFactory.while(error)).toBe(true);
		globalExpect(policies.transientOptions.while(error)).toBe(true);
	});
	for (const error of permanent) test(`no policy retries ${nameOf(error)}`, () => {
		for (const policy of Object.values(policies)) globalExpect(policy.while(error)).toBe(false);
	});
	test("throttling policies retry only throttling errors", () => {
		for (const policy of [policies.throttlingFactory, policies.throttlingOptions]) {
			globalExpect(policy.while(new TooManyRequests({ message: "" }))).toBe(true);
			for (const error of transient.filter((e) => !(e instanceof TooManyRequests))) globalExpect(policy.while(error)).toBe(false);
		}
	});
});
describe("makeDefault schedule", () => {
	test("backs off exponentially from 250ms, capped at 5s, and gives up after 8 retries", async () => {
		const http = scripted(() => status(503));
		const result = await runVirtual(getThing({}), http.layer);
		globalExpect(result._tag).toBe("Failure");
		globalExpect(result.failure).toBeInstanceOf(ServiceUnavailable);
		globalExpect(http.attempts).toHaveLength(9);
		globalExpect(delays(http.times())).toEqual([
			250,
			500,
			1e3,
			2e3,
			4e3,
			5e3,
			5e3,
			5e3
		]);
	});
	test("succeeds as soon as a retry succeeds", async () => {
		const http = scripted(failTimes(2, () => status(500)));
		const result = await runVirtual(getThing({}), http.layer);
		globalExpect(result).toMatchObject({
			_tag: "Success",
			success: { ok: true }
		});
		globalExpect(http.attempts).toHaveLength(3);
	});
	test("throttling errors wait at least 500ms", async () => {
		const http = scripted(failTimes(3, () => status(429)));
		await runVirtual(getThing({}), http.layer);
		globalExpect(delays(http.times())).toEqual([
			500,
			500,
			1e3
		]);
	});
	test("retries wire-level transport failures", async () => {
		const http = scripted(failTimes(2, () => "transport"));
		const result = await runVirtual(getThing({}), http.layer);
		globalExpect(result._tag).toBe("Success");
		globalExpect(delays(http.times())).toEqual([250, 500]);
	});
	test("does not retry non-transient failures", async () => {
		for (const code of [
			400,
			401,
			403,
			404,
			409,
			422,
			402
		]) {
			const http = scripted(() => status(code));
			const result = await runVirtual(getThing({}), http.layer);
			globalExpect(result._tag).toBe("Failure");
			globalExpect(http.attempts).toHaveLength(1);
		}
	});
	test("does not distinguish mutations from reads", async () => {
		const reads = scripted(failTimes(2, () => status(503)));
		const writes = scripted(failTimes(2, () => status(503)));
		await runVirtual(getThing({}), reads.layer);
		await runVirtual(createThing({}), writes.layer);
		globalExpect(writes.attempts.map((a) => a.method)).toEqual([
			"POST",
			"POST",
			"POST"
		]);
		globalExpect(writes.times()).toEqual(reads.times());
	});
	test("jitter adds up to 50ms to each delay", async () => {
		vi.spyOn(Math, "random").mockReturnValue(.5);
		const http = scripted(failTimes(2, () => status(503)));
		await runVirtual(getThing({}), http.layer);
		globalExpect(delays(http.times())).toEqual([275, 525]);
	});
});
describe("server retry hints", () => {
	test("the default policy honors retryAfter over its own backoff", async () => {
		const http = scripted(failTimes(2, () => status(503, { "retry-after": "2" })));
		await runVirtual(getThing({}), http.layer);
		globalExpect(delays(http.times())).toEqual([2e3, 2e3]);
	});
	test("a hint longer than the 5s backoff cap is honored in full", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "30" })));
		await runVirtual(getThing({}), http.layer);
		globalExpect(delays(http.times())).toEqual([3e4]);
	});
	test("a hint shorter than the throttling floor still wins", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "0" })));
		await runVirtual(getThing({}), http.layer);
		globalExpect(delays(http.times())).toEqual([0]);
	});
	test("hints are capped at DEFAULT_SERVER_RETRY_HINT_CAP_MS", async () => {
		globalExpect(DEFAULT_SERVER_RETRY_HINT_CAP_MS).toBe(6e4);
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
		await runVirtual(getThing({}), http.layer);
		globalExpect(delays(http.times())).toEqual([6e4]);
	});
	test("serverRetryHintCapLayer overrides the cap", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
		await runVirtual(getThing({}), Layer.mergeAll(http.layer, serverRetryHintCapLayer(1500)));
		globalExpect(delays(http.times())).toEqual([1500]);
	});
	test("DISTILLED_SERVER_RETRY_HINT_CAP_MS overrides the cap", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
		await runVirtual(getThing({}), Layer.mergeAll(http.layer, env({ DISTILLED_SERVER_RETRY_HINT_CAP_MS: "2500" })));
		globalExpect(delays(http.times())).toEqual([2500]);
	});
	test("an invalid DISTILLED_SERVER_RETRY_HINT_CAP_MS falls back to the default cap", async () => {
		for (const raw of [
			"-1",
			"soon",
			"Infinity",
			""
		]) {
			const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
			await runVirtual(getThing({}), Layer.mergeAll(http.layer, env({ DISTILLED_SERVER_RETRY_HINT_CAP_MS: raw })));
			globalExpect(delays(http.times())).toEqual([6e4]);
		}
	});
	test("DISTILLED_SERVER_RETRY_HINT_CAP_MS is truncated to whole milliseconds", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
		await runVirtual(getThing({}), Layer.mergeAll(http.layer, env({ DISTILLED_SERVER_RETRY_HINT_CAP_MS: "1234.9" })));
		globalExpect(delays(http.times())).toEqual([1234]);
	});
	test("the layer cap wins over the environment cap", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
		await runVirtual(getThing({}), Layer.mergeAll(http.layer, serverRetryHintCapLayer(1e3), env({ DISTILLED_SERVER_RETRY_HINT_CAP_MS: "2500" })));
		globalExpect(delays(http.times())).toEqual([1e3]);
	});
	test("an invalid layer cap falls back to the environment cap", async () => {
		const http = scripted(failTimes(1, () => status(429, { "retry-after": "600" })));
		await runVirtual(getThing({}), Layer.mergeAll(http.layer, serverRetryHintCapLayer(-1), env({ DISTILLED_SERVER_RETRY_HINT_CAP_MS: "2500" })));
		globalExpect(delays(http.times())).toEqual([2500]);
	});
	test("factory policies honor hints; static Options policies cannot", async () => {
		const factory = scripted(failTimes(1, () => status(429, { "retry-after": "3" })));
		await runVirtual(getThing({}).pipe(withPolicy(throttlingFactory)), factory.layer);
		globalExpect(delays(factory.times())).toEqual([3e3]);
		const options = scripted(failTimes(1, () => status(429, { "retry-after": "3" })));
		await runVirtual(getThing({}).pipe(withPolicy(throttlingOptions)), options.layer);
		globalExpect(delays(options.times())).toEqual([1e3]);
	});
});
describe("readServerRetryHintCapMsFromEnv", () => {
	test("returns the default cap when the variable is unset", () => {
		globalExpect(process.env.DISTILLED_SERVER_RETRY_HINT_CAP_MS).toBeUndefined();
		globalExpect(readServerRetryHintCapMsFromEnv()).toBe(DEFAULT_SERVER_RETRY_HINT_CAP_MS);
	});
});
describe("throttling and transient policies", () => {
	test("transient policies back off from 1s, cap at 5s, and keep retrying past 8 attempts", async () => {
		for (const policy of [transientFactory, transientOptions]) {
			const http = scripted(failTimes(10, () => status(502)));
			const result = await runVirtual(getThing({}).pipe(withPolicy(policy)), http.layer);
			globalExpect(result._tag).toBe("Success");
			globalExpect(delays(http.times())).toEqual([
				1e3,
				2e3,
				4e3,
				5e3,
				5e3,
				5e3,
				5e3,
				5e3,
				5e3,
				5e3
			]);
		}
	});
	test("throttling policies do not retry server errors", async () => {
		const http = scripted(() => status(503));
		const result = await runVirtual(getThing({}).pipe(withPolicy(throttlingFactory)), http.layer);
		globalExpect(result.failure).toBeInstanceOf(ServiceUnavailable);
		globalExpect(http.attempts).toHaveLength(1);
	});
});
describe("schedule helpers", () => {
	const delaysOf = async (schedule, failures) => {
		const http = scripted(failTimes(failures, () => status(503)));
		await runVirtual(getThing({}).pipe(withPolicy({
			while: () => true,
			schedule
		})), http.layer);
		return delays(http.times());
	};
	test("capped clamps each delay to the maximum", async () => {
		globalExpect(await delaysOf(Schedule.exponential(1e3, 3).pipe(capped(Duration.seconds(2))), 3)).toEqual([
			1e3,
			2e3,
			2e3
		]);
	});
	test("jittered adds Math.random() * 50ms", async () => {
		vi.spyOn(Math, "random").mockReturnValue(.2);
		globalExpect(await delaysOf(Schedule.spaced(100).pipe(jittered), 2)).toEqual([110, 110]);
	});
});
describe("retry policy resolution", () => {
	test("operations without a retry tag never retry", async () => {
		const http = scripted(() => status(503));
		await runVirtual(getThingWithoutRetry({}).pipe(withPolicy(transientOptions)), http.layer);
		globalExpect(http.attempts).toHaveLength(1);
	});
	test("with no policy in context the default policy applies", async () => {
		const http = scripted(failTimes(1, () => status(503)));
		const result = await runVirtual(getThing({}), http.layer);
		globalExpect(result._tag).toBe("Success");
		globalExpect(http.attempts).toHaveLength(2);
	});
	test("a policy that never retries disables the default", async () => {
		const http = scripted(() => status(503));
		await runVirtual(getThing({}).pipe(withPolicy(none)), http.layer);
		globalExpect(http.attempts).toHaveLength(1);
	});
	test("a policy without `while` disables retrying", async () => {
		const http = scripted(() => status(503));
		await runVirtual(getThing({}).pipe(withPolicy({ schedule: Schedule.recurs(5) })), http.layer);
		globalExpect(http.attempts).toHaveLength(1);
	});
	test("a policy without a schedule retries immediately while its predicate holds", async () => {
		const http = scripted(failTimes(3, () => status(400)));
		const result = await runVirtual(getThing({}).pipe(withPolicy({ while: (e) => e instanceof BadRequest })), http.layer);
		globalExpect(result._tag).toBe("Success");
		globalExpect(http.times()).toEqual([
			0,
			0,
			0,
			0
		]);
	});
	test("a custom schedule bounds the attempts", async () => {
		const http = scripted(() => status(503));
		await runVirtual(getThing({}).pipe(withPolicy({
			while: () => true,
			schedule: Schedule.recurs(2)
		})), http.layer);
		globalExpect(http.attempts).toHaveLength(3);
	});
	test("factory policies get a ref holding the latest failure", async () => {
		const seen = [];
		const factory = (lastError) => ({
			while: () => true,
			schedule: Schedule.recurs(2).pipe(Schedule.tap(() => Effect.flatMap(Ref.get(lastError), (e) => Effect.sync(() => seen.push(e)))))
		});
		let n = 0;
		const http = scripted(() => status([
			500,
			502,
			503
		][n++]));
		const result = await runVirtual(getThing({}).pipe(withPolicy(factory)), http.layer);
		globalExpect(seen.map((e) => e._tag)).toEqual(["InternalServerError", "BadGateway"]);
		globalExpect(result.failure).toBeInstanceOf(ServiceUnavailable);
	});
	test("an outer policy applies to every call beneath it", async () => {
		const http = scripted(() => status(503));
		await runVirtual(Effect.all([Effect.result(getThing({})), Effect.result(createThing({}))]).pipe(withPolicy(none)), http.layer);
		globalExpect(http.attempts.map((a) => a.method)).toEqual(["GET", "POST"]);
	});
	test("an inner policy overrides the outer one for its own subtree only", async () => {
		const http = scripted(() => status(503));
		const inner = getThing({}).pipe(withPolicy(none));
		const sibling = createThing({});
		await runVirtual(Effect.all([Effect.result(inner), Effect.result(sibling)]).pipe(withPolicy({
			while: () => true,
			schedule: Schedule.recurs(2)
		})), http.layer);
		globalExpect(http.attempts.map((a) => a.method)).toEqual([
			"GET",
			"POST",
			"POST",
			"POST"
		]);
	});
	test("a policy under another SDK's tag does not apply", async () => {
		const http = scripted(failTimes(1, () => status(503)));
		const result = await runVirtual(getThing({}).pipe(Effect.provideService(OtherRetry, none)), http.layer);
		globalExpect(result._tag).toBe("Success");
		globalExpect(http.attempts).toHaveLength(2);
	});
	test("a policy installed as a layer applies like provideService", async () => {
		const http = scripted(() => status(503));
		await runVirtual(getThing({}), Layer.mergeAll(http.layer, Layer.succeed(TestRetry, none)));
		globalExpect(http.attempts).toHaveLength(1);
	});
});

//#endregion