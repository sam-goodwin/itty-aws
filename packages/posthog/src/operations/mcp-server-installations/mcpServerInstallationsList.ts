import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const McpServerInstallationsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_server_installations/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsListInput>;

// Output Schema
export interface McpServerInstallationsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const McpServerInstallationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<McpServerInstallationsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: McpServerInstallationsListInput,
  outputSchema: McpServerInstallationsListOutput,
}));
