import { Effect } from "effect";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Match from "effect/Match";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as API from "./api.ts";
import { withCategory } from "./error-category.ts";
import { RETRYABLE } from "./errors.ts";
import * as T from "./trait.ts";

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

export class SampleCredentials extends Context.Service<
  SampleCredentials,
  { readonly endpoint: string; readonly token: string }
>()("SampleCredentials") {}

/**
 * Walk an AST to the underlying struct and return its property signatures.
 * Unwraps Suspend / encoding so `S.optional` and transforms don't hide them.
 */
const getProps = (ast: AST.AST): readonly AST.PropertySignature[] => {
  if (ast._tag === "Objects") return ast.propertySignatures;
  if (ast._tag === "Suspend") return getProps(ast.thunk());
  if (ast.encoding && ast.encoding.length > 0)
    return getProps(ast.encoding[0]!.to);
  return [];
};

/**
 * Look up a symbol annotation on a PropertySignature, falling back to its
 * inner AST and through Suspend / encoding wrappers so traits survive
 * `S.optional` and transforms.
 */
const getAnn = (ast: AST.AST, symbol: symbol): unknown => {
  const direct = (ast.annotations as Record<symbol, unknown> | undefined)?.[
    symbol
  ];
  if (direct !== undefined) return direct;
  if (ast._tag === "Suspend") return getAnn(ast.thunk(), symbol);
  if (ast.encoding && ast.encoding.length > 0)
    return getAnn(ast.encoding[0]!.to, symbol);
  return undefined;
};
const getPropAnn = (prop: AST.PropertySignature, symbol: symbol): unknown =>
  getAnn(prop.type, symbol);
const hasPropAnn = (prop: AST.PropertySignature, symbol: symbol): boolean =>
  getPropAnn(prop, symbol) !== undefined;

const nameOf = (prop: AST.PropertySignature, symbol: symbol): string => {
  const v = getPropAnn(prop, symbol);
  return typeof v === "string" ? v : String(prop.name);
};

/**
 * SampleProtocol — happy-path JSON over HTTP. Reads trait annotations to
 * decide where each field on the request/response lives:
 *
 *   - `Body(name?)`         → JSON body field
 *   - `Header(name?)`       → HTTP header
 *   - `Query(name?)`        → query string parameter
 *   - `ResponseCode()`      → response status code (decode only)
 *   - no trait              → JSON body field
 */
export const SampleProtocol = Layer.effect(
  API.Protocol,
  Effect.gen(function* () {
    const creds = yield* SampleCredentials;
    return API.Protocol.of({
      encode: ({ input, inputAst }) =>
        Effect.gen(function* () {
          const inputObj = (input ?? {}) as Record<string, unknown>;

          const body: Record<string, unknown> = {};
          const headers: Record<string, string> = {
            authorization: `Bearer ${creds.token}`,
          };
          const query = new URLSearchParams();

          for (const prop of getProps(inputAst)) {
            const key = String(prop.name);
            const value = inputObj[key];
            if (value === undefined) continue;

            if (hasPropAnn(prop, T.headerSymbol)) {
              headers[nameOf(prop, T.headerSymbol).toLowerCase()] =
                String(value);
            } else if (hasPropAnn(prop, T.querySymbol)) {
              query.append(nameOf(prop, T.querySymbol), String(value));
            } else {
              // Body(name?) or no binding — JSON body field
              body[nameOf(prop, T.bodySymbol)] = value;
            }
          }

          const qs = query.toString();
          const url = creds.endpoint + (qs ? `?${qs}` : "");

          return HttpClientRequest.post(url).pipe(
            HttpClientRequest.setHeaders(headers),
            HttpClientRequest.bodyJsonUnsafe(body),
          );
        }),

      decode: ({ response, outputAst }) =>
        Effect.gen(function* () {
          const json = ((yield* response.json.pipe(Effect.orDie)) ??
            {}) as Record<string, unknown>;
          const result: Record<string, unknown> = {};

          for (const prop of getProps(outputAst)) {
            const key = String(prop.name);
            if (hasPropAnn(prop, T.headerSymbol)) {
              const headerName = nameOf(prop, T.headerSymbol).toLowerCase();
              const v = response.headers[headerName];
              if (v !== undefined) result[key] = v;
            } else if (hasPropAnn(prop, T.responseCodeSymbol)) {
              result[key] = response.status;
            } else {
              const wireName = nameOf(prop, T.bodySymbol);
              if (wireName in json) result[key] = json[wireName];
            }
          }
          return result;
        }),
    });
  }),
);

export const SampleRetryPolicy = API.addRetryPolicy(
  Match.type().pipe(
    Match.when(Match.instanceOf(SampleErrorB), () => Schedule.recurs(0)),
    Match.option,
  ),
);

export const SampleOperation = /*@__PURE__*/ API.make(() => ({
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
