import { Effect } from "effect";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as S from "effect/Schema";
import * as API from "./api.ts";
declare const SampleRetryableError_base: S.Class<SampleRetryableError, S.TaggedStruct<"SampleRetryableError", {}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled/meta/error-categories": {
        "@distilled/errors/retryable": true;
    };
});
export declare class SampleRetryableError extends SampleRetryableError_base {
}
declare const SampleErrorA_base: S.Class<SampleErrorA, S.TaggedStruct<"SampleErrorA", {}>, import("effect/Cause").YieldableError>;
export declare class SampleErrorA extends SampleErrorA_base {
}
declare const SampleErrorB_base: S.Class<SampleErrorB, S.TaggedStruct<"SampleErrorB", {}>, import("effect/Cause").YieldableError>;
export declare class SampleErrorB extends SampleErrorB_base {
}
export declare const SampleRequest: S.Struct<{
    readonly body: S.String;
    readonly bodyName: S.String;
    readonly header: S.String;
    readonly headerName: S.String;
}>;
export declare const SampleResponse: S.Struct<{
    readonly body: S.String;
    readonly bodyName: S.String;
    readonly header: S.String;
    readonly headerName: S.String;
}>;
declare const SampleCredentials_base: Context.ServiceClass<SampleCredentials, "SampleCredentials", {
    readonly endpoint: string;
    readonly token: string;
}>;
export declare class SampleCredentials extends SampleCredentials_base {
}
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
export declare const SampleProtocol: Layer.Layer<API.Protocol, never, SampleCredentials>;
export declare const SampleRetryPolicy: Layer.Layer<never, never, never>;
export declare const SampleOperation: (input: {
    readonly body: string;
    readonly bodyName: string;
    readonly header: string;
    readonly headerName: string;
}) => Effect.Effect<{
    readonly body: string;
    readonly bodyName: string;
    readonly header: string;
    readonly headerName: string;
}, import("effect/unstable/http/HttpClientError").HttpClientError | SampleErrorA | SampleErrorB | SampleRetryableError, import("effect/unstable/http/HttpClient").HttpClient | SampleCredentials>;
export {};
//# sourceMappingURL=playground.d.ts.map