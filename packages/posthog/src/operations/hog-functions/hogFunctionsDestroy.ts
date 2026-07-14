import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFunctionsDestroyInput {
  id: string;
  project_id: string;
}
export const HogFunctionsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/hog_functions/{id}/",
    }),
  ) as unknown as Schema.Codec<HogFunctionsDestroyInput>;

// Output Schema
export type HogFunctionsDestroyOutput = void;
export const HogFunctionsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HogFunctionsDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this hog function.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: HogFunctionsDestroyInput,
  outputSchema: HogFunctionsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
