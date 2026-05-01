import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingGitProviderFileLinksResolveGithubRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    code_sample: Schema.String,
    file_name: Schema.String,
    owner: Schema.String,
    repository: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/git-provider-file-links/resolve_github/",
    }),
  );
export type ErrorTrackingGitProviderFileLinksResolveGithubRetrieveInput =
  typeof ErrorTrackingGitProviderFileLinksResolveGithubRetrieveInput.Type;

// Output Schema
export const ErrorTrackingGitProviderFileLinksResolveGithubRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    found: Schema.optional(Schema.Boolean),
    url: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  });
export type ErrorTrackingGitProviderFileLinksResolveGithubRetrieveOutput =
  typeof ErrorTrackingGitProviderFileLinksResolveGithubRetrieveOutput.Type;

// The operation
/**
 *
 * @param code_sample - Code snippet to search for in repository files.
 * @param file_name - File name to match in search results.
 * @param owner - Repository owner or namespace.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repository - Repository name.
 */
export const errorTrackingGitProviderFileLinksResolveGithubRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGitProviderFileLinksResolveGithubRetrieveInput,
    outputSchema: ErrorTrackingGitProviderFileLinksResolveGithubRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
