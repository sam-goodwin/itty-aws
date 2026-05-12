import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateIamRoleTrustInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    trust_type: Schema.optional(Schema.String),
    trusted_user_id: Schema.optional(Schema.String),
    trusted_group_id: Schema.optional(Schema.String),
    trusted_oidc_issuer_id: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Unknown),
    valid_until: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PUT", path: "/v2/role-trusts/{id}" }));
export type UpdateIamRoleTrustInput = typeof UpdateIamRoleTrustInput.Type;

// Output Schema
export const UpdateIamRoleTrustOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateIamRoleTrustOutput = typeof UpdateIamRoleTrustOutput.Type;

// The operation
/**
 * Update Role Trust
 *
 * Update a Role Trust.
 *
 * @param id - The Role Trust ID.
 */
export const updateIamRoleTrust = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateIamRoleTrustInput,
  outputSchema: UpdateIamRoleTrustOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
