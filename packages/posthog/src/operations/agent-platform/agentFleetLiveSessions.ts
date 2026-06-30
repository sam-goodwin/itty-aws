import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentFleetLiveSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_fleet/live_sessions/",
    }),
  );
export type AgentFleetLiveSessionsInput =
  typeof AgentFleetLiveSessionsInput.Type;

// Output Schema
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
        principal: Schema.Unknown,
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
  });
export type AgentFleetLiveSessionsOutput =
  typeof AgentFleetLiveSessionsOutput.Type;

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
