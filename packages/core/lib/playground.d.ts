import { Layer } from "effect";
import * as S from "effect/Schema";
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
    readonly HeaderName: S.Top;
}>;
export declare const SampleResponse: S.Struct<{
    readonly body: S.Top;
    readonly bodyName: S.Top;
    readonly header: S.Top;
    readonly HeaderName: S.Top;
}>;
export declare const SampleProtocol = "???";
export declare const SampleCredentials = "???";
export declare const SampleRetryPolicy: Layer.Layer<never, never, never>;
export declare const Operation: any;
export {};
//# sourceMappingURL=playground.d.ts.map