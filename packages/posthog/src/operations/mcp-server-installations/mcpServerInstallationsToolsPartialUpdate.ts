import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsToolsPartialUpdateInput {
  id: string;
  project_id: string;
  tool_name: string;
  approval_state?: "approved" | "needs_approval" | "do_not_use";
}
export const McpServerInstallationsToolsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    tool_name: Schema.String.pipe(T.PathParam()),
    approval_state: Schema.optional(
      Schema.Literals(["approved", "needs_approval", "do_not_use"]),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/mcp_server_installations/{id}/tools/{tool_name}/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsToolsPartialUpdateInput>;

// Output Schema
export interface McpServerInstallationsToolsPartialUpdateOutput {
  id?: string;
  tool_name?: string;
  display_name?: string;
  description?: string;
  input_schema?: unknown;
  approval_state?: "approved" | "needs_approval" | "do_not_use";
  last_seen_at?: string;
  removed_at?: string | null;
  created_at?: string;
  updated_at?: string | null;
}
export const McpServerInstallationsToolsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    tool_name: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    input_schema: Schema.optional(Schema.Unknown),
    approval_state: Schema.optional(
      Schema.Literals(["approved", "needs_approval", "do_not_use"]),
    ),
    last_seen_at: Schema.optional(Schema.String),
    removed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<McpServerInstallationsToolsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsToolsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsToolsPartialUpdateInput,
    outputSchema: McpServerInstallationsToolsPartialUpdateOutput,
  }));
