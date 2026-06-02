import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateJWTTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
    claims: Schema.Unknown,
    lifetime: Schema.optional(Schema.NullOr(Schema.Number)),
    allowed_clock_skew: Schema.optional(Schema.NullOr(Schema.Number)),
    custom_signing_key: Schema.optional(Schema.Boolean),
    signing_algorithm: Schema.optional(Schema.NullOr(Schema.String)),
    signing_key: Schema.optional(Schema.NullOr(Schema.String)),
  },
).pipe(T.Http({ method: "POST", path: "/jwt_templates" }));
export type CreateJWTTemplateInput = typeof CreateJWTTemplateInput.Type;

// Output Schema
export const CreateJWTTemplateOutput =
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
export type CreateJWTTemplateOutput = typeof CreateJWTTemplateOutput.Type;

// The operation
/**
 * Create a JWT template
 *
 * Create a new JWT template
 */
export const CreateJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateJWTTemplateInput,
  outputSchema: CreateJWTTemplateOutput,
  errors: [BadRequest, PaymentRequired, UnprocessableEntity] as const,
}));
