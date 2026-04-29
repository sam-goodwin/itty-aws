import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
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
      path: "/api/environments/{project_id}/mcp_server_installations/{id}/tools/{tool_name}/",
    }),
  );
export type McpServerInstallationsToolsPartialUpdateInput =
  typeof McpServerInstallationsToolsPartialUpdateInput.Type;

// Output Schema
export const McpServerInstallationsToolsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    tool_name: Schema.String,
    display_name: Schema.String,
    description: Schema.String,
    input_schema: Schema.Unknown,
    approval_state: Schema.optional(
      Schema.Literals(["approved", "needs_approval", "do_not_use"]),
    ),
    last_seen_at: Schema.String,
    removed_at: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  });
export type McpServerInstallationsToolsPartialUpdateOutput =
  typeof McpServerInstallationsToolsPartialUpdateOutput.Type;

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
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
