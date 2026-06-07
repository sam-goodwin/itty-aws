import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as Schema from "effect/Schema";
export type RetrySchedule = Schedule.Schedule<unknown, any, never, never>;
export type RetryPolicyFn = (error: unknown) => Effect.Effect<Option.Option<RetrySchedule>>;
export declare const RetryPolicies: Context.Reference<ReadonlyArray<RetryPolicyFn>>;
export type DefaultRetryPolicyFn = (error: unknown) => Effect.Effect<RetrySchedule>;
export declare const DefaultRetryPolicy: Context.Reference<DefaultRetryPolicyFn>;
export declare const addRetryPolicy: (fn: RetryPolicyFn | ((error: unknown) => Option.Option<RetrySchedule>)) => Layer.Layer<never>;
/**
 * Protocol is a strict `Context.Service` — no global default. Every operation
 * bakes one in via its `protocol` config; the user can override by providing
 * their own Protocol Layer at the call site (the operation skips its baked
 * Layer when one is already in context).
 */
export type ProtocolShape = {};
declare const Protocol_base: Context.ServiceClass<Protocol, "Protocol", ProtocolShape>;
export declare class Protocol extends Protocol_base {
}
export type ApiErrorClass = {
    new (...args: any[]): {
        readonly _tag: string;
        readonly message: string;
    };
};
export interface OperationConfig<I extends Schema.Top, O extends Schema.Top, E extends readonly ApiErrorClass[] = readonly ApiErrorClass[], PE = never, PR = never> {
    input?: I;
    output?: O;
    errors?: E;
    /**
     * The default protocol Layer the operation runs against. Required — every
     * operation has one. Sets the `Protocol` reference value for the inner
     * effect.
     */
    protocol: Layer.Layer<Protocol, PE, PR>;
    /**
     * Optional per-operation retry-policy candidate. `null` (or omitted) means
     * no baked policy — only the call-site `RetryPolicies` stack and the
     * `DefaultRetryPolicy` reference are consulted.
     */
    retryPolicy?: RetryPolicyFn | null;
}
export declare function make<I extends Schema.Top, O extends Schema.Top, const E extends readonly ApiErrorClass[] = readonly [], PE = never, PR = never>(configFn: () => OperationConfig<I, O, E, PE, PR>): (input: Schema.Schema.Type<I>) => Effect.Effect<Schema.Schema.Type<O>, InstanceType<E[number]> | PE, PR>;
export {};
//# sourceMappingURL=api.d.ts.map