import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeDocumentsWindowListInput {
  id: string;
  project_id: string;
  around_ordinal: number;
  radius?: number;
}
export const BusinessKnowledgeDocumentsWindowListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    around_ordinal: Schema.Number,
    radius: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/business_knowledge/documents/{id}/window/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeDocumentsWindowListInput>;

// Output Schema
export type BusinessKnowledgeDocumentsWindowListOutput = {
  chunk_id: string;
  ordinal: number;
  content: string;
  heading_path: string;
  source_name: string;
  document_title: string;
}[];
export const BusinessKnowledgeDocumentsWindowListOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      chunk_id: Schema.String,
      ordinal: Schema.Number,
      content: Schema.String,
      heading_path: Schema.String,
      source_name: Schema.String,
      document_title: Schema.String,
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeDocumentsWindowListOutput>;

// The operation
/**
 * Read-only access to parsed knowledge documents. Exposes hybrid search
 * (``search``) and a drill-down window (``window``) so an agent (PHAI or
 * MCP) can find and explore business knowledge chunks.
 *
 * @param around_ordinal - Zero-based chunk ordinal to center the window on (from a search result).
 * @param id - A UUID string identifying this knowledge document.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param radius - Number of chunks before and after the center to include. Defaults to 5, clamped to [0, 15].
 */
export const businessKnowledgeDocumentsWindowList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeDocumentsWindowListInput,
    outputSchema: BusinessKnowledgeDocumentsWindowListOutput,
  }));
