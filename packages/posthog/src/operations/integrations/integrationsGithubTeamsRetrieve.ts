import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface IntegrationsGithubTeamsRetrieveInput {
  id: number;
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const IntegrationsGithubTeamsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/github_teams/",
    }),
  ) as unknown as Schema.Codec<IntegrationsGithubTeamsRetrieveInput>;

// Output Schema
export interface IntegrationsGithubTeamsRetrieveOutput {
  teams: { id: number; slug: string; name: string }[];
  has_more: boolean;
}
export const IntegrationsGithubTeamsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teams: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        slug: Schema.String,
        name: Schema.String,
      }),
    ),
    has_more: Schema.Boolean,
  }) as unknown as Schema.Codec<IntegrationsGithubTeamsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param limit - Maximum number of teams to return per request (max 500).
 * @param offset - Number of teams to skip before returning results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional case-insensitive team name or slug search query.
 */
export const integrationsGithubTeamsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubTeamsRetrieveInput,
    outputSchema: IntegrationsGithubTeamsRetrieveOutput,
  }));
