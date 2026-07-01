import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsSchedulesDestroyInput {
  id: string;
  project_id: string;
  schedule_id: string;
}
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
  ) as unknown as Schema.Codec<HogFlowsSchedulesDestroyInput>;

// Output Schema
export type HogFlowsSchedulesDestroyOutput = void;
export const HogFlowsSchedulesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HogFlowsSchedulesDestroyOutput>;

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
