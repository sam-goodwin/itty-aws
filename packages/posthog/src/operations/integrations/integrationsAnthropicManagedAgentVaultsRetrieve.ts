import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface IntegrationsAnthropicManagedAgentVaultsRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsAnthropicManagedAgentVaultsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/anthropic_managed_agent_vaults/",
    }),
  ) as unknown as Schema.Codec<IntegrationsAnthropicManagedAgentVaultsRetrieveInput>;

// Output Schema
export type IntegrationsAnthropicManagedAgentVaultsRetrieveOutput = void;
export const IntegrationsAnthropicManagedAgentVaultsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsAnthropicManagedAgentVaultsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsAnthropicManagedAgentVaultsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsAnthropicManagedAgentVaultsRetrieveInput,
    outputSchema: IntegrationsAnthropicManagedAgentVaultsRetrieveOutput,
  }));
