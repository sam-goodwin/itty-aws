/**
 * Cloudflare error types — hand-written.
 *
 * Cloudflare reports failures inside the v4 envelope as
 * `{ success: false, errors: [{ code, message }], ... }`. The protocol turns
 * those (and non-2xx responses) into one of the tagged errors below. Every
 * generated operation declares `[CloudflareRateLimited, CloudflareError]` as
 * its error set.
 */
import * as S from "effect/Schema";
import { withThrottlingError } from "@distilled.cloud/core/category";
import { withCategory } from "@distilled.cloud/core/error-category";
import { RETRYABLE } from "@distilled.cloud/core/errors";

/** A single `{ code, message }` entry from the envelope's `errors` array. */
export interface CloudflareApiError {
  readonly code?: number;
  readonly message: string;
}

/**
 * Generic Cloudflare API error. Carries the HTTP status and the envelope's
 * `errors` array so callers can inspect the underlying codes.
 */
export class CloudflareError extends S.TaggedErrorClass<CloudflareError>()(
  "CloudflareError",
  {
    status: S.Number,
    errors: S.Array(
      S.Struct({
        code: S.optional(S.Number),
        message: S.String,
      }),
    ),
  },
) {}

/**
 * Rate-limit / 429 error. Carries the ThrottlingError category (from
 * `core/category`) so retry policies built on `Retry.makeDefault` /
 * `isThrottling` back off and retry it, plus the legacy RETRYABLE tag.
 */
export class CloudflareRateLimited extends S.TaggedErrorClass<CloudflareRateLimited>()(
  "CloudflareRateLimited",
  {
    status: S.Number,
    errors: S.Array(
      S.Struct({
        code: S.optional(S.Number),
        message: S.String,
      }),
    ),
  },
).pipe(withCategory(RETRYABLE), withThrottlingError) {}
