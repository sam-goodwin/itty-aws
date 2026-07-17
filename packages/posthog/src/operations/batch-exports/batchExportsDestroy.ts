import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface BatchExportsDestroyInput {
  id: string;
  project_id: string;
}
export const BatchExportsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/batch_exports/{id}/",
    }),
  ) as unknown as Schema.Codec<BatchExportsDestroyInput>;

// Output Schema
export type BatchExportsDestroyOutput = void;
export const BatchExportsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchExportsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this batch export.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchExportsDestroyInput,
  outputSchema: BatchExportsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
