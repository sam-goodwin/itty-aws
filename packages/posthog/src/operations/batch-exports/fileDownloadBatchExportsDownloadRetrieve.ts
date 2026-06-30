import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const FileDownloadBatchExportsDownloadRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_download_batch_exports/{id}/download/",
    }),
  );
export type FileDownloadBatchExportsDownloadRetrieveInput =
  typeof FileDownloadBatchExportsDownloadRetrieveInput.Type;

// Output Schema
export const FileDownloadBatchExportsDownloadRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileDownloadBatchExportsDownloadRetrieveOutput =
  typeof FileDownloadBatchExportsDownloadRetrieveOutput.Type;

// The operation
/**
 * Download a file (or a part) from this batch export run.
 * Users can provide a part component with an id or index, or no part component at
 * all:
 * * If part id is included: The file download matching the id is downloaded.
 * * If part index is included: The file download matching the index (as ordered
 * by key) is downloaded.
 * * If no part component is present: If there is only one file downloaded, that
 * is downloaded. Otherwise the first one as sorted by key is downloaded.
 *
 * @param id - A UUID string identifying this batch export run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileDownloadBatchExportsDownloadRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileDownloadBatchExportsDownloadRetrieveInput,
    outputSchema: FileDownloadBatchExportsDownloadRetrieveOutput,
  }));
