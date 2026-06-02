import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteJWTTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    template_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "DELETE", path: "/jwt_templates/{template_id}" }));
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
 * Delete a Template
 *
 * @param template_id - JWT Template ID
 */
export const DeleteJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteJWTTemplateInput,
  outputSchema: DeleteJWTTemplateOutput,
  errors: [Forbidden, NotFound] as const,
}));
