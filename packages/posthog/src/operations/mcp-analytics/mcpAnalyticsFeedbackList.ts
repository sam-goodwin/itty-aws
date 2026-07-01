import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsFeedbackListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const McpAnalyticsFeedbackListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_analytics/feedback/",
    }),
  ) as unknown as Schema.Codec<McpAnalyticsFeedbackListInput>;

// Output Schema
export interface McpAnalyticsFeedbackListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    kind: "feedback" | "missing_capability";
    goal: string;
    summary: string;
    category: string;
    blocked: boolean | null;
    attempted_tool: string;
    mcp_client_name: string;
    mcp_client_version: string;
    mcp_protocol_version: string;
    mcp_transport: string;
    mcp_session_id: string;
    mcp_trace_id: string;
    created_at: string;
    updated_at: string;
  }[];
}
export const McpAnalyticsFeedbackListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        kind: Schema.Literals(["feedback", "missing_capability"]),
        goal: Schema.String,
        summary: Schema.String,
        category: Schema.String,
        blocked: Schema.NullOr(Schema.Boolean),
        attempted_tool: Schema.String,
        mcp_client_name: Schema.String,
        mcp_client_version: Schema.String,
        mcp_protocol_version: Schema.String,
        mcp_transport: Schema.String,
        mcp_session_id: Schema.String,
        mcp_trace_id: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<McpAnalyticsFeedbackListOutput>;

// The operation
/**
 * List MCP feedback submissions for the current project, newest first.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsFeedbackList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: McpAnalyticsFeedbackListInput,
    outputSchema: McpAnalyticsFeedbackListOutput,
  }),
);
