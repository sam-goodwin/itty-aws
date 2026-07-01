import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsApprovalsDecideInput {
  approval_id: string;
  id: string;
  project_id: string;
  decision: "approve" | "reject";
  edited_args?: Record<string, unknown>;
  reason?: string;
}
export const AgentApplicationsApprovalsDecideInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approval_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    decision: Schema.Literals(["approve", "reject"]),
    edited_args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    reason: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{id}/approvals/{approval_id}/decide/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsApprovalsDecideInput>;

// Output Schema
export interface AgentApplicationsApprovalsDecideOutput {
  ok: boolean;
  state: string;
}
export const AgentApplicationsApprovalsDecideOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ok: Schema.Boolean,
    state: Schema.String,
  }) as unknown as Schema.Codec<AgentApplicationsApprovalsDecideOutput>;

// The operation
/**
 * Approve or reject a queued `agent`-type tool-approval request.
 * This is the OWNER decision surface — the only PostHog-authoritative one:
 * team admins decide here, in the console. `principal`-type approvals are
 * decided by the session principal at the ingress decision API, not here.
 * The runtime side runs the tool platform-side on approve and wakes the
 * session with a synthetic tool_result either way.
 *
 * @param approval_id - UUID of the approval request to decide.
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsApprovalsDecide =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsApprovalsDecideInput,
    outputSchema: AgentApplicationsApprovalsDecideOutput,
  }));
