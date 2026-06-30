import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsApprovalsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/approvals/",
    }),
  );
export type AgentApplicationsApprovalsListInput =
  typeof AgentApplicationsApprovalsListInput.Type;

// Output Schema
export const AgentApplicationsApprovalsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        session_id: Schema.String,
        application_id: Schema.String,
        team_id: Schema.Number,
        revision_id: Schema.String,
        turn: Schema.Number,
        tool_call_id: Schema.String,
        tool_name: Schema.String,
        proposed_args: Schema.Record(Schema.String, Schema.Unknown),
        decided_args: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        assistant_message: Schema.Record(Schema.String, Schema.Unknown),
        approver_scope: Schema.Record(Schema.String, Schema.Unknown),
        state: Schema.Literals([
          "queued",
          "approving",
          "dispatched",
          "dispatched_failed",
          "rejected",
          "expired",
        ]),
        decision_by: Schema.NullOr(Schema.String),
        decision_at: Schema.NullOr(Schema.String),
        decision_reason: Schema.NullOr(Schema.String),
        dispatch_outcome: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        created_at: Schema.String,
        expires_at: Schema.String,
      }),
    ),
  });
export type AgentApplicationsApprovalsListOutput =
  typeof AgentApplicationsApprovalsListOutput.Type;

// The operation
/**
 * List approval-gated tool requests for this application. Team-admin
 * only (per plan §6.1). Default returns all states — pass `?state=queued`
 * for the inbox view.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param state - Filter by approval state. Comma-separated list accepted. Valid values: queued, approving, dispatched, dispatched_failed, rejected, expired. Defaults to all states.
 */
export const agentApplicationsApprovalsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsApprovalsListInput,
    outputSchema: AgentApplicationsApprovalsListOutput,
  }));
