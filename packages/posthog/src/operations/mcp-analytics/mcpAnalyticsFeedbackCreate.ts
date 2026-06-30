import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const McpAnalyticsFeedbackCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attempted_tool: Schema.optional(Schema.String),
    mcp_client_name: Schema.optional(Schema.String),
    mcp_client_version: Schema.optional(Schema.String),
    mcp_protocol_version: Schema.optional(Schema.String),
    mcp_transport: Schema.optional(Schema.String),
    mcp_session_id: Schema.optional(Schema.String),
    mcp_trace_id: Schema.optional(Schema.String),
    goal: Schema.String,
    feedback: Schema.String,
    category: Schema.optional(
      Schema.Literals(["results", "usability", "bug", "docs", "other"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/mcp_analytics/feedback/",
    }),
  );
export type McpAnalyticsFeedbackCreateInput =
  typeof McpAnalyticsFeedbackCreateInput.Type;

// Output Schema
export const McpAnalyticsFeedbackCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type McpAnalyticsFeedbackCreateOutput =
  typeof McpAnalyticsFeedbackCreateOutput.Type;

// The operation
/**
 * Create a new MCP feedback submission for the current project.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsFeedbackCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: McpAnalyticsFeedbackCreateInput,
    outputSchema: McpAnalyticsFeedbackCreateOutput,
  }),
);
