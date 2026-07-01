import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsGithubBranchesRetrieveInput {
  id: number;
  project_id: string;
  limit?: number;
  offset?: number;
  repo: string;
  search?: string;
}
export const IntegrationsGithubBranchesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    repo: Schema.String,
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/github_branches/",
    }),
  ) as unknown as Schema.Codec<IntegrationsGithubBranchesRetrieveInput>;

// Output Schema
export interface IntegrationsGithubBranchesRetrieveOutput {
  branches?: string[];
  default_branch?: string | null;
  has_more?: boolean;
}
export const IntegrationsGithubBranchesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branches: Schema.optional(Schema.Array(Schema.String)),
    default_branch: Schema.optional(Schema.NullOr(Schema.String)),
    has_more: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<IntegrationsGithubBranchesRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param limit - Maximum number of branches to return
 * @param offset - Number of branches to skip
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - Repository in owner/repo format
 * @param search - Optional case-insensitive branch name search query.
 */
export const integrationsGithubBranchesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubBranchesRetrieveInput,
    outputSchema: IntegrationsGithubBranchesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
