import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersIntegrationsGithubReposRefreshCreateInput {
  installation_id: string;
  uuid: string;
}
export const UsersIntegrationsGithubReposRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/integrations/github/{installation_id}/repos/refresh/",
    }),
  ) as unknown as Schema.Codec<UsersIntegrationsGithubReposRefreshCreateInput>;

// Output Schema
export interface UsersIntegrationsGithubReposRefreshCreateOutput {
  repositories?: { id?: number; name?: string; full_name?: string }[];
}
export const UsersIntegrationsGithubReposRefreshCreateOutput =
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
  }) as unknown as Schema.Codec<UsersIntegrationsGithubReposRefreshCreateOutput>;

// The operation
/**
 * Refresh repositories for a personal GitHub installation
 *
 * Refresh repositories accessible to a specific GitHub installation.
 */
export const usersIntegrationsGithubReposRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersIntegrationsGithubReposRefreshCreateInput,
    outputSchema: UsersIntegrationsGithubReposRefreshCreateOutput,
  }));
