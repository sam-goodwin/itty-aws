import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeSourcesRetrieveInput {
  id: string;
  project_id: string;
}
export const BusinessKnowledgeSourcesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/business_knowledge/sources/{id}/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeSourcesRetrieveInput>;

// Output Schema
export interface BusinessKnowledgeSourcesRetrieveOutput {
  id: string;
  team_id: number;
  name: string;
  source_type: "text" | "url" | "file";
  status: "pending" | "processing" | "ready" | "error";
  error_message: string;
  document_count: number;
  chunk_count: number;
  created_at: string;
  updated_at: string | null;
  source_url: string;
  last_refresh_at: string | null;
  last_refresh_status: "success" | "not_modified" | "error";
  last_refresh_error: string;
  refresh_interval: "manual" | "1h" | "6h" | "24h" | "7d";
  next_refresh_at: string | null;
  has_unsafe_documents: boolean;
  embedding_status: "pending" | "completed" | "disabled";
  crawl_mode: "single" | "sitemap" | "same_origin" | "github_repo";
  crawl_config: unknown;
  original_filename: string;
  file_content_type: string;
  file_size_bytes: number | null;
  always_include: boolean;
}
export const BusinessKnowledgeSourcesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    team_id: Schema.Number,
    name: Schema.String,
    source_type: Schema.Literals(["text", "url", "file"]),
    status: Schema.Literals(["pending", "processing", "ready", "error"]),
    error_message: Schema.String,
    document_count: Schema.Number,
    chunk_count: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    source_url: Schema.String,
    last_refresh_at: Schema.NullOr(Schema.String),
    last_refresh_status: Schema.Literals(["success", "not_modified", "error"]),
    last_refresh_error: Schema.String,
    refresh_interval: Schema.Literals(["manual", "1h", "6h", "24h", "7d"]),
    next_refresh_at: Schema.NullOr(Schema.String),
    has_unsafe_documents: Schema.Boolean,
    embedding_status: Schema.Literals(["pending", "completed", "disabled"]),
    crawl_mode: Schema.Literals([
      "single",
      "sitemap",
      "same_origin",
      "github_repo",
    ]),
    crawl_config: Schema.Unknown,
    original_filename: Schema.String,
    file_content_type: Schema.String,
    file_size_bytes: Schema.NullOr(Schema.Number),
    always_include: Schema.Boolean,
  }) as unknown as Schema.Codec<BusinessKnowledgeSourcesRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this knowledge source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeSourcesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeSourcesRetrieveInput,
    outputSchema: BusinessKnowledgeSourcesRetrieveOutput,
  }));
