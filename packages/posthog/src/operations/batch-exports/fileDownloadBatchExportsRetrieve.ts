import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface FileDownloadBatchExportsRetrieveInput {
  id: string;
  project_id: string;
}
export const FileDownloadBatchExportsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_download_batch_exports/{id}/",
    }),
  ) as unknown as Schema.Codec<FileDownloadBatchExportsRetrieveInput>;

// Output Schema
export type FileDownloadBatchExportsRetrieveOutput =
  | { status: "Starting" | "Running" | "Cancelled" }
  | { status: "Completed"; files: string[] }
  | {
      status:
        | "Failed"
        | "FailedRetryable"
        | "FailedBilling"
        | "Terminated"
        | "TimedOut";
      error: string;
    };
export const FileDownloadBatchExportsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      status: Schema.Literals(["Starting", "Running", "Cancelled"]),
    }),
    Schema.Struct({
      status: Schema.Literals(["Completed"]),
      files: Schema.Array(Schema.String),
    }),
    Schema.Struct({
      status: Schema.Literals([
        "Failed",
        "FailedRetryable",
        "FailedBilling",
        "Terminated",
        "TimedOut",
      ]),
      error: Schema.String,
    }),
  ]) as unknown as Schema.Codec<FileDownloadBatchExportsRetrieveOutput>;

// The operation
/**
 * Get a batch export on demand run.
 * If the underlying batch export run has completed, we return keys to the
 * generated file downloads so that users may download them by making a request
 * to /download.
 *
 * @param id - A UUID string identifying this batch export run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileDownloadBatchExportsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileDownloadBatchExportsRetrieveInput,
    outputSchema: FileDownloadBatchExportsRetrieveOutput,
  }));
