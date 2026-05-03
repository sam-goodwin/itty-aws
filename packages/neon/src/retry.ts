/**
 * neon retry configuration.
 *
 * Re-exports the shared `Retry` Context.Service from `@distilled.cloud/core`
 * so a blanket retry policy installed at the layer level covers every
 * neon API call below it.
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
