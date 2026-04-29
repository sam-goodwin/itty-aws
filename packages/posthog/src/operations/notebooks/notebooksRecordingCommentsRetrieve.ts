import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const NotebooksRecordingCommentsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/notebooks/recording_comments/",
    }),
  );
export type NotebooksRecordingCommentsRetrieveInput =
  typeof NotebooksRecordingCommentsRetrieveInput.Type;

// Output Schema
export const NotebooksRecordingCommentsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksRecordingCommentsRetrieveOutput =
  typeof NotebooksRecordingCommentsRetrieveOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksRecordingCommentsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotebooksRecordingCommentsRetrieveInput,
    outputSchema: NotebooksRecordingCommentsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
