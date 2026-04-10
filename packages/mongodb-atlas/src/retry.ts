/**
 * Mongodb-atlas retry configuration.
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Context from "effect/Context";
export {
  type Options,
  type Factory,
  type Policy,
  makeDefault,
  jittered,
  capped,
  throttlingOptions,
  transientOptions,
} from "@distilled.cloud/core/retry";
import type { Policy } from "@distilled.cloud/core/retry";

/**
 * Context tag for configuring retry behavior of Mongodb-atlas API calls.
 */
export class Retry extends Context.Service<Retry, Policy>()(
  "Mongodb-atlasRetry",
) {}

/**
 * Provides a custom retry policy to all Mongodb-atlas API calls.
 */
export const policy = (optionsOrFactory: Policy) =>
  Effect.provide(Layer.succeed(Retry, optionsOrFactory));

/**
 * Disables all automatic retries.
 */
export const none = Effect.provide(
  Layer.succeed(Retry, { while: () => false }),
);
