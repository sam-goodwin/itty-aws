import { Effect, Layer, Match } from "effect";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import * as API from "./api.js";
import { withCategory } from "./error-category.js";
import { RETRYABLE } from "./errors.js";
export class SampleRetryableError extends S.TaggedErrorClass()("SampleRetryableError", {}).pipe(withCategory(RETRYABLE)) {
}
export class SampleErrorA extends S.TaggedErrorClass()("SampleErrorA", {}) {
}
export class SampleErrorB extends S.TaggedErrorClass()("SampleErrorB", {}) {
}
export const SampleRequest = /*@__PURE__*/ /*#__PURE__*/ S.Struct({
    body: S.String.pipe(T.Body()),
    bodyName: S.String.pipe(T.Body("body_name")),
    header: S.String.pipe(T.Header()),
    HeaderName: S.String.pipe(T.Header("x-header-name")),
});
export const SampleResponse = /*@__PURE__*/ /*#__PURE__*/ S.Struct({
    body: S.String.pipe(T.Body()),
    bodyName: S.String.pipe(T.Body("body_name")),
    header: S.String.pipe(T.Header()),
    HeaderName: S.String.pipe(T.Header("x-header-name")),
});
export const SampleProtocol = "???";
export const SampleCredentials = "???";
// `Match.instanceOf` is a refinement, so the matcher can accept `unknown` and
// still narrow each case. `Match.option` returns `Option<Schedule>` directly,
// which `addRetryPolicy`'s sync overload takes as-is — no Effect wrapping.
export const SampleRetryPolicy = API.addRetryPolicy(Match.type().pipe(Match.when(Match.instanceOf(SampleErrorB), () => Schedule.recurs(0)), Match.option));
export const Operation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    input: SampleRequest,
    output: SampleResponse,
    errors: [SampleRetryableError, SampleErrorA, SampleErrorB],
})).pipe(Effect.provide(Layer.provideMerge(SampleProtocol, SampleRetryPolicy, SampleCredentials)));
//# sourceMappingURL=playground.js.map