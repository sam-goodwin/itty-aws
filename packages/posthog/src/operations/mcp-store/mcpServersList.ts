import * as Schema from "effect/Schema";
import { MCPServerTemplateSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/mcp_servers/",
  }),
);
export type McpServersListInput = typeof McpServersListInput.Type;

// Output Schema
export const McpServersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => MCPServerTemplateSchema)),
  ),
});
export type McpServersListOutput = typeof McpServersListOutput.Type;

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
export const mcpServersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: McpServersListInput,
  outputSchema: McpServersListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
