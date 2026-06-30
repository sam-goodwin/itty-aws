import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersIntegrationsGithubReposRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/users/{uuid}/integrations/github/{installation_id}/repos/",
    }),
  );
export type UsersIntegrationsGithubReposRetrieveInput =
  typeof UsersIntegrationsGithubReposRetrieveInput.Type;

// Output Schema
export const UsersIntegrationsGithubReposRetrieveOutput =
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
    has_more: Schema.optional(Schema.Boolean),
  });
export type UsersIntegrationsGithubReposRetrieveOutput =
  typeof UsersIntegrationsGithubReposRetrieveOutput.Type;

// The operation
/**
 * List repositories for a personal GitHub installation
 *
 * List repositories accessible to a specific GitHub installation (paginated, cached).
 *
 * @param limit - Maximum number of repositories to return per request (max 500).
 * @param offset - Number of repositories to skip before returning results.
 * @param search - Optional case-insensitive repository name search query.
 */
export const usersIntegrationsGithubReposRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsGithubReposRetrieveInput,
    outputSchema: UsersIntegrationsGithubReposRetrieveOutput,
  }));
