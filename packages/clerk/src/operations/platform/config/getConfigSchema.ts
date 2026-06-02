import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetConfigSchemaInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  keys: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/config/schema",
  }),
);
export type GetConfigSchemaInput = typeof GetConfigSchemaInput.Type;

// Output Schema
export const GetConfigSchemaOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  $schema: Schema.optional(Schema.String),
  $id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export type GetConfigSchemaOutput = typeof GetConfigSchemaOutput.Type;

// The operation
/**
 * Get instance config schema
 *
 * Get the JSON Schema for the instance configuration.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Optionally filter to specific config keys using the `keys` query parameter.
 * Requires the `applications:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param keys - Config keys to retrieve schema for. If not specified, all keys are returned.
 */
export const getConfigSchema = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetConfigSchemaInput,
  outputSchema: GetConfigSchemaOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
