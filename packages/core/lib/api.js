import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as Schema from "effect/Schema";
import { hasCategory } from "./error-category.js";
import { RETRYABLE } from "./errors.js";
export const RetryPolicies = Context.Reference("RetryPolicies", {
    defaultValue: () => [],
});
export const DefaultRetryPolicy = Context.Reference("DefaultRetryPolicy", {
    defaultValue: () => (error) => Effect.succeed(hasCategory(RETRYABLE)(error)
        ? Schedule.forever
        : Schedule.exponential(Duration.millis(100), 2).pipe(Schedule.take(3))),
});
const resolveRetrySchedule = (error) => Effect.gen(function* () {
    const stack = yield* RetryPolicies;
    //* reverse through the retry policies to see if any handle
    for (let i = stack.length - 1; i >= 0; i--) {
        const r = yield* stack[i](error);
        if (Option.isSome(r))
            return r.value;
    }
    const defaultPolicy = yield* DefaultRetryPolicy;
    return yield* defaultPolicy(error);
});
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
export class Protocol extends Context.Service()("Protocol") {
}
export function make(configFn) {
    // Implementation sketch (currently stubbed):
    //
    //   const cfg = configFn()
    //   const inner = (input) => /* real operation effect that requires Protocol */
    //   return (input) =>
    //     Effect.gen(function*() {
    //       // Only apply the baked Protocol layer when nothing else has provided one,
    //       // so a caller's `Effect.provide(otherProtocol)` wins.
    //       const existing = yield* Effect.serviceOption(Protocol)
    //       const eff = inner(input)
    //       return yield* Option.isSome(existing)
    //         ? eff
    //         : eff.pipe(Effect.provide(cfg.protocol))
    //     })
    return "TODO";
}
//#endregion
//# sourceMappingURL=api.js.map