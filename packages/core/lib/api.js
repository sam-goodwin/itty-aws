import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import { hasCategory } from "./error-category.js";
import { RETRYABLE } from "./errors.js";
export const RetryPolicies = Context.Reference("RetryPolicies", {
    defaultValue: () => [],
});
const defaultErrorPolicy = (error) => Effect.succeed(hasCategory(RETRYABLE)(error)
    ? Schedule.forever
    : Schedule.exponential(Duration.millis(100), 2).pipe(Schedule.take(3)));
export class DefaultRetryPolicy extends Context.Service()("DefaultRetryPolicy") {
}
export const resolveRetrySchedule = (error) => Effect.gen(function* () {
    const stack = yield* RetryPolicies;
    //* reverse through the retry policies to see if any handle
    for (let i = stack.length - 1; i >= 0; i--) {
        const r = yield* stack[i](error);
        if (Option.isSome(r))
            return r.value;
    }
    const defaultPolicyOverride = yield* Effect.serviceOption(DefaultRetryPolicy);
    const defaultPolicy = Option.isNone(defaultPolicyOverride)
        ? defaultErrorPolicy
        : defaultPolicyOverride.value;
    return yield* defaultPolicy(error);
});
/**
 * Push a retry-policy candidate onto the stack. The function may return either
 * an `Option<RetrySchedule>` directly (sync) or an `Effect<Option<...>>` if it
 * needs to consult services.
 */
export const addRetryPolicy = (fn) => {
    const lifted = (error) => {
        const r = fn(error);
        return Effect.isEffect(r) ? r : Effect.succeed(r);
    };
    return Layer.updateService(Layer.empty, RetryPolicies, (prev) => [
        ...prev,
        lifted,
    ]);
};
//# sourceMappingURL=api.js.map