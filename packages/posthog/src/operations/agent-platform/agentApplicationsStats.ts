import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsStatsInput {
  id: string;
  project_id: string;
  since?: string;
}
export const AgentApplicationsStatsInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    since: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/stats/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsStatsInput>;

// Output Schema
export interface AgentApplicationsStatsOutput {
  liveCount: number;
  sessionsInWindowCount: number;
  spendInWindowUsd: number;
  lastActivityAt: string | null;
  failedInWindowCount: number;
  pendingApprovalsCount: number;
}
export const AgentApplicationsStatsOutput =
  /*@__PURE__*/ Schema.Struct({
    liveCount: Schema.Number,
    sessionsInWindowCount: Schema.Number,
    spendInWindowUsd: Schema.Number,
    lastActivityAt: Schema.NullOr(Schema.String),
    failedInWindowCount: Schema.Number,
    pendingApprovalsCount: Schema.Number,
  }) as unknown as Schema.Codec<AgentApplicationsStatsOutput>;

// The operation
/**
 * Roll-up stats for the agent — drives the agent-detail overview tiles.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param since - ISO datetime — counts spend + session totals from this point forward. Defaults to 24h ago.
 */
export const agentApplicationsStats = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentApplicationsStatsInput,
  outputSchema: AgentApplicationsStatsOutput,
}));
