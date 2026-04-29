import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemLogViewRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_system/log_view/",
    }),
  );
export type FileSystemLogViewRetrieveInput =
  typeof FileSystemLogViewRetrieveInput.Type;

// Output Schema
export const FileSystemLogViewRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSystemLogViewRetrieveOutput =
  typeof FileSystemLogViewRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemLogViewRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileSystemLogViewRetrieveInput,
    outputSchema: FileSystemLogViewRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
