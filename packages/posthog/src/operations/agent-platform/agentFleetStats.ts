import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentFleetStatsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  since: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/agent_fleet/stats/",
  }),
);
export type AgentFleetStatsInput = typeof AgentFleetStatsInput.Type;

// Output Schema
export const AgentFleetStatsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  liveCount: Schema.Number,
  sessionsInWindowCount: Schema.Number,
  spendInWindowUsd: Schema.Number,
  lastActivityAt: Schema.NullOr(Schema.String),
  failedInWindowCount: Schema.Number,
  pendingApprovalsCount: Schema.Number,
});
export type AgentFleetStatsOutput = typeof AgentFleetStatsOutput.Type;

// The operation
/**
 * Roll-up stats across every agent owned by this team.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param since - ISO datetime — counts spend + session totals from this point forward. Defaults to 24h ago.
 */
export const agentFleetStats = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentFleetStatsInput,
  outputSchema: AgentFleetStatsOutput,
}));
