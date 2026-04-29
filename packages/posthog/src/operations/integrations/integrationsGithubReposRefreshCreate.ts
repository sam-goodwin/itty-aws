import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsGithubReposRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/{id}/github_repos/refresh/",
    }),
  );
export type IntegrationsGithubReposRefreshCreateInput =
  typeof IntegrationsGithubReposRefreshCreateInput.Type;

// Output Schema
export const IntegrationsGithubReposRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        full_name: Schema.String,
      }),
    ),
  });
export type IntegrationsGithubReposRefreshCreateOutput =
  typeof IntegrationsGithubReposRefreshCreateOutput.Type;

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
