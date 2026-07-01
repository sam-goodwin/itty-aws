import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsSessionsToolCallsInput {
  id: string;
  project_id: string;
  date_from?: string;
  limit?: number;
  offset?: number;
}
export const McpAnalyticsSessionsToolCallsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_analytics/sessions/{id}/tool_calls/",
    }),
  ) as unknown as Schema.Codec<McpAnalyticsSessionsToolCallsInput>;

// Output Schema
export interface McpAnalyticsSessionsToolCallsOutput {
  results: {
    event_id: string;
    timestamp: string;
    tool_name: string;
    intent: string;
    is_error: boolean;
    error_message: string;
    duration_ms: number | null;
  }[];
  has_next: boolean;
}
export const McpAnalyticsSessionsToolCallsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        event_id: Schema.String,
        timestamp: Schema.String,
        tool_name: Schema.String,
        intent: Schema.String,
        is_error: Schema.Boolean,
        error_message: Schema.String,
        duration_ms: Schema.NullOr(Schema.Number),
      }),
    ),
    has_next: Schema.Boolean,
  }) as unknown as Schema.Codec<McpAnalyticsSessionsToolCallsOutput>;

// The operation
/**
 * List all $mcp_tool_call events that belong to a given $session_id, in chronological order.
 *
 * @param date_from - Absolute ISO timestamp lower bound for the event scan — pass the session's start so older sessions resolve. Defaults to a 7-day lookback when omitted.
 * @param id - A UUID string identifying this mcp analytics submission.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsSessionsToolCalls =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpAnalyticsSessionsToolCallsInput,
    outputSchema: McpAnalyticsSessionsToolCallsOutput,
  }));
