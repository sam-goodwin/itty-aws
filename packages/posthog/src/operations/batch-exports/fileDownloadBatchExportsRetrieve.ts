import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const FileDownloadBatchExportsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_download_batch_exports/{id}/",
    }),
  );
export type FileDownloadBatchExportsRetrieveInput =
  typeof FileDownloadBatchExportsRetrieveInput.Type;

// Output Schema
export const FileDownloadBatchExportsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type FileDownloadBatchExportsRetrieveOutput =
  typeof FileDownloadBatchExportsRetrieveOutput.Type;

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
