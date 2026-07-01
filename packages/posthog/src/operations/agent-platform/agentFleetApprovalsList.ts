import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentFleetApprovalsListInput {
  project_id: string;
  agent_id?: string;
  limit?: number;
  offset?: number;
  state?: string;
}
export const AgentFleetApprovalsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    agent_id: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_fleet/approvals/",
    }),
  ) as unknown as Schema.Codec<AgentFleetApprovalsListInput>;

// Output Schema
export type AgentFleetApprovalsListOutput = void;
export const AgentFleetApprovalsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentFleetApprovalsListOutput>;

// The operation
/**
 * Approval-gated tool requests across every agent in this team. Team-admin only.
 *
 * @param agent_id - Optional agent UUID — narrows the listing to one application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param state - Filter by approval state. Comma-separated list accepted. Valid values: queued, approving, dispatched, dispatched_failed, rejected, expired. Defaults to all states.
 */
export const agentFleetApprovalsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentFleetApprovalsListInput,
    outputSchema: AgentFleetApprovalsListOutput,
  }),
);
