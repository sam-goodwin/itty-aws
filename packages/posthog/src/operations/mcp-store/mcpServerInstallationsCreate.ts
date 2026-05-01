import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServerInstallationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    icon_key: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
    is_enabled: Schema.optional(Schema.Boolean),
    needs_reauth: Schema.optional(Schema.Boolean),
    pending_oauth: Schema.optional(Schema.Boolean),
    proxy_url: Schema.optional(Schema.String),
    tool_count: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
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
    id: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    icon_key: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
    is_enabled: Schema.optional(Schema.Boolean),
    needs_reauth: Schema.optional(Schema.Boolean),
    pending_oauth: Schema.optional(Schema.Boolean),
    proxy_url: Schema.optional(Schema.String),
    tool_count: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
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
