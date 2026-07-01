import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsDestroyInput {
  id: string;
  project_id: string;
}
export const AgentApplicationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/agent_applications/{id}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsDestroyInput>;

// Output Schema
export type AgentApplicationsDestroyOutput = void;
export const AgentApplicationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsDestroyOutput>;

// The operation
/**
 * Agent applications — the deployable unit of the platform.
 * URLs:
 * GET    /api/projects/<team>/agent_applications/             list
 * POST   /api/projects/<team>/agent_applications/             create
 * GET    /api/projects/<team>/agent_applications/<id|slug>/   retrieve
 * PATCH  /api/projects/<team>/agent_applications/<id|slug>/   update
 * DELETE /api/projects/<team>/agent_applications/<id|slug>/   archive
 * POST   /api/projects/<team>/agent_applications/<id|slug>/set_env/        bulk replace env
 * GET    /api/projects/<team>/agent_applications/<id|slug>/env_keys/        list set keys
 * GET    /api/projects/<team>/agent_applications/<id|slug>/env_keys/<KEY>/  is one key set?
 * PUT    /api/projects/<team>/agent_applications/<id|slug>/env_keys/<KEY>/  set one key
 * DELETE /api/projects/<team>/agent_applications/<id|slug>/env_keys/<KEY>/  clear one key
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDestroyInput,
    outputSchema: AgentApplicationsDestroyOutput,
  }),
);
