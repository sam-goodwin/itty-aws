import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersEstimateCreateInput {
  project_id: string;
  query?: unknown;
  sampling_rate?: number;
}
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
  ) as unknown as Schema.Codec<VisionScannersEstimateCreateInput>;

// Output Schema
export interface VisionScannersEstimateCreateOutput {
  matched_sessions_in_window: number;
  window_days: number;
  estimated_observations_per_month: number;
  sampling_rate: number;
}
export const VisionScannersEstimateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matched_sessions_in_window: Schema.Number,
    window_days: Schema.Number,
    estimated_observations_per_month: Schema.Number,
    sampling_rate: Schema.Number,
  }) as unknown as Schema.Codec<VisionScannersEstimateCreateOutput>;

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
