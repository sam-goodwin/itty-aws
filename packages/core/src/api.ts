import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as Schema from "effect/Schema";
import { hasCategory } from "./error-category.ts";
import { RETRYABLE } from "./errors.ts";

//#region RetryPolicy
export type RetrySchedule = Schedule.Schedule<unknown, any, never, never>;

export type RetryPolicyFn = (
  error: unknown,
) => Effect.Effect<Option.Option<RetrySchedule>>;

export const RetryPolicies: Context.Reference<ReadonlyArray<RetryPolicyFn>> =
  Context.Reference<ReadonlyArray<RetryPolicyFn>>("RetryPolicies", {
    defaultValue: () => [],
  });

export type DefaultRetryPolicyFn = (
  error: unknown,
) => Effect.Effect<RetrySchedule>;

export const DefaultRetryPolicy: Context.Reference<DefaultRetryPolicyFn> =
  Context.Reference<DefaultRetryPolicyFn>("DefaultRetryPolicy", {
    defaultValue: () => (error) =>
      Effect.succeed(
        hasCategory(RETRYABLE)(error)
          ? Schedule.forever
          : Schedule.exponential(Duration.millis(100), 2).pipe(
              Schedule.take(3),
            ),
      ),
  });

const resolveRetrySchedule = (error: unknown) =>
  Effect.gen(function* () {
    const stack = yield* RetryPolicies;
    //* reverse through the retry policies to see if any handle
    for (let i = stack.length - 1; i >= 0; i--) {
      const r = yield* stack[i]!(error);
      if (Option.isSome(r)) return r.value;
    }
    const defaultPolicy = yield* DefaultRetryPolicy;
    return yield* defaultPolicy(error);
  });

export const addRetryPolicy = (
  fn: RetryPolicyFn | ((error: unknown) => Option.Option<RetrySchedule>),
): Layer.Layer<never> => {
  const lifted: RetryPolicyFn = (error) => {
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
export class Protocol extends Context.Service<Protocol, {}>()("Protocol") {}

//#endregion

//#region Make

export type ApiErrorClass = {
  new (...args: any[]): {
    readonly _tag: string;
    readonly message: string;
  };
};

export interface OperationConfig<
  I extends Schema.Top,
  O extends Schema.Top,
  E extends readonly ApiErrorClass[] = readonly ApiErrorClass[],
  PE = never,
  PR = never,
> {
  input?: I;
  output?: O;
  errors?: E;
  protocol: Layer.Layer<Protocol, PE, PR>;
  retryPolicy?: RetryPolicyFn;
}

export function make<
  I extends Schema.Top,
  O extends Schema.Top,
  const E extends readonly ApiErrorClass[] = readonly [],
  PE = never,
  PR = never,
>(
  configFn: () => OperationConfig<I, O, E, PE, PR>,
): (
  input: Schema.Schema.Type<I>,
) => Effect.Effect<Schema.Schema.Type<O>, InstanceType<E[number]> | PE, PR> {
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
  return "TODO" as any;
}

//#endregion
