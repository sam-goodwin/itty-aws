import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface IntegrationsAnthropicManagedAgentsRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsAnthropicManagedAgentsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/anthropic_managed_agents/",
    }),
  ) as unknown as Schema.Codec<IntegrationsAnthropicManagedAgentsRetrieveInput>;

// Output Schema
export type IntegrationsAnthropicManagedAgentsRetrieveOutput = void;
export const IntegrationsAnthropicManagedAgentsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsAnthropicManagedAgentsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsAnthropicManagedAgentsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsAnthropicManagedAgentsRetrieveInput,
    outputSchema: IntegrationsAnthropicManagedAgentsRetrieveOutput,
  }));
