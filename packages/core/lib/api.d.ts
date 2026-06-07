import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
export type RetrySchedule = Schedule.Schedule<unknown, any, never, never>;
export type RetryPolicyFn = (error: unknown) => Effect.Effect<Option.Option<RetrySchedule>>;
export declare const RetryPolicies: Context.Reference<ReadonlyArray<RetryPolicyFn>>;
declare const DefaultRetryPolicy_base: Context.ServiceClass<DefaultRetryPolicy, "DefaultRetryPolicy", (error: unknown) => Effect.Effect<RetrySchedule>>;
export declare class DefaultRetryPolicy extends DefaultRetryPolicy_base {
}
export declare const resolveRetrySchedule: (error: unknown) => Effect.Effect<RetrySchedule, never, never>;
/** Sync variant: skip wrapping in `Effect.succeed` when the policy is pure. */
export type SyncRetryPolicyFn = (error: unknown) => Option.Option<RetrySchedule>;
/**
 * Push a retry-policy candidate onto the stack. The function may return either
 * an `Option<RetrySchedule>` directly (sync) or an `Effect<Option<...>>` if it
 * needs to consult services.
 */
export declare const addRetryPolicy: (fn: RetryPolicyFn | SyncRetryPolicyFn) => Layer.Layer<never>;
export {};
//# sourceMappingURL=api.d.ts.map