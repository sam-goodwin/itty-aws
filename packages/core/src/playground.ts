import { Effect, Layer, Match } from "effect";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import * as API from "./api.ts";
import { withCategory } from "./error-category.ts";
import { RETRYABLE } from "./errors.ts";

export class SampleRetryableError extends S.TaggedErrorClass<SampleRetryableError>()(
  "SampleRetryableError",
  {},
).pipe(withCategory(RETRYABLE)) {}

export class SampleErrorA extends S.TaggedErrorClass<SampleErrorA>()(
  "SampleErrorA",
  {},
) {}
export class SampleErrorB extends S.TaggedErrorClass<SampleErrorB>()(
  "SampleErrorB",
  {},
) {}

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

export const SampleRetryPolicy = API.addRetryPolicy(
  Match.type().pipe(
    Match.when(Match.instanceOf(SampleErrorB), () => Schedule.recurs(0)),
    Match.option,
  ),
);

export const SampleOperation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SampleRequest,
  output: SampleResponse,
  errors: [SampleRetryableError, SampleErrorA, SampleErrorB],
})).pipe(Effect.provide(Layer.provideMerge(SampleProtocol, SampleRetryPolicy)));
