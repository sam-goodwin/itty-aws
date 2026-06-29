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
export const PatchConfigInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  dry_run: Schema.optional(Schema.Boolean),
  destructive: Schema.optional(Schema.Boolean),
  keys: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/config",
  }),
);
export type PatchConfigInput = typeof PatchConfigInput.Type;

// Output Schema
export const PatchConfigOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config_version: Schema.optional(Schema.String),
  dry_run: Schema.optional(Schema.Boolean),
  before: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  after: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export type PatchConfigOutput = typeof PatchConfigOutput.Type;

// The operation
/**
 * Update instance config
 *
 * Update the configuration for an application instance.
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
 * @param keys - Config keys to return in the response. If not specified, only updated keys are returned.
 * @param If-Match - Config version for optimistic concurrency control.
 */
export const patchConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchConfigInput,
  outputSchema: PatchConfigOutput,
  errors: [
    BadRequest,
    PaymentRequired,
    Forbidden,
    NotFound,
    Conflict,
    UnprocessableEntity,
  ] as const,
}));
