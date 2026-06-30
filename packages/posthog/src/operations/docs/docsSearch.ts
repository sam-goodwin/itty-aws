import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DocsSearchInput {
  project_id: string;
  query: string;
}
export const DocsSearchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  query: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/projects/{project_id}/mcp_tools/docs_search/",
  }),
) as unknown as Schema.Codec<DocsSearchInput>;

// Output Schema
export interface DocsSearchOutput {
  content: string;
}
export const DocsSearchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.String,
}) as unknown as Schema.Codec<DocsSearchOutput>;

// The operation
/**
 * Search PostHog documentation
 *
 * Run a hybrid (semantic + full-text) RAG search over the PostHog documentation via Inkeep. Returns a markdown body with title, URL, and excerpt for each match for the agent to cite back to the user.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const docsSearch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DocsSearchInput,
  outputSchema: DocsSearchOutput,
}));
