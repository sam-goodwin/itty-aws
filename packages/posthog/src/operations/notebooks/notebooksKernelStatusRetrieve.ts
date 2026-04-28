import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const NotebooksKernelStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/notebooks/{short_id}/kernel/status/",
    }),
  );
export type NotebooksKernelStatusRetrieveInput =
  typeof NotebooksKernelStatusRetrieveInput.Type;

// Output Schema
export const NotebooksKernelStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksKernelStatusRetrieveOutput =
  typeof NotebooksKernelStatusRetrieveOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksKernelStatusRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotebooksKernelStatusRetrieveInput,
    outputSchema: NotebooksKernelStatusRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
