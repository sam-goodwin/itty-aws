import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const IntegrationsGithubPrepareCallbackCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    next: Schema.optional(Schema.String),
    installation_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/github/prepare_callback/",
    }),
  );
export type IntegrationsGithubPrepareCallbackCreateInput =
  typeof IntegrationsGithubPrepareCallbackCreateInput.Type;

// Output Schema
export const IntegrationsGithubPrepareCallbackCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsGithubPrepareCallbackCreateOutput =
  typeof IntegrationsGithubPrepareCallbackCreateOutput.Type;

// The operation
/**
 * Seed GitHub setup callback state without redirecting to GitHub.
 * Used when the user opens an existing installation's settings on github.com (e.g. PostHog
 * Code "Update in GitHub") so the subsequent Setup URL redirect can be validated.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGithubPrepareCallbackCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubPrepareCallbackCreateInput,
    outputSchema: IntegrationsGithubPrepareCallbackCreateOutput,
  }));
