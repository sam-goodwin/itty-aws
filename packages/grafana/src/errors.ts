/**
 * Grafana-specific errors.
 *
 * The structured Grafana API generally returns HTTP errors with a small JSON
 * object such as `{ message, reason, details }`.  HTTP status classes remain
 * the primary typed errors; the fallback below preserves the complete body so
 * provider details are not lost when Grafana adds a new error shape.
 */
export {
  BadGateway,
  BadRequest,
  Conflict,
  ConfigError,
  Forbidden,
  GatewayTimeout,
  InternalServerError,
  Locked,
  NotFound,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
  UnprocessableEntity,
  HTTP_STATUS_MAP,
  DEFAULT_ERRORS,
  API_ERRORS,
} from "@distilled.cloud/core/errors";
export type { DefaultErrors } from "@distilled.cloud/core/errors";

import * as Schema from "effect/Schema";
import * as Category from "@distilled.cloud/core/category";

/** Returned when Grafana returns an error not covered by the HTTP status map. */
export class UnknownGrafanaError extends Schema.TaggedError<UnknownGrafanaError>()(
  "UnknownGrafanaError",
  {
    status: Schema.optional(Schema.Number),
    code: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Returned when a response body cannot be decoded by an operation schema. */
export class GrafanaParseError extends Schema.TaggedError<GrafanaParseError>()(
  "GrafanaParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

/** Errors that can occur independently of an individual generated operation. */
export type ClientErrors = UnknownGrafanaError | GrafanaParseError;

/** Shared status errors plus Grafana's unknown and parse fallbacks. */
export type GrafanaDefaultErrors =
  | import("@distilled.cloud/core/errors").DefaultErrors
  | ClientErrors;
