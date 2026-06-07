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
    readonly body: S.Top;
    readonly bodyName: S.Top;
    readonly header: S.Top;
    readonly headerName: S.Top;
}>;
export declare const SampleResponse: S.Struct<{
    readonly body: S.Top;
    readonly bodyName: S.Top;
    readonly header: S.Top;
    readonly headerName: S.Top;
}>;
declare const SampleCredentials_base: Context.ServiceClass<SampleCredentials, "SampleCredentials", {}>;
export declare class SampleCredentials extends SampleCredentials_base {
}
export declare const SampleProtocol: Layer.Layer<API.Protocol, never, SampleCredentials>;
export declare const SampleRetryPolicy: Layer.Layer<never, never, never>;
export declare const SampleOperation: (input: {
    readonly body: unknown;
    readonly bodyName: unknown;
    readonly header: unknown;
    readonly headerName: unknown;
}) => Effect.Effect<{
    readonly body: unknown;
    readonly bodyName: unknown;
    readonly header: unknown;
    readonly headerName: unknown;
}, SampleErrorA | SampleErrorB | SampleRetryableError, SampleCredentials>;
export {};
//# sourceMappingURL=playground.d.ts.map