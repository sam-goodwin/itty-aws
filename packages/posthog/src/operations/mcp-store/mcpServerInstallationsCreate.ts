import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const McpServerInstallationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    template_id: Schema.NullOr(Schema.String),
    name: Schema.String,
    icon_key: Schema.String,
    display_name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
    is_enabled: Schema.optional(Schema.Boolean),
    needs_reauth: Schema.Boolean,
    pending_oauth: Schema.Boolean,
    proxy_url: Schema.String,
    tool_count: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/mcp_server_installations/",
    }),
  );
export type McpServerInstallationsCreateInput =
  typeof McpServerInstallationsCreateInput.Type;

// Output Schema
export const McpServerInstallationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    template_id: Schema.NullOr(Schema.String),
    name: Schema.String,
    icon_key: Schema.String,
    display_name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
    is_enabled: Schema.optional(Schema.Boolean),
    needs_reauth: Schema.Boolean,
    pending_oauth: Schema.Boolean,
    proxy_url: Schema.String,
    tool_count: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  });
export type McpServerInstallationsCreateOutput =
  typeof McpServerInstallationsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsCreateInput,
    outputSchema: McpServerInstallationsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
