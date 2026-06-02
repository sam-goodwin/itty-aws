import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformDeleteJWTTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    templateID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/jwt_templates/{templateID}",
    }),
  );
export type PlatformDeleteJWTTemplateInput =
  typeof PlatformDeleteJWTTemplateInput.Type;

// Output Schema
export const PlatformDeleteJWTTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type PlatformDeleteJWTTemplateOutput =
  typeof PlatformDeleteJWTTemplateOutput.Type;

// The operation
/**
 * Delete a JWT template
 *
 * Delete a JWT template from an application instance.
 * Requires the `jwt_templates:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param templateID - JWT Template ID.
 */
export const PlatformDeleteJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformDeleteJWTTemplateInput,
    outputSchema: PlatformDeleteJWTTemplateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
