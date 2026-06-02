import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetJWTTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  template_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/jwt_templates/{template_id}" }));
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
 * Retrieve a template
 *
 * Retrieve the details of a given JWT template
 *
 * @param template_id - JWT Template ID
 */
export const GetJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetJWTTemplateInput,
  outputSchema: GetJWTTemplateOutput,
  errors: [NotFound] as const,
}));
