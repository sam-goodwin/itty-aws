import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteJWTTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    templateID: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/jwt_templates/{templateID}",
  }),
);
export type DeleteJWTTemplateInput = typeof DeleteJWTTemplateInput.Type;

// Output Schema
export const DeleteJWTTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteJWTTemplateOutput = typeof DeleteJWTTemplateOutput.Type;

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
export const deleteJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteJWTTemplateInput,
  outputSchema: DeleteJWTTemplateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
