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
export interface ListOrganizationTeamsInput {
  organization: string;
  q?: string;
  page?: number;
  per_page?: number;
}
export const ListOrganizationTeamsInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    q: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/{organization}/teams" }),
  ) as unknown as Schema.Codec<ListOrganizationTeamsInput>;

// Output Schema
export interface ListOrganizationTeamsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    display_name: string;
    creator: { id: string; display_name: string; avatar_url: string };
    members: {
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
    }[];
    databases: {
      id: string;
      name: string;
      url: string;
      branches_url: string;
    }[];
    analyst_databases: {
      id: string;
      name: string;
      url: string;
      branches_url: string;
    }[];
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
    description: string | null;
    managed: boolean;
  }[];
}
export const ListOrganizationTeamsOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<ListOrganizationTeamsOutput>;

// The operation
/**
 * List teams in an organization
 *
 * @param organization - The name of the organization
 * @param q - Search term to filter teams by name
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listOrganizationTeams =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListOrganizationTeamsInput,
    outputSchema: ListOrganizationTeamsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
