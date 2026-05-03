/**
 * Cloudflare retry configuration.
 *
 * Re-exports the shared `Retry` Context.Service from `@distilled.cloud/core`
 * so callers can install a blanket retry policy that covers every Cloudflare
 * API call below the layer:
 *
 * @example
 * ```ts
 * import * as Cloudflare from "@distilled.cloud/cloudflare";
 *
 * myEffect.pipe(Cloudflare.Retry.transient);
 * Effect.provide(myEffect, Layer.succeed(Cloudflare.Retry.Retry, customPolicy));
 * ```
 */
export {
  type Options,
  type Factory,
  type Policy,
  Retry,
  makeDefault,
  jittered,
  capped,
  throttlingOptions,
  transientOptions,
  policy,
  none,
  throttling,
  transient,
} from "@distilled.cloud/core/retry";
