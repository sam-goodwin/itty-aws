import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface IntegrationsGithubPrepareCallbackCreateInput {
  project_id: string;
  next?: string;
  installation_id?: string;
}
export const IntegrationsGithubPrepareCallbackCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    next: Schema.optional(Schema.String),
    installation_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/github/prepare_callback/",
    }),
  ) as unknown as Schema.Codec<IntegrationsGithubPrepareCallbackCreateInput>;

// Output Schema
export type IntegrationsGithubPrepareCallbackCreateOutput = void;
export const IntegrationsGithubPrepareCallbackCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsGithubPrepareCallbackCreateOutput>;

// The operation
/**
 * Seed GitHub setup callback state without redirecting to GitHub.
 * Used when the user opens an existing installation's settings on github.com (e.g. PostHog
 * Code "Update in GitHub") so the subsequent Setup URL redirect can be validated.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGithubPrepareCallbackCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGithubPrepareCallbackCreateInput,
    outputSchema: IntegrationsGithubPrepareCallbackCreateOutput,
  }));
