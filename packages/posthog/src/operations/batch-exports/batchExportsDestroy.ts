import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/batch_exports/{id}/",
    }),
  );
export type BatchExportsDestroyInput = typeof BatchExportsDestroyInput.Type;

// Output Schema
export const BatchExportsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchExportsDestroyOutput = typeof BatchExportsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this batch export.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchExportsDestroyInput,
  outputSchema: BatchExportsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
