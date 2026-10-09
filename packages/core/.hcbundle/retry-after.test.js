import { makeRetryService } from "./retry.js";
import { make as make$1 } from "./api.js";
import { RETRYABLE_HTTP_STATUSES } from "./errors.js";
import { Http } from "./trait.js";
import { parseRatelimit, parseRetryAfter, parseRetryAfterForStatus, parseServerRetryHint } from "./retry-after.js";
import { makeRestProtocol } from "./protocol-rest.js";
import { Boolean as Boolean$1, Struct as Struct$1, optional as optional$1 } from "./schema.js";
import { n as beforeEach, r as describe, s as test, t as afterEach } from "./_chunks/dist-BEWZN_3D.js";
import { n as vi, t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Duration from "effect/Duration";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Clock from "effect/Clock";
import * as Fiber from "effect/Fiber";
import * as TestClock from "effect/testing/TestClock";

//#region lib/retry-after.test.js
const NOW = Date.parse("2026-10-05T12:00:00Z");
const millis = (d) => d === void 0 ? void 0 : Duration.toMillis(d);
beforeEach(() => {
	vi.spyOn(Date, "now").mockReturnValue(NOW);
	vi.spyOn(Math, "random").mockReturnValue(0);
});
afterEach(() => {
	vi.restoreAllMocks();
});
describe("parseRetryAfter delay-seconds", () => {
	test("parses a non-negative integer number of seconds", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "120" }))).toBe(12e4);
		globalExpect(millis(parseRetryAfter({ "retry-after": "1" }))).toBe(1e3);
	});
	test("zero seconds is a zero duration, not absent", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "0" }))).toBe(0);
	});
	test("surrounding whitespace is ignored", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "  5	" }))).toBe(5e3);
	});
	test("leading zeros are accepted", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "007" }))).toBe(7e3);
	});
	test("signed or fractional numbers are rejected", () => {
		for (const raw of [
			"-5",
			"+5",
			"1.5",
			"-0",
			"0.0"
		]) globalExpect(parseRetryAfter({ "retry-after": raw })).toBeUndefined();
	});
});
describe("parseRetryAfter HTTP-date", () => {
	test("parses an IMF-fixdate relative to now", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "Mon, 05 Oct 2026 12:00:30 GMT" }))).toBe(3e4);
	});
	test("parses the obsolete RFC 850 and asctime forms", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "Monday, 05-Oct-26 12:01:00 GMT" }))).toBe(6e4);
		globalExpect(millis(parseRetryAfter({ "retry-after": "Mon Oct  5 12:00:10 2026 GMT" }))).toBe(1e4);
	});
	test("a date in the past is a zero duration", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "Mon, 05 Oct 2026 11:00:00 GMT" }))).toBe(0);
	});
	test("a date equal to now is a zero duration", () => {
		globalExpect(millis(parseRetryAfter({ "retry-after": "Mon, 05 Oct 2026 12:00:00 GMT" }))).toBe(0);
	});
});
describe("parseRetryAfter absent or invalid headers", () => {
	test("no header bag, or no retry-after header, is absent", () => {
		globalExpect(parseRetryAfter(void 0)).toBeUndefined();
		globalExpect(parseRetryAfter({})).toBeUndefined();
		globalExpect(parseRetryAfter({ "retry-after": void 0 })).toBeUndefined();
	});
	test("empty and whitespace-only values are absent", () => {
		globalExpect(parseRetryAfter({ "retry-after": "" })).toBeUndefined();
		globalExpect(parseRetryAfter({ "retry-after": "   " })).toBeUndefined();
	});
	test("unparseable values are absent", () => {
		for (const raw of [
			"soon",
			"5s",
			"PT5S",
			"tomorrow at noon"
		]) globalExpect(parseRetryAfter({ "retry-after": raw })).toBeUndefined();
	});
	test("only the lowercase header key is read", () => {
		globalExpect(parseRetryAfter({ "Retry-After": "5" })).toBeUndefined();
	});
});
describe("parseRatelimit", () => {
	test("returns the reset time when the remaining quota is zero", () => {
		globalExpect(millis(parseRatelimit({ ratelimit: "r=0, t=30" }))).toBe(3e4);
		globalExpect(millis(parseRatelimit({ ratelimit: "limit=100, remaining=0, reset=30" }))).toBe(3e4);
		globalExpect(millis(parseRatelimit({ ratelimit: "\"default\";r=0;t=30" }))).toBe(3e4);
	});
	test("tolerates whitespace and key case", () => {
		globalExpect(millis(parseRatelimit({ ratelimit: " R = 0 ;  T = 12 " }))).toBe(12e3);
	});
	test("is absent while quota remains", () => {
		globalExpect(parseRatelimit({ ratelimit: "r=5, t=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "limit=100, remaining=1, reset=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "\"default\";r=2;t=30" })).toBeUndefined();
	});
	test("is absent unless remaining is present and exactly zero", () => {
		globalExpect(parseRatelimit({ ratelimit: "t=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "limit=100, reset=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "\"default\";t=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "r=-1, t=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "remaining=-1, reset=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "r=0.5, t=30" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "r=none, t=30" })).toBeUndefined();
	});
	test("is absent without a usable reset", () => {
		globalExpect(parseRatelimit({ ratelimit: "r=0" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "r=0, t=-1" })).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "r=0, t=later" })).toBeUndefined();
	});
	test("is absent when the header is missing or empty", () => {
		globalExpect(parseRatelimit(void 0)).toBeUndefined();
		globalExpect(parseRatelimit({})).toBeUndefined();
		globalExpect(parseRatelimit({ ratelimit: "" })).toBeUndefined();
	});
});
describe("parseServerRetryHint", () => {
	test("prefers Retry-After over RateLimit", () => {
		globalExpect(millis(parseServerRetryHint({
			"retry-after": "5",
			ratelimit: "r=0, t=30"
		}))).toBe(5e3);
	});
	test("falls back to RateLimit when Retry-After is absent or invalid", () => {
		globalExpect(millis(parseServerRetryHint({ ratelimit: "r=0, t=30" }))).toBe(3e4);
		globalExpect(millis(parseServerRetryHint({
			"retry-after": "soon",
			ratelimit: "r=0, t=30"
		}))).toBe(3e4);
	});
	test("is absent when neither header yields a value", () => {
		globalExpect(parseServerRetryHint({ ratelimit: "r=3, t=30" })).toBeUndefined();
		globalExpect(parseServerRetryHint({ ratelimit: "t=30" })).toBeUndefined();
		globalExpect(parseServerRetryHint(void 0)).toBeUndefined();
	});
});
describe("parseRetryAfterForStatus", () => {
	test("returns the hint for every retryable status", () => {
		for (const status of RETRYABLE_HTTP_STATUSES) globalExpect(millis(parseRetryAfterForStatus(status, { "retry-after": "4" }))).toBe(4e3);
	});
	test("ignores hints on non-retryable statuses", () => {
		for (const status of [
			200,
			400,
			401,
			403,
			404,
			409,
			422,
			501,
			521
		]) globalExpect(parseRetryAfterForStatus(status, { "retry-after": "4" })).toBeUndefined();
	});
});
var TestRetry = class extends makeRetryService("RetryAfterTest/Retry") {};
var UnknownTestError = class extends Schema.TaggedError()("UnknownTestError", { message: Schema.String }) {};
const TestProtocol = makeRestProtocol({
	credentials: Effect.succeed({}),
	baseUrl: () => "https://api.test",
	headers: () => ({}),
	unknownError: ({ message }) => new UnknownTestError({ message }),
	parseError: ({ body }) => new UnknownTestError({ message: String(body) })
});
const getThing = make$1(() => ({
	input: Struct$1({}).pipe(Http({
		method: "GET",
		uri: "/thing"
	})),
	output: Struct$1({ ok: optional$1(Boolean$1) }),
	protocol: TestProtocol,
	retry: TestRetry
}));
const retryDelays = async (status, headers) => {
	const times = [];
	const client = Layer.succeed(HttpClient.HttpClient, HttpClient.make((request) => Effect.gen(function* () {
		times.push(yield* Clock.currentTimeMillis);
		const response = times.length === 1 ? new Response(JSON.stringify({ message: "nope" }), {
			status,
			headers
		}) : new Response(JSON.stringify({ ok: true }), { status: 200 });
		return HttpClientResponse.fromWeb(request, response);
	})));
	await Effect.runPromise(Effect.gen(function* () {
		const fiber = yield* Effect.forkChild(Effect.result(getThing({})));
		yield* TestClock.adjust(Duration.hours(1));
		return yield* Fiber.join(fiber);
	}).pipe(Effect.provide(Layer.mergeAll(client, TestClock.layer()))));
	return times.slice(1).map((t, i) => t - times[i]);
};
describe("Retry-After feeding the default retry delay", () => {
	test("delay-seconds replaces the default backoff", async () => {
		globalExpect(await retryDelays(503, { "retry-after": "3" })).toEqual([3e3]);
	});
	test("an HTTP-date waits until that date", async () => {
		globalExpect(await retryDelays(429, { "retry-after": "Mon, 05 Oct 2026 12:00:04 GMT" })).toEqual([4e3]);
	});
	test("a RateLimit reset is used when Retry-After is absent", async () => {
		globalExpect(await retryDelays(429, { ratelimit: "r=0, t=2" })).toEqual([2e3]);
	});
	test("an invalid header falls back to the default backoff", async () => {
		globalExpect(await retryDelays(503, { "retry-after": "soon" })).toEqual([250]);
		globalExpect(await retryDelays(429, { "retry-after": "soon" })).toEqual([500]);
	});
	test("a RateLimit header with quota left falls back to the default backoff", async () => {
		globalExpect(await retryDelays(503, { ratelimit: "r=4, t=30" })).toEqual([250]);
	});
	test("a hint on a non-retryable status neither stamps nor triggers a retry", async () => {
		globalExpect(await retryDelays(404, { "retry-after": "3" })).toEqual([]);
	});
});

//#endregion