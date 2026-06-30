import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const BusinessKnowledgeSourcesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    text: Schema.String,
    always_include: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/business_knowledge/sources/",
    }),
  );
export type BusinessKnowledgeSourcesCreateInput =
  typeof BusinessKnowledgeSourcesCreateInput.Type;

// Output Schema
export const BusinessKnowledgeSourcesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BusinessKnowledgeSourcesCreateOutput =
  typeof BusinessKnowledgeSourcesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeSourcesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeSourcesCreateInput,
    outputSchema: BusinessKnowledgeSourcesCreateOutput,
  }));
