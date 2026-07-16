import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsProxyCreateInput {
  id: string;
  project_id: string;
  template_id?: string | null;
  name?: string;
  icon_key?: string;
  display_name?: string;
  url?: string;
  description?: string;
  auth_type?: "api_key" | "oauth";
  is_enabled?: boolean;
  needs_reauth?: boolean;
  pending_oauth?: boolean;
  proxy_url?: string;
  tool_count?: number;
  created_at?: string;
  updated_at?: string | null;
}
export const McpServerInstallationsProxyCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/api/projects/{project_id}/mcp_server_installations/{id}/proxy/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsProxyCreateInput>;

// Output Schema
export type McpServerInstallationsProxyCreateOutput = void;
export const McpServerInstallationsProxyCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<McpServerInstallationsProxyCreateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsProxyCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsProxyCreateInput,
    outputSchema: McpServerInstallationsProxyCreateOutput,
  }));
