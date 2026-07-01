import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ValidateAPITokenInput {}
export const ValidateAPITokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v1/auth/validate" }),
) as unknown as Schema.Codec<ValidateAPITokenInput>;

// Output Schema
export interface ValidateAPITokenOutput {
  exp?: number;
}
export const ValidateAPITokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    exp: Schema.optional(Schema.Number),
  },
) as unknown as Schema.Codec<ValidateAPITokenOutput>;

// The operation
/**
 * Validate API Token
 *
 * Validates an API token belonging to a user.
 */
export const validateAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ValidateAPITokenInput,
  outputSchema: ValidateAPITokenOutput,
}));
