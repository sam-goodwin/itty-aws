import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformGetConfigSchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    keys: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/config/schema",
    }),
  );
export type PlatformGetConfigSchemaInput =
  typeof PlatformGetConfigSchemaInput.Type;

// Output Schema
export const PlatformGetConfigSchemaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $schema: Schema.optional(Schema.String),
    $id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type PlatformGetConfigSchemaOutput =
  typeof PlatformGetConfigSchemaOutput.Type;

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
export const PlatformGetConfigSchema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformGetConfigSchemaInput,
    outputSchema: PlatformGetConfigSchemaOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
