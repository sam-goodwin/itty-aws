import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetIamRoleTrustInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/role-trusts/{id}" }));
export type GetIamRoleTrustInput = typeof GetIamRoleTrustInput.Type;

// Output Schema
export const GetIamRoleTrustOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role_trust: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      role_name: Schema.optional(Schema.String),
      role_id: Schema.optional(Schema.String),
      trust_type: Schema.optional(Schema.Literals(["user", "group", "oidc"])),
      trusted_oidc_issuer_id: Schema.optional(Schema.String),
      trusted_user_id: Schema.optional(Schema.String),
      trusted_group_id: Schema.optional(Schema.String),
      user_display: Schema.optional(Schema.String),
      group_display: Schema.optional(Schema.String),
      conditions: Schema.optional(Schema.Unknown),
      valid_until: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
    }),
  ),
});
export type GetIamRoleTrustOutput = typeof GetIamRoleTrustOutput.Type;

// The operation
/**
 * Get Role Trust
 *
 * Get information about a Role Trust.
 *
 * @param id - The Role Trust ID.
 */
export const getIamRoleTrust = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIamRoleTrustInput,
  outputSchema: GetIamRoleTrustOutput,
  errors: [Forbidden, NotFound] as const,
}));
