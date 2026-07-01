import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface FileDownloadBatchExportsCancelCreateInput {
  id: string;
  project_id: string;
  file: {
    format?: "Parquet" | "JSONLines";
    compression?: "brotli" | "gzip" | "lz4" | "snappy" | "zstd" | null;
    max_size_mb?: number | null;
  };
  model: "events" | "persons" | "sessions";
  include?: string[];
  exclude?: string[];
  data_interval_start: string;
  data_interval_end: string;
}
export const FileDownloadBatchExportsCancelCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    file: Schema.Struct({
      format: Schema.optional(Schema.Literals(["Parquet", "JSONLines"])),
      compression: Schema.optional(
        Schema.NullOr(
          Schema.Literals(["brotli", "gzip", "lz4", "snappy", "zstd"]),
        ),
      ),
      max_size_mb: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
    model: Schema.Literals(["events", "persons", "sessions"]),
    include: Schema.optional(Schema.Array(Schema.String)),
    exclude: Schema.optional(Schema.Array(Schema.String)),
    data_interval_start: Schema.String,
    data_interval_end: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/file_download_batch_exports/{id}/cancel/",
    }),
  ) as unknown as Schema.Codec<FileDownloadBatchExportsCancelCreateInput>;

// Output Schema
export type FileDownloadBatchExportsCancelCreateOutput = void;
export const FileDownloadBatchExportsCancelCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FileDownloadBatchExportsCancelCreateOutput>;

// The operation
/**
 * Cancel an ongoing file-download batch export.
 *
 * @param id - A UUID string identifying this batch export run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileDownloadBatchExportsCancelCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileDownloadBatchExportsCancelCreateInput,
    outputSchema: FileDownloadBatchExportsCancelCreateOutput,
  }));
