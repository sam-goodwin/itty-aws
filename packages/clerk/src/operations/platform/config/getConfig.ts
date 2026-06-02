import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetConfigInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  keys: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/config",
  }),
);
export type GetConfigInput = typeof GetConfigInput.Type;

// Output Schema
export const GetConfigOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config_version: Schema.optional(Schema.String),
});
export type GetConfigOutput = typeof GetConfigOutput.Type;

// The operation
/**
 * Get instance config
 *
 * Get the configuration for an application instance.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Optionally filter to specific config keys using the `keys` query parameter.
 * Requires the `applications:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param keys - Config keys to retrieve. If not specified, all keys are returned.
 */
export const getConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetConfigInput,
  outputSchema: GetConfigOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
