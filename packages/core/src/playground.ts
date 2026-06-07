import { Effect } from "effect";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Match from "effect/Match";
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
  headerName: S.String.pipe(T.Header("x-header-name")),
});

export const SampleResponse = /*@__PURE__*/ /*#__PURE__*/ S.Struct({
  body: S.String.pipe(T.Body()),
  bodyName: S.String.pipe(T.Body("body_name")),
  header: S.String.pipe(T.Header()),
  headerName: S.String.pipe(T.Header("x-header-name")),
});

export class SampleCredentials extends Context.Service<SampleCredentials, {}>()(
  "SampleCredentials",
) {}

export const SampleProtocol = Layer.effect(
  API.Protocol,
  Effect.gen(function* () {
    yield* SampleCredentials;
    return {};
  }),
);

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
  protocol: SampleProtocol,
}));

const test = Effect.gen(function* () {
  const res = yield* SampleOperation({
    body: "",
    bodyName: "",
    header: "",
    headerName: "",
  }).pipe(Effect.provide(SampleRetryPolicy));
  return res;
});
