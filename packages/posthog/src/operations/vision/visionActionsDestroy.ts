import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionActionsDestroyInput {
  id: string;
  project_id: string;
}
export const VisionActionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/vision/actions/{id}/",
    }),
  ) as unknown as Schema.Codec<VisionActionsDestroyInput>;

// Output Schema
export type VisionActionsDestroyOutput = void;
export const VisionActionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VisionActionsDestroyOutput>;

// The operation
/**
 * CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.
 *
 * @param id - A UUID string identifying this vision action.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionActionsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisionActionsDestroyInput,
    outputSchema: VisionActionsDestroyOutput,
  }),
);
