import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFlowsSchedulesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    schedule_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/hog_flows/{id}/schedules/{schedule_id}/",
    }),
  );
export type HogFlowsSchedulesDestroyInput =
  typeof HogFlowsSchedulesDestroyInput.Type;

// Output Schema
export const HogFlowsSchedulesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HogFlowsSchedulesDestroyOutput =
  typeof HogFlowsSchedulesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsSchedulesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsSchedulesDestroyInput,
    outputSchema: HogFlowsSchedulesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
