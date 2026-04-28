import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsGithubReposRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/github_repos/",
    }),
  );
export type IntegrationsGithubReposRetrieveInput =
  typeof IntegrationsGithubReposRetrieveInput.Type;

// Output Schema
export const IntegrationsGithubReposRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        full_name: Schema.String,
      }),
    ),
    has_more: Schema.Boolean,
  });
export type IntegrationsGithubReposRetrieveOutput =
  typeof IntegrationsGithubReposRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param limit - Maximum number of repositories to return per request (max 500).
 * @param offset - Number of repositories to skip before returning results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional case-insensitive repository name search query.
 */
export const integrationsGithubReposRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubReposRetrieveInput,
    outputSchema: IntegrationsGithubReposRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
