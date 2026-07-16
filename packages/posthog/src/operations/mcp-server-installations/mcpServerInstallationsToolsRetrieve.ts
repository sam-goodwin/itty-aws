import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsToolsRetrieveInput {
  id: string;
  project_id: string;
}
export const McpServerInstallationsToolsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_server_installations/{id}/tools/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsToolsRetrieveInput>;

// Output Schema
export interface McpServerInstallationsToolsRetrieveOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const McpServerInstallationsToolsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<McpServerInstallationsToolsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsToolsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsToolsRetrieveInput,
    outputSchema: McpServerInstallationsToolsRetrieveOutput,
  }));
