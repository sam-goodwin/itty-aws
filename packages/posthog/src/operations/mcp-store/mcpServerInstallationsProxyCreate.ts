import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServerInstallationsProxyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      path: "/api/environments/{project_id}/mcp_server_installations/{id}/proxy/",
    }),
  );
export type McpServerInstallationsProxyCreateInput =
  typeof McpServerInstallationsProxyCreateInput.Type;

// Output Schema
export const McpServerInstallationsProxyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type McpServerInstallationsProxyCreateOutput =
  typeof McpServerInstallationsProxyCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsProxyCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsProxyCreateInput,
    outputSchema: McpServerInstallationsProxyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
