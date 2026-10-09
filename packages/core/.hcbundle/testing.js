import { lenient, strict } from "./response-validation.js";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as Layer from "effect/Layer";
import * as HttpClientResponse from "effect/http/HttpClientResponse";

//#region lib/testing.js
const mockHttpClient = (response) => Layer.succeed(HttpClient.HttpClient, HttpClient.make((request) => Effect.sync(() => {
	const r = typeof response === "function" ? response(request) : response;
	return HttpClientResponse.fromWeb(request, new Response(r.body, {
		status: r.status ?? 200,
		headers: r.headers ?? { "content-type": "application/json" }
	}));
})));
const runValidationModes = (effect, response) => {
	const run = (mode) => effect.pipe(Effect.provide(mockHttpClient(response)), Effect.provide(mode), Effect.result);
	return Effect.runPromise(Effect.all({
		lenient: run(lenient),
		strict: run(strict)
	}));
};

//#endregion
export { mockHttpClient, runValidationModes };