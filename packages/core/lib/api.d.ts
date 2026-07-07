import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import type * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
export type RetrySchedule = Schedule.Schedule<unknown, any, never, never>;
export type RetryPolicyFn = (error: unknown) => Effect.Effect<Option.Option<RetrySchedule>>;
export declare const RetryPolicies: Context.Reference<ReadonlyArray<RetryPolicyFn>>;
export type DefaultRetryPolicyFn = (error: unknown) => Effect.Effect<RetrySchedule>;
export declare const DefaultRetryPolicy: Context.Reference<DefaultRetryPolicyFn>;
export declare const addRetryPolicy: (fn: RetryPolicyFn | ((error: unknown) => Option.Option<RetrySchedule>)) => Layer.Layer<never>;
declare const Protocol_base: Context.ServiceClass<Protocol, "Protocol", {
    readonly encode: (args: {
        readonly input: unknown;
        readonly inputAst: AST.AST;
    }) => Effect.Effect<HttpClientRequest.HttpClientRequest>;
    readonly decode: (args: {
        readonly response: HttpClientResponse.HttpClientResponse;
        readonly outputAst: AST.AST;
    }) => Effect.Effect<unknown>;
}>;
/**
 * The Protocol service knows how to turn a value into an HTTP request using
 * only the input schema's trait annotations, and how to turn a response back
 * into an output value using the output schema's trait annotations.
 *
 * Swap implementations by providing a different `Layer<Protocol>`.
 */
export declare class Protocol extends Protocol_base {
}
export type ApiErrorClass = {
    new (...args: any[]): {
        readonly _tag: string;
        readonly message: string;
    };
};
export interface OperationConfig<I extends S.Top, O extends S.Top, PE, PR, E extends readonly ApiErrorClass[] = readonly ApiErrorClass[]> {
    input?: I;
    output?: O;
    errors?: E;
    /** The protocol layer that knows how to encode/decode this operation's wire format. */
    protocol: Layer.Layer<Protocol, PE, PR>;
    retryPolicy?: RetryPolicyFn;
}
export declare function make<I extends S.Top, O extends S.Top, PE, PR, const E extends readonly ApiErrorClass[] = readonly []>(configFn: () => OperationConfig<I, O, PE, PR, E>): (input: S.Schema.Type<I>) => Effect.Effect<S.Schema.Type<O>, InstanceType<E[number]> | PE | HttpClientError.HttpClientError, PR | HttpClient.HttpClient>;
export {};
//# sourceMappingURL=api.d.ts.map