import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpToolsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  tool_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/environments/{project_id}/mcp_tools/{tool_name}/",
  }),
);
export type McpToolsCreateInput = typeof McpToolsCreateInput.Type;

// Output Schema
export const McpToolsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
);
export type McpToolsCreateOutput = typeof McpToolsCreateOutput.Type;

// The operation
/**
 * Invoke an MCP tool by name.
 * This endpoint allows MCP callers to invoke Max AI tools directly
 * without going through the full LangChain conversation flow.
 * Scopes are resolved dynamically per tool via dangerously_get_required_scopes.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpToolsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: McpToolsCreateInput,
  outputSchema: McpToolsCreateOutput,
  errors: [Forbidden, NotFound] as const,
}));
