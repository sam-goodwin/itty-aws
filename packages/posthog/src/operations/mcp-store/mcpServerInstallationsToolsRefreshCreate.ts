import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServerInstallationsToolsRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      path: "/api/environments/{project_id}/mcp_server_installations/{id}/tools/refresh/",
    }),
  );
export type McpServerInstallationsToolsRefreshCreateInput =
  typeof McpServerInstallationsToolsRefreshCreateInput.Type;

// Output Schema
export const McpServerInstallationsToolsRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  });
export type McpServerInstallationsToolsRefreshCreateOutput =
  typeof McpServerInstallationsToolsRefreshCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsToolsRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsToolsRefreshCreateInput,
    outputSchema: McpServerInstallationsToolsRefreshCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
