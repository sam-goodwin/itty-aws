import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformGetJWTTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    templateID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/jwt_templates/{templateID}",
    }),
  );
export type PlatformGetJWTTemplateInput =
  typeof PlatformGetJWTTemplateInput.Type;

// Output Schema
export const PlatformGetJWTTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PlatformGetJWTTemplateOutput =
  typeof PlatformGetJWTTemplateOutput.Type;

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
export const PlatformGetJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformGetJWTTemplateInput,
    outputSchema: PlatformGetJWTTemplateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
