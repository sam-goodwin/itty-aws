import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RolesRoleMembershipsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/roles/{role_id}/role_memberships/",
    }),
  );
export type RolesRoleMembershipsListInput =
  typeof RolesRoleMembershipsListInput.Type;

// Output Schema
export const RolesRoleMembershipsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type RolesRoleMembershipsListOutput =
  typeof RolesRoleMembershipsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const rolesRoleMembershipsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RolesRoleMembershipsListInput,
    outputSchema: RolesRoleMembershipsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
