import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsRetrieveInput {
  id: string;
  project_id: string;
}
export const McpServerInstallationsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_server_installations/{id}/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsRetrieveInput>;

// Output Schema
export interface McpServerInstallationsRetrieveOutput {
  id?: string;
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
export const McpServerInstallationsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<McpServerInstallationsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsRetrieveInput,
    outputSchema: McpServerInstallationsRetrieveOutput,
  }));
