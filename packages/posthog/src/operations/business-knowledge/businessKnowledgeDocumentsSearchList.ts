import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeDocumentsSearchListInput {
  project_id: string;
  limit?: number;
  query: string;
  rerank?: boolean;
}
export const BusinessKnowledgeDocumentsSearchListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    query: Schema.String,
    rerank: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/business_knowledge/documents/search/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeDocumentsSearchListInput>;

// Output Schema
export type BusinessKnowledgeDocumentsSearchListOutput = {
  chunk_id: string;
  document_id: string;
  ordinal: number;
  source_id: string;
  source_name: string;
  source_type: string;
  document_title: string;
  heading_path: string;
  content: string;
}[];
export const BusinessKnowledgeDocumentsSearchListOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      chunk_id: Schema.String,
      document_id: Schema.String,
      ordinal: Schema.Number,
      source_id: Schema.String,
      source_name: Schema.String,
      source_type: Schema.String,
      document_title: Schema.String,
      heading_path: Schema.String,
      content: Schema.String,
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeDocumentsSearchListOutput>;

// The operation
/**
 * Read-only access to parsed knowledge documents. Exposes hybrid search
 * (``search``) and a drill-down window (``window``) so an agent (PHAI or
 * MCP) can find and explore business knowledge chunks.
 *
 * @param limit - Maximum number of ranked chunks to return. Defaults to 10, capped at 20.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param query - Natural-language search query. Runs hybrid (semantic + full-text) retrieval over all SAFE, READY knowledge chunks in this project.
 * @param rerank - When true, rerank search results with a listwise LLM pass for better relevance. Defaults to false (RRF order only). Falls back to RRF order on rerank failure.
 */
export const businessKnowledgeDocumentsSearchList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeDocumentsSearchListInput,
    outputSchema: BusinessKnowledgeDocumentsSearchListOutput,
  }));
