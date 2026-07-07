import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import * as HttpClient from "effect/unstable/http/HttpClient";
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
//#endregion
//#region Protocol
/**
 * The Protocol service knows how to turn a value into an HTTP request using
 * only the input schema's trait annotations, and how to turn a response back
 * into an output value using the output schema's trait annotations.
 *
 * Swap implementations by providing a different `Layer<Protocol>`.
 */
export class Protocol extends Context.Service()("Protocol") {
}
export function make(configFn) {
    const cfg = configFn();
    return ((input) => Effect.gen(function* () {
        const protocol = yield* Protocol;
        const client = yield* HttpClient.HttpClient;
        const request = yield* protocol.encode({
            input,
            inputAst: cfg.input.ast,
        });
        const response = yield* client.execute(request);
        return yield* protocol.decode({
            response,
            outputAst: cfg.output.ast,
        });
    }).pipe(Effect.provide(cfg.protocol)));
}
//#endregion
//# sourceMappingURL=api.js.map