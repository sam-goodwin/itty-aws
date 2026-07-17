import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface IntegrationsGithubOauthAuthorizeCreateInput {
  project_id: string;
  installation_id?: string;
  next?: string;
  connect_from?: "posthog_code";
}
export const IntegrationsGithubOauthAuthorizeCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    installation_id: Schema.optional(Schema.String),
    next: Schema.optional(Schema.String),
    connect_from: Schema.optional(Schema.Literals(["posthog_code"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/github/oauth_authorize/",
    }),
  ) as unknown as Schema.Codec<IntegrationsGithubOauthAuthorizeCreateInput>;

// Output Schema
export interface IntegrationsGithubOauthAuthorizeCreateOutput {
  oauth_url: string;
}
export const IntegrationsGithubOauthAuthorizeCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    oauth_url: Schema.String,
  }) as unknown as Schema.Codec<IntegrationsGithubOauthAuthorizeCreateOutput>;

// The operation
/**
 * Mint a User OAuth URL to bootstrap a fresh `code` when the install flow returns without one.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGithubOauthAuthorizeCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubOauthAuthorizeCreateInput,
    outputSchema: IntegrationsGithubOauthAuthorizeCreateOutput,
  }));
