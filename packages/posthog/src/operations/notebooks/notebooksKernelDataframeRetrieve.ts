import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface NotebooksKernelDataframeRetrieveInput {
  project_id: string;
  short_id: string;
}
export const NotebooksKernelDataframeRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/notebooks/{short_id}/kernel/dataframe/",
    }),
  ) as unknown as Schema.Codec<NotebooksKernelDataframeRetrieveInput>;

// Output Schema
export type NotebooksKernelDataframeRetrieveOutput = void;
export const NotebooksKernelDataframeRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotebooksKernelDataframeRetrieveOutput>;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksKernelDataframeRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebooksKernelDataframeRetrieveInput,
    outputSchema: NotebooksKernelDataframeRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
