import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFlowsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/hog_flows/{id}/",
  }),
);
export type HogFlowsDestroyInput = typeof HogFlowsDestroyInput.Type;

// Output Schema
export const HogFlowsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HogFlowsDestroyOutput = typeof HogFlowsDestroyOutput.Type;

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
