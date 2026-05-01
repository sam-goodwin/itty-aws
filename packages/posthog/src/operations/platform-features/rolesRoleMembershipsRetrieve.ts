import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RolesRoleMembershipsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/roles/{role_id}/role_memberships/{id}/",
    }),
  );
export type RolesRoleMembershipsRetrieveInput =
  typeof RolesRoleMembershipsRetrieveInput.Type;

// Output Schema
export const RolesRoleMembershipsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    role_id: Schema.String,
    organization_member: Schema.Struct({
      id: Schema.String,
      user: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      level: Schema.optional(Schema.Literals([1, 8, 15])),
      joined_at: Schema.String,
      updated_at: Schema.String,
      is_2fa_enabled: Schema.Boolean,
      has_social_auth: Schema.Boolean,
      last_login: Schema.String,
    }),
    user: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    joined_at: Schema.String,
    updated_at: Schema.String,
    user_uuid: Schema.String,
  });
export type RolesRoleMembershipsRetrieveOutput =
  typeof RolesRoleMembershipsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this role membership.
 */
export const rolesRoleMembershipsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RolesRoleMembershipsRetrieveInput,
    outputSchema: RolesRoleMembershipsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
