/**
 * Polar retry configuration.
 */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
export {
  type Options,
  type Factory,
  type Policy,
  makeDefault,
  jittered,
  capped,
  throttlingOptions,
  transientOptions,
  throttlingFactory,
  transientFactory,
} from "@distilled.cloud/core/retry";
import {
  type Policy,
  throttlingFactory,
  transientFactory,
} from "@distilled.cloud/core/retry";

/**
 * Context tag for configuring retry behavior of Polar API calls.
 */
export class Retry extends Context.Service<Retry, Policy>()("PolarRetry") {}

/**
 * Provides a custom retry policy to all Polar API calls.
 */
export const policy = (optionsOrFactory: Policy) =>
  Effect.provide(Layer.succeed(Retry, optionsOrFactory));

/**
 * Disables all automatic retries.
 */
export const none = Effect.provide(
  Layer.succeed(Retry, { while: () => false }),
);

/** Apply the throttling retry policy (retries throttling errors indefinitely). */
export const throttling = policy(throttlingFactory);

/** Apply the transient retry policy (retries all transient errors indefinitely). */
export const transient = policy(transientFactory);
