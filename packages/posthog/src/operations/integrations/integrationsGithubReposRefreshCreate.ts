import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsGithubReposRefreshCreateInput {
  id: number;
  project_id: string;
}
export const IntegrationsGithubReposRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/{id}/github_repos/refresh/",
    }),
  ) as unknown as Schema.Codec<IntegrationsGithubReposRefreshCreateInput>;

// Output Schema
export interface IntegrationsGithubReposRefreshCreateOutput {
  repositories?: { id?: number; name?: string; full_name?: string }[];
}
export const IntegrationsGithubReposRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          full_name: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationsGithubReposRefreshCreateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGithubReposRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubReposRefreshCreateInput,
    outputSchema: IntegrationsGithubReposRefreshCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
