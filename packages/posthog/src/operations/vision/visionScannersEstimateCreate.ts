import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersEstimateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.optional(Schema.Unknown),
    sampling_rate: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/vision/scanners/estimate/",
    }),
  );
export type VisionScannersEstimateCreateInput =
  typeof VisionScannersEstimateCreateInput.Type;

// Output Schema
export const VisionScannersEstimateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matched_sessions_in_window: Schema.Number,
    window_days: Schema.Number,
    estimated_observations_per_month: Schema.Number,
    sampling_rate: Schema.Number,
  });
export type VisionScannersEstimateCreateOutput =
  typeof VisionScannersEstimateCreateOutput.Type;

// The operation
/**
 * Estimate the observation volume a proposed scanner would generate, for the pre-save cost preview.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersEstimateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersEstimateCreateInput,
    outputSchema: VisionScannersEstimateCreateOutput,
  }));
