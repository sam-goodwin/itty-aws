import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetJWTTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  templateID: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/jwt_templates/{templateID}",
  }),
);
export type GetJWTTemplateInput = typeof GetJWTTemplateInput.Type;

// Output Schema
export const GetJWTTemplateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["jwt_template"]),
  id: Schema.String,
  name: Schema.String,
  claims: Schema.Unknown,
  lifetime: Schema.Number,
  allowed_clock_skew: Schema.Number,
  custom_signing_key: Schema.Boolean,
  signing_algorithm: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type GetJWTTemplateOutput = typeof GetJWTTemplateOutput.Type;

// The operation
/**
 * Get a JWT template
 *
 * Retrieve a specific JWT template for an application instance.
 * Requires the `jwt_templates:read` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param templateID - JWT Template ID.
 */
export const getJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetJWTTemplateInput,
  outputSchema: GetJWTTemplateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
