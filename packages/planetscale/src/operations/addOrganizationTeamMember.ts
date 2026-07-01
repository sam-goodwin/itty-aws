import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AddOrganizationTeamMemberInput {
  organization: string;
  team: string;
  user_id: string;
}
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
  ) as unknown as Schema.Codec<AddOrganizationTeamMemberInput>;

// Output Schema
export interface AddOrganizationTeamMemberOutput {
  id: string;
  user: {
    id: string;
    display_name: string;
    name: string;
    email: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
    two_factor_auth_configured: boolean;
    default_organization?: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    } | null;
    sso?: boolean | null;
    managed?: boolean | null;
    directory_managed?: boolean | null;
    email_verified?: boolean | null;
  };
  actor: { id: string; display_name: string; avatar_url: string };
  created_at: string;
  updated_at: string;
  passwords: {
    id: string;
    name: string;
    role: "reader" | "writer" | "admin" | "readwriter";
    cidrs: string[] | null;
    created_at: string;
    deleted_at: string | null;
    expires_at: string | null;
    last_used_at: string | null;
    expired: boolean;
    direct_vtgate: boolean;
    direct_vtgate_addresses: string[];
    ttl_seconds: number | null;
    access_host_url: string;
    access_host_regional_url: string;
    access_host_regional_urls: string[];
    actor: { id: string; display_name: string; avatar_url: string } | null;
    region: {
      id: string;
      provider: string;
      enabled: boolean;
      public_ip_addresses: string[];
      display_name: string;
      location: string;
      slug: string;
      current_default: boolean;
      mysql_supported: boolean;
      postgresql_supported: boolean;
    };
    username: string;
    plain_text: Redacted.Redacted<string> | null;
    replica: boolean;
    renewable: boolean;
    database_branch: {
      name: string;
      id: string;
      production: boolean;
      mysql_edge_address: string;
      private_edge_connectivity: boolean;
    };
  }[];
}
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
        plain_text: SensitiveOutputNullableString,
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
  }) as unknown as Schema.Codec<AddOrganizationTeamMemberOutput>;

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
