import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const IntegrationsGithubOauthAuthorizeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    installation_id: Schema.optional(Schema.String),
    next: Schema.optional(Schema.String),
    connect_from: Schema.optional(Schema.Literals(["posthog_code"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/github/oauth_authorize/",
    }),
  );
export type IntegrationsGithubOauthAuthorizeCreateInput =
  typeof IntegrationsGithubOauthAuthorizeCreateInput.Type;

// Output Schema
export const IntegrationsGithubOauthAuthorizeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth_url: Schema.String,
  });
export type IntegrationsGithubOauthAuthorizeCreateOutput =
  typeof IntegrationsGithubOauthAuthorizeCreateOutput.Type;

// The operation
/**
 * Mint a User OAuth URL to bootstrap a fresh `code` when the install flow returns without one.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGithubOauthAuthorizeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubOauthAuthorizeCreateInput,
    outputSchema: IntegrationsGithubOauthAuthorizeCreateOutput,
  }));
