import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServerInstallationsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/mcp_server_installations/{id}/",
    }),
  );
export type McpServerInstallationsRetrieveInput =
  typeof McpServerInstallationsRetrieveInput.Type;

// Output Schema
export const McpServerInstallationsRetrieveOutput =
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
export type McpServerInstallationsRetrieveOutput =
  typeof McpServerInstallationsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsRetrieveInput,
    outputSchema: McpServerInstallationsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
