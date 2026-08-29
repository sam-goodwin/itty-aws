/** Grafana retry configuration for generated API operations. */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  type Policy,
  throttlingFactory,
  transientFactory,
} from "@distilled.cloud/core/retry";

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

/** Context tag for configuring retries for Grafana API calls. */
export class Retry extends Context.Service<Retry, Policy>()("GrafanaRetry") {}

/** Provide a custom retry policy to all Grafana calls below this effect. */
export const policy = (optionsOrFactory: Policy) =>
  Effect.provide(Layer.succeed(Retry, optionsOrFactory));

/** Disable automatic retries. */
export const none = Effect.provide(
  Layer.succeed(Retry, { while: () => false }),
);

/** Retry throttling responses according to the shared policy. */
export const throttling = policy(throttlingFactory);

/** Retry transient and server failures according to the shared policy. */
export const transient = policy(transientFactory);
