import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentFleetLiveSessionsInput {
  project_id: string;
  limit?: number;
}
export const AgentFleetLiveSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_fleet/live_sessions/",
    }),
  ) as unknown as Schema.Codec<AgentFleetLiveSessionsInput>;

// Output Schema
export interface AgentFleetLiveSessionsOutput {
  results: {
    usage_total: {
      tokens_in: number;
      tokens_out: number;
      cache_read: number;
      cache_write: number;
      cost_input: number;
      cost_output: number;
      cost_cache_read: number;
      cost_cache_write: number;
      cost_total: number;
    };
    principal: {
      kind: "anonymous" | "service" | "internal" | "shared_secret" | "slack";
      id?: string;
      team_id?: number;
    } | null;
    id: string;
    application_id: string;
    revision_id: string;
    team_id: number;
    state:
      | "queued"
      | "running"
      | "completed"
      | "closed"
      | "cancelled"
      | "failed";
    external_key: string | null;
    trigger_metadata?: Record<string, unknown> | null;
    turns: number;
    preview: string | null;
    created_at: string;
    updated_at: string;
  }[];
}
export const AgentFleetLiveSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        usage_total: Schema.Struct({
          tokens_in: Schema.Number,
          tokens_out: Schema.Number,
          cache_read: Schema.Number,
          cache_write: Schema.Number,
          cost_input: Schema.Number,
          cost_output: Schema.Number,
          cost_cache_read: Schema.Number,
          cost_cache_write: Schema.Number,
          cost_total: Schema.Number,
        }),
        principal: Schema.NullOr(
          Schema.Struct({
            kind: Schema.Literals([
              "anonymous",
              "service",
              "internal",
              "shared_secret",
              "slack",
            ]),
            id: Schema.optional(Schema.String),
            team_id: Schema.optional(Schema.Number),
          }),
        ),
        id: Schema.String,
        application_id: Schema.String,
        revision_id: Schema.String,
        team_id: Schema.Number,
        state: Schema.Literals([
          "queued",
          "running",
          "completed",
          "closed",
          "cancelled",
          "failed",
        ]),
        external_key: Schema.NullOr(Schema.String),
        trigger_metadata: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        turns: Schema.Number,
        preview: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<AgentFleetLiveSessionsOutput>;

// The operation
/**
 * Live (non-terminal) sessions across every agent owned by this team, newest activity first.
 *
 * @param limit - Cap on returned sessions (default 100, max 500).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentFleetLiveSessions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentFleetLiveSessionsInput,
    outputSchema: AgentFleetLiveSessionsOutput,
  }),
);
