import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const McpAnalyticsMissingCapabilitiesCreateInput =
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
    missing_capability: Schema.String,
    blocked: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/mcp_analytics/missing_capabilities/",
    }),
  );
export type McpAnalyticsMissingCapabilitiesCreateInput =
  typeof McpAnalyticsMissingCapabilitiesCreateInput.Type;

// Output Schema
export const McpAnalyticsMissingCapabilitiesCreateOutput =
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
export type McpAnalyticsMissingCapabilitiesCreateOutput =
  typeof McpAnalyticsMissingCapabilitiesCreateOutput.Type;

// The operation
/**
 * Create a new missing capability report for the current project.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsMissingCapabilitiesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpAnalyticsMissingCapabilitiesCreateInput,
    outputSchema: McpAnalyticsMissingCapabilitiesCreateOutput,
  }));
