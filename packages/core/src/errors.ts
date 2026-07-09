import * as S from "effect/Schema";

export const RETRYABLE = "@distilled/errors/retryable" as const;

/**
 * Credential / configuration resolution failure (missing env vars, unreadable
 * auth profile, …). Mirrors the distilled repo's `core/errors` ConfigError so
 * consumers can construct and match it identically.
 */
export class ConfigError extends S.TaggedErrorClass<ConfigError>()(
  "ConfigError",
  { message: S.String },
) {}
