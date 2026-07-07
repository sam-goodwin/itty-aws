import { Effect } from "effect";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Match from "effect/Match";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as API from "./api.js";
import { withCategory } from "./error-category.js";
import { RETRYABLE } from "./errors.js";
import * as T from "./trait.js";
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
    headerName: S.String.pipe(T.Header("x-header-name")),
});
export const SampleResponse = /*@__PURE__*/ /*#__PURE__*/ S.Struct({
    body: S.String.pipe(T.Body()),
    bodyName: S.String.pipe(T.Body("body_name")),
    header: S.String.pipe(T.Header()),
    headerName: S.String.pipe(T.Header("x-header-name")),
});
export class SampleCredentials extends Context.Service()("SampleCredentials") {
}
/**
 * Walk an AST to the underlying struct and return its property signatures.
 * Unwraps Suspend / encoding so `S.optional` and transforms don't hide them.
 */
const getProps = (ast) => {
    if (ast._tag === "Objects")
        return ast.propertySignatures;
    if (ast._tag === "Suspend")
        return getProps(ast.thunk());
    if (ast.encoding && ast.encoding.length > 0)
        return getProps(ast.encoding[0].to);
    return [];
};
/**
 * Look up a symbol annotation on a PropertySignature, falling back to its
 * inner AST and through Suspend / encoding wrappers so traits survive
 * `S.optional` and transforms.
 */
const getAnn = (ast, symbol) => {
    const direct = ast.annotations?.[symbol];
    if (direct !== undefined)
        return direct;
    if (ast._tag === "Suspend")
        return getAnn(ast.thunk(), symbol);
    if (ast.encoding && ast.encoding.length > 0)
        return getAnn(ast.encoding[0].to, symbol);
    return undefined;
};
const getPropAnn = (prop, symbol) => getAnn(prop.type, symbol);
const hasPropAnn = (prop, symbol) => getPropAnn(prop, symbol) !== undefined;
const nameOf = (prop, symbol) => {
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
export const SampleProtocol = Layer.effect(API.Protocol, Effect.gen(function* () {
    const creds = yield* SampleCredentials;
    return API.Protocol.of({
        encode: ({ input, inputAst }) => Effect.gen(function* () {
            const inputObj = (input ?? {});
            const body = {};
            const headers = {
                authorization: `Bearer ${creds.token}`,
            };
            const query = new URLSearchParams();
            for (const prop of getProps(inputAst)) {
                const key = String(prop.name);
                const value = inputObj[key];
                if (value === undefined)
                    continue;
                if (hasPropAnn(prop, T.headerSymbol)) {
                    headers[nameOf(prop, T.headerSymbol).toLowerCase()] =
                        String(value);
                }
                else if (hasPropAnn(prop, T.querySymbol)) {
                    query.append(nameOf(prop, T.querySymbol), String(value));
                }
                else {
                    // Body(name?) or no binding — JSON body field
                    body[nameOf(prop, T.bodySymbol)] = value;
                }
            }
            const qs = query.toString();
            const url = creds.endpoint + (qs ? `?${qs}` : "");
            return HttpClientRequest.post(url).pipe(HttpClientRequest.setHeaders(headers), HttpClientRequest.bodyJsonUnsafe(body));
        }),
        decode: ({ response, outputAst }) => Effect.gen(function* () {
            const json = ((yield* response.json.pipe(Effect.orDie)) ?? {});
            const result = {};
            for (const prop of getProps(outputAst)) {
                const key = String(prop.name);
                if (hasPropAnn(prop, T.headerSymbol)) {
                    const headerName = nameOf(prop, T.headerSymbol).toLowerCase();
                    const v = response.headers[headerName];
                    if (v !== undefined)
                        result[key] = v;
                }
                else if (hasPropAnn(prop, T.responseCodeSymbol)) {
                    result[key] = response.status;
                }
                else {
                    const wireName = nameOf(prop, T.bodySymbol);
                    if (wireName in json)
                        result[key] = json[wireName];
                }
            }
            return result;
        }),
    });
}));
export const SampleRetryPolicy = API.addRetryPolicy(Match.type().pipe(Match.when(Match.instanceOf(SampleErrorB), () => Schedule.recurs(0)), Match.option));
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
//# sourceMappingURL=playground.js.map