import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsStatsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    since: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/stats/",
    }),
  );
export type AgentApplicationsStatsInput =
  typeof AgentApplicationsStatsInput.Type;

// Output Schema
export const AgentApplicationsStatsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liveCount: Schema.Number,
    sessionsInWindowCount: Schema.Number,
    spendInWindowUsd: Schema.Number,
    lastActivityAt: Schema.NullOr(Schema.String),
    failedInWindowCount: Schema.Number,
    pendingApprovalsCount: Schema.Number,
  });
export type AgentApplicationsStatsOutput =
  typeof AgentApplicationsStatsOutput.Type;

// The operation
/**
 * Roll-up stats for the agent — drives the agent-detail overview tiles.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param since - ISO datetime — counts spend + session totals from this point forward. Defaults to 24h ago.
 */
export const agentApplicationsStats = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsStatsInput,
    outputSchema: AgentApplicationsStatsOutput,
  }),
);
