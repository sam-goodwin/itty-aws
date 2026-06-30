import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsMissingCapabilitiesCreateInput {
  project_id: string;
  attempted_tool?: string;
  mcp_client_name?: string;
  mcp_client_version?: string;
  mcp_protocol_version?: string;
  mcp_transport?: string;
  mcp_session_id?: string;
  mcp_trace_id?: string;
  goal: string;
  missing_capability: string;
  blocked?: boolean;
}
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
  ) as unknown as Schema.Codec<McpAnalyticsMissingCapabilitiesCreateInput>;

// Output Schema
export interface McpAnalyticsMissingCapabilitiesCreateOutput {
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
}
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
  }) as unknown as Schema.Codec<McpAnalyticsMissingCapabilitiesCreateOutput>;

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
