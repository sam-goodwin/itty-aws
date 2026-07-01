import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsSessionLogsInput {
  id: string;
  project_id: string;
  session_id: string;
  after?: string;
  before?: string;
  instance_id?: string;
  level?: string;
  limit?: number;
  search?: string;
}
export const AgentApplicationsSessionLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String.pipe(T.PathParam()),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
    instance_id: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/sessions/{session_id}/logs/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsSessionLogsInput>;

// Output Schema
export interface AgentApplicationsSessionLogsOutput {
  results: {
    log_source_id: string;
    instance_id: string;
    timestamp: string;
    level: string;
    message: string;
  }[];
}
export const AgentApplicationsSessionLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        log_source_id: Schema.String,
        instance_id: Schema.String,
        timestamp: Schema.String,
        level: Schema.String,
        message: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<AgentApplicationsSessionLogsOutput>;

// The operation
/**
 * Read the runner's structured event log for one session from
 * ClickHouse. Filters (limit / after / before / level / search)
 * match the shared `LogEntryMixin` helper used by hog_function +
 * hog_flow.
 *
 * @param after - Only return entries after this ISO 8601 timestamp.
 * @param before - Only return entries before this ISO 8601 timestamp.
 * @param id - A UUID string identifying this agent application.
 * @param instance_id - Filter logs to a specific execution instance.
 * @param level - Comma-separated log levels to include, e.g. 'WARN,ERROR'. Valid levels: DEBUG, LOG, INFO, WARN, ERROR.
 * @param limit - Maximum number of log entries to return (1-500, default 50).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Case-insensitive substring search across log messages.
 * @param session_id - UUID of the session whose logs to fetch.
 */
export const agentApplicationsSessionLogs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsSessionLogsInput,
    outputSchema: AgentApplicationsSessionLogsOutput,
  }));
