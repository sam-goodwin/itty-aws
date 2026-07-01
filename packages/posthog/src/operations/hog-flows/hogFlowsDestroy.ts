import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsDestroyInput {
  id: string;
  project_id: string;
}
export const HogFlowsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/hog_flows/{id}/",
  }),
) as unknown as Schema.Codec<HogFlowsDestroyInput>;

// Output Schema
export type HogFlowsDestroyOutput = void;
export const HogFlowsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HogFlowsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsDestroyInput,
  outputSchema: HogFlowsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
