import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentFleetStatsInput {
  project_id: string;
  since?: string;
}
export const AgentFleetStatsInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  since: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/agent_fleet/stats/",
  }),
) as unknown as Schema.Codec<AgentFleetStatsInput>;

// Output Schema
export interface AgentFleetStatsOutput {
  liveCount: number;
  sessionsInWindowCount: number;
  spendInWindowUsd: number;
  lastActivityAt: string | null;
  failedInWindowCount: number;
  pendingApprovalsCount: number;
}
export const AgentFleetStatsOutput = /*@__PURE__*/ Schema.Struct({
  liveCount: Schema.Number,
  sessionsInWindowCount: Schema.Number,
  spendInWindowUsd: Schema.Number,
  lastActivityAt: Schema.NullOr(Schema.String),
  failedInWindowCount: Schema.Number,
  pendingApprovalsCount: Schema.Number,
}) as unknown as Schema.Codec<AgentFleetStatsOutput>;

// The operation
/**
 * Roll-up stats across every agent owned by this team.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param since - ISO datetime — counts spend + session totals from this point forward. Defaults to 24h ago.
 */
export const agentFleetStats = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentFleetStatsInput,
  outputSchema: AgentFleetStatsOutput,
}));
