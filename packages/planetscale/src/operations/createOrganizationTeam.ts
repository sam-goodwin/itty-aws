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
export interface CreateOrganizationTeamInput {
  organization: string;
  name: string;
  description?: string;
}
export const CreateOrganizationTeamInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/organizations/{organization}/teams" }),
  ) as unknown as Schema.Codec<CreateOrganizationTeamInput>;

// Output Schema
export interface CreateOrganizationTeamOutput {
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
export const CreateOrganizationTeamOutput =
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
  }) as unknown as Schema.Codec<CreateOrganizationTeamOutput>;

// The operation
/**
 * Create an organization team
 *
 * @param organization - The name of the organization
 * @param name - The name of the team
 * @param description - A description of the team's purpose
 */
export const createOrganizationTeam = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateOrganizationTeamInput,
    outputSchema: CreateOrganizationTeamOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
