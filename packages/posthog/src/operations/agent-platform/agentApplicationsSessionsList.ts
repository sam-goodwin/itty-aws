import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsSessionsListInput {
  id: string;
  project_id: string;
  created_after?: string;
  created_before?: string;
  limit?: number;
  offset?: number;
  revision_id?: string;
  state?: string;
}
export const AgentApplicationsSessionsListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_after: Schema.optional(Schema.String),
    created_before: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    revision_id: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/sessions/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsSessionsListInput>;

// Output Schema
export interface AgentApplicationsSessionsListOutput {
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
    retry_count: number;
    created_at: string;
    updated_at: string;
  }[];
  count: number;
}
export const AgentApplicationsSessionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
        retry_count: Schema.Number,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    count: Schema.Number,
  }) as unknown as Schema.Codec<AgentApplicationsSessionsListOutput>;

// The operation
/**
 * List sessions for this application, newest first. Strips the
 * conversation transcript from each summary, but includes a `preview`
 * (last assistant text, ~120 chars) and `usage_total` (token + cost
 * aggregate). Use `agent-applications-sessions-retrieve` for the full
 * transcript of a single session.
 *
 * @param created_after - ISO datetime — return sessions with created_at >= this.
 * @param created_before - ISO datetime — return sessions with created_at <= this.
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param revision_id - Only return sessions started against this specific revision.
 * @param state - Filter by session state. Comma-separated list accepted (e.g. `completed,failed`). Valid values: queued, running, completed, closed, cancelled, failed.
 */
export const agentApplicationsSessionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsSessionsListInput,
    outputSchema: AgentApplicationsSessionsListOutput,
  }));
