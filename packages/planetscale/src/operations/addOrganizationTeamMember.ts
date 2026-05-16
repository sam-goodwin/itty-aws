import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const AddOrganizationTeamMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    team: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/teams/{team}/members",
    }),
  );
export type AddOrganizationTeamMemberInput =
  typeof AddOrganizationTeamMemberInput.Type;

// Output Schema
export const AddOrganizationTeamMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    user: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      name: Schema.String,
      email: Schema.String,
      avatar_url: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      two_factor_auth_configured: Schema.Boolean,
      default_organization: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            created_at: Schema.String,
            updated_at: Schema.String,
            deleted_at: Schema.NullOr(Schema.String),
          }),
        ),
      ),
      sso: Schema.optional(Schema.NullOr(Schema.Boolean)),
      managed: Schema.optional(Schema.NullOr(Schema.Boolean)),
      directory_managed: Schema.optional(Schema.NullOr(Schema.Boolean)),
      email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    }),
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
    created_at: Schema.String,
    updated_at: Schema.String,
    passwords: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        role: Schema.Literals(["reader", "writer", "admin", "readwriter"]),
        cidrs: Schema.NullOr(Schema.Array(Schema.String)),
        created_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
        expires_at: Schema.NullOr(Schema.String),
        last_used_at: Schema.NullOr(Schema.String),
        expired: Schema.Boolean,
        direct_vtgate: Schema.Boolean,
        direct_vtgate_addresses: Schema.Array(Schema.String),
        ttl_seconds: Schema.NullOr(Schema.Number),
        access_host_url: Schema.String,
        access_host_regional_url: Schema.String,
        access_host_regional_urls: Schema.Array(Schema.String),
        actor: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            display_name: Schema.String,
            avatar_url: Schema.String,
          }),
        ),
        region: Schema.Struct({
          id: Schema.String,
          provider: Schema.String,
          enabled: Schema.Boolean,
          public_ip_addresses: Schema.Array(Schema.String),
          display_name: Schema.String,
          location: Schema.String,
          slug: Schema.String,
          current_default: Schema.Boolean,
          mysql_supported: Schema.Boolean,
          postgresql_supported: Schema.Boolean,
        }),
        username: Schema.String,
        plain_text: SensitiveNullableString,
        replica: Schema.Boolean,
        renewable: Schema.Boolean,
        database_branch: Schema.Struct({
          name: Schema.String,
          id: Schema.String,
          production: Schema.Boolean,
          mysql_edge_address: Schema.String,
          private_edge_connectivity: Schema.Boolean,
        }),
      }),
    ),
  });
export type AddOrganizationTeamMemberOutput =
  typeof AddOrganizationTeamMemberOutput.Type;

// The operation
/**
 * Add a member to a team
 *
 * @param organization - The name of the organization
 * @param team - The slug of the team
 * @param user_id - The ID of the organization member to add to the team
 */
export const addOrganizationTeamMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AddOrganizationTeamMemberInput,
    outputSchema: AddOrganizationTeamMemberOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
