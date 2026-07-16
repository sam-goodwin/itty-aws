import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsSessionsListInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
  limit?: number;
  offset?: number;
  order_by?: string;
  search?: string;
}
export const McpAnalyticsSessionsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_analytics/sessions/",
    }),
  ) as unknown as Schema.Codec<McpAnalyticsSessionsListInput>;

// Output Schema
export interface McpAnalyticsSessionsListOutput {
  results: {
    session_id: string;
    tool_calls: number;
    session_start: string;
    session_end: string;
    distinct_id_count: number;
    tools_used: string[];
    mcp_client_name: string;
    distinct_id: string;
    person_email: string;
    person_name: string;
    intent: string;
  }[];
  has_next: boolean;
}
export const McpAnalyticsSessionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        session_id: Schema.String,
        tool_calls: Schema.Number,
        session_start: Schema.String,
        session_end: Schema.String,
        distinct_id_count: Schema.Number,
        tools_used: Schema.Array(Schema.String),
        mcp_client_name: Schema.String,
        distinct_id: Schema.String,
        person_email: Schema.String,
        person_name: Schema.String,
        intent: Schema.String,
      }),
    ),
    has_next: Schema.Boolean,
  }) as unknown as Schema.Codec<McpAnalyticsSessionsListOutput>;

// The operation
/**
 * List MCP sessions for the current project, derived by grouping $mcp_tool_call events by $mcp_session_id. Ordered by newest session start first by default.
 *
 * @param date_from - Start of the window to aggregate sessions over. PostHog date string — relative (e.g. '-7d', '-24h') or an absolute ISO timestamp. Defaults to '-7d'.
 * @param date_to - End of the window. PostHog date string or absolute ISO timestamp. Defaults to now.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort column. Allowed: session_id, session_start, session_end, duration_seconds, tool_call_count, mcp_client_name, distinct_id. Prefix with '-' for descending. Defaults to '-session_start' (newest sessions first).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Case-insensitive substring filter matched against session_id, distinct_id, mcp_client_name, and tools_used.
 */
export const mcpAnalyticsSessionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: McpAnalyticsSessionsListInput,
  outputSchema: McpAnalyticsSessionsListOutput,
}));
