import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface FileDownloadBatchExportsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const FileDownloadBatchExportsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_download_batch_exports/",
    }),
  ) as unknown as Schema.Codec<FileDownloadBatchExportsListInput>;

// Output Schema
export interface FileDownloadBatchExportsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    status:
      | "Cancelled"
      | "Completed"
      | "ContinuedAsNew"
      | "Failed"
      | "FailedRetryable"
      | "FailedBilling"
      | "Terminated"
      | "TimedOut"
      | "Running"
      | "Starting";
  }[];
}
export const FileDownloadBatchExportsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        status: Schema.Literals([
          "Cancelled",
          "Completed",
          "ContinuedAsNew",
          "Failed",
          "FailedRetryable",
          "FailedBilling",
          "Terminated",
          "TimedOut",
          "Running",
          "Starting",
        ]),
      }),
    ),
  }) as unknown as Schema.Codec<FileDownloadBatchExportsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileDownloadBatchExportsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileDownloadBatchExportsListInput,
    outputSchema: FileDownloadBatchExportsListOutput,
  }));
