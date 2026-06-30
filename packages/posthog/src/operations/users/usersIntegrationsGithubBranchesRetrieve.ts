import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersIntegrationsGithubBranchesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    repo: Schema.String,
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/users/{uuid}/integrations/github/{installation_id}/branches/",
    }),
  );
export type UsersIntegrationsGithubBranchesRetrieveInput =
  typeof UsersIntegrationsGithubBranchesRetrieveInput.Type;

// Output Schema
export const UsersIntegrationsGithubBranchesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branches: Schema.optional(Schema.Array(Schema.String)),
    default_branch: Schema.optional(Schema.NullOr(Schema.String)),
    has_more: Schema.optional(Schema.Boolean),
  });
export type UsersIntegrationsGithubBranchesRetrieveOutput =
  typeof UsersIntegrationsGithubBranchesRetrieveOutput.Type;

// The operation
/**
 * List branches for a personal GitHub installation repository
 *
 * List branches for a repository accessible to a personal GitHub installation.
 *
 * @param limit - Maximum number of branches to return
 * @param offset - Number of branches to skip
 * @param repo - Repository in owner/repo format
 * @param search - Optional case-insensitive branch name search query.
 */
export const usersIntegrationsGithubBranchesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsGithubBranchesRetrieveInput,
    outputSchema: UsersIntegrationsGithubBranchesRetrieveOutput,
  }));
