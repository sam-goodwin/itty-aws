import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export interface GetOrganizationTeamInput {
  organization: string;
  team: string;
}
export const GetOrganizationTeamInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    team: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/teams/{team}",
    }),
  ) as unknown as Schema.Codec<GetOrganizationTeamInput>;

// Output Schema
export interface GetOrganizationTeamOutput {
  id: string;
  display_name: string;
  creator: { id: string; display_name: string; avatar_url: string };
  members: ReadonlyArray<{
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
  }>;
  databases: ReadonlyArray<{
    id: string;
    name: string;
    url: string;
    branches_url: string;
  }>;
  analyst_databases: ReadonlyArray<{
    id: string;
    name: string;
    url: string;
    branches_url: string;
  }>;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  description: string | null;
  managed: boolean;
}
export const GetOrganizationTeamOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    display_name: Schema.String,
    creator: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
    members: Schema.Array(
      Schema.Struct({
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
    ),
    databases: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        url: Schema.String,
        branches_url: Schema.String,
      }),
    ),
    analyst_databases: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        url: Schema.String,
        branches_url: Schema.String,
      }),
    ),
    name: Schema.String,
    slug: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    description: Schema.NullOr(Schema.String),
    managed: Schema.Boolean,
  }) as unknown as Schema.Codec<GetOrganizationTeamOutput>;

// The operation
/**
 * Get an organization team
 *
 * @param organization - The name of the organization
 * @param team - The slug of the team
 */
export const getOrganizationTeam = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationTeamInput,
  outputSchema: GetOrganizationTeamOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
