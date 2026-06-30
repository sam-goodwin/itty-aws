import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface FileDownloadBatchExportsCreateInput {
  project_id: string;
}
export const FileDownloadBatchExportsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/file_download_batch_exports/",
    }),
  ) as unknown as Schema.Codec<FileDownloadBatchExportsCreateInput>;

// Output Schema
export type FileDownloadBatchExportsCreateOutput = void;
export const FileDownloadBatchExportsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FileDownloadBatchExportsCreateOutput>;

// The operation
/**
 * Create and start a batch export on demand run to download a file.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileDownloadBatchExportsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileDownloadBatchExportsCreateInput,
    outputSchema: FileDownloadBatchExportsCreateOutput,
  }));
