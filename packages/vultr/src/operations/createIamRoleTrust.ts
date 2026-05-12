import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateIamRoleTrustInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.optional(Schema.String),
    trust_type: Schema.optional(Schema.String),
    trusted_user_id: Schema.optional(Schema.String),
    trusted_group_id: Schema.optional(Schema.String),
    trusted_oidc_issuer_id: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Unknown),
    valid_until: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/role-trusts" }));
export type CreateIamRoleTrustInput = typeof CreateIamRoleTrustInput.Type;

// Output Schema
export const CreateIamRoleTrustOutput =
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
export type CreateIamRoleTrustOutput = typeof CreateIamRoleTrustOutput.Type;

// The operation
/**
 * Create Role Trust
 *
 * Create a new Role Trust.
 */
export const createIamRoleTrust = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateIamRoleTrustInput,
  outputSchema: CreateIamRoleTrustOutput,
  errors: [BadRequest, Forbidden] as const,
}));
