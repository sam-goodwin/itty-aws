import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RestoreIamRoleTrustInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PATCH", path: "/v2/role-trusts/{id}/restore" }));
export type RestoreIamRoleTrustInput = typeof RestoreIamRoleTrustInput.Type;

// Output Schema
export const RestoreIamRoleTrustOutput =
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
export type RestoreIamRoleTrustOutput = typeof RestoreIamRoleTrustOutput.Type;

// The operation
/**
 * Restore Role Trust
 *
 * Restore a soft-deleted Role Trust.
 *
 * @param id - The Role Trust ID.
 */
export const restoreIamRoleTrust = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestoreIamRoleTrustInput,
  outputSchema: RestoreIamRoleTrustOutput,
  errors: [Forbidden, NotFound] as const,
}));
