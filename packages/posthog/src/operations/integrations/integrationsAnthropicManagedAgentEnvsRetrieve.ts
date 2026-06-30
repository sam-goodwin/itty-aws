import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const IntegrationsAnthropicManagedAgentEnvsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/anthropic_managed_agent_environments/",
    }),
  );
export type IntegrationsAnthropicManagedAgentEnvsRetrieveInput =
  typeof IntegrationsAnthropicManagedAgentEnvsRetrieveInput.Type;

// Output Schema
export const IntegrationsAnthropicManagedAgentEnvsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsAnthropicManagedAgentEnvsRetrieveOutput =
  typeof IntegrationsAnthropicManagedAgentEnvsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsAnthropicManagedAgentEnvsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsAnthropicManagedAgentEnvsRetrieveInput,
    outputSchema: IntegrationsAnthropicManagedAgentEnvsRetrieveOutput,
  }));
