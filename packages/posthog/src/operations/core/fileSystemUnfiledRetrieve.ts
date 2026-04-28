import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const FileSystemUnfiledRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_system/unfiled/",
    }),
  );
export type FileSystemUnfiledRetrieveInput =
  typeof FileSystemUnfiledRetrieveInput.Type;

// Output Schema
export const FileSystemUnfiledRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSystemUnfiledRetrieveOutput =
  typeof FileSystemUnfiledRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemUnfiledRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileSystemUnfiledRetrieveInput,
    outputSchema: FileSystemUnfiledRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
