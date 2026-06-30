import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsApprovalsRetrieveInput {
  approval_id: string;
  id: string;
  project_id: string;
}
export const AgentApplicationsApprovalsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approval_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/approvals/{approval_id}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsApprovalsRetrieveInput>;

// Output Schema
export type AgentApplicationsApprovalsRetrieveOutput = void;
export const AgentApplicationsApprovalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsApprovalsRetrieveOutput>;

// The operation
/**
 * Single approval request — full proposed args, assistant snapshot,
 * decision metadata, dispatch outcome. Team-admin only (plan §6.1).
 *
 * @param approval_id - UUID of the approval request (must belong to this application).
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsApprovalsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsApprovalsRetrieveInput,
    outputSchema: AgentApplicationsApprovalsRetrieveOutput,
  }));
