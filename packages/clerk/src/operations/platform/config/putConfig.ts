import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const PutConfigInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  dry_run: Schema.optional(Schema.Boolean),
  destructive: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/config",
  }),
);
export type PutConfigInput = typeof PutConfigInput.Type;

// Output Schema
export const PutConfigOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config_version: Schema.optional(Schema.String),
  dry_run: Schema.optional(Schema.Boolean),
  before: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  after: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export type PutConfigOutput = typeof PutConfigOutput.Type;

// The operation
/**
 * Replace instance config
 *
 * Replace the full configuration for an application instance.
 * Unlike PATCH, PUT requires all config keys to be included in the request body.
 * If any keys are missing, a 400 error is returned listing the missing keys.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Use the `dry_run` query parameter to preview changes without applying them.
 * Use the `destructive` query parameter to allow clearing config keys by setting them to null.
 * Use the `If-Match` header to provide optimistic concurrency control via config version.
 * Requires the `applications:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param dry_run - If true, preview the changes without applying them.
 * @param destructive - If true, allow clearing config keys by setting them to null.
 * @param If-Match - Config version for optimistic concurrency control.
 */
export const putConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PutConfigInput,
  outputSchema: PutConfigOutput,
  errors: [
    BadRequest,
    PaymentRequired,
    Forbidden,
    NotFound,
    Conflict,
    UnprocessableEntity,
  ] as const,
}));
