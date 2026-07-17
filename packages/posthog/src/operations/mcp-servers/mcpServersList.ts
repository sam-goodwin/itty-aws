import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServersListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const McpServersListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/mcp_servers/" }),
) as unknown as Schema.Codec<McpServersListInput>;

// Output Schema
export interface McpServersListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    url?: string;
    docs_url?: string;
    description?: string;
    auth_type?: "api_key" | "oauth";
    icon_key?: string;
    category?:
      | "business"
      | "data"
      | "design"
      | "dev"
      | "infra"
      | "productivity";
  }[];
}
export const McpServersListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        docs_url: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
        icon_key: Schema.optional(Schema.String),
        category: Schema.optional(
          Schema.Literals([
            "business",
            "data",
            "design",
            "dev",
            "infra",
            "productivity",
          ]),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<McpServersListOutput>;

// The operation
/**
 * Lists curated MCP server templates that users can install with one click.
 * Templates are seeded by PostHog operators and carry shared, encrypted
 * OAuth client credentials. Inactive templates are hidden from the catalog.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: McpServersListInput,
  outputSchema: McpServersListOutput,
}));
