import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const UpdateJWTTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    template_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    claims: Schema.Unknown,
    lifetime: Schema.optional(Schema.NullOr(Schema.Number)),
    allowed_clock_skew: Schema.optional(Schema.NullOr(Schema.Number)),
    custom_signing_key: Schema.optional(Schema.Boolean),
    signing_algorithm: Schema.optional(Schema.NullOr(Schema.String)),
    signing_key: Schema.optional(Schema.NullOr(Schema.String)),
  },
).pipe(T.Http({ method: "PATCH", path: "/jwt_templates/{template_id}" }));
export type UpdateJWTTemplateInput = typeof UpdateJWTTemplateInput.Type;

// Output Schema
export const UpdateJWTTemplateOutput =
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
export type UpdateJWTTemplateOutput = typeof UpdateJWTTemplateOutput.Type;

// The operation
/**
 * Update a JWT template
 *
 * Updates an existing JWT template
 *
 * @param template_id - The ID of the JWT template to update
 */
export const UpdateJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateJWTTemplateInput,
  outputSchema: UpdateJWTTemplateOutput,
  errors: [BadRequest, PaymentRequired, UnprocessableEntity] as const,
}));
