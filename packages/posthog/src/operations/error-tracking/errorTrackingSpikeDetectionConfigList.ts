import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSpikeDetectionConfigListInput {
  project_id: string;
}
export const ErrorTrackingSpikeDetectionConfigListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/spike_detection_config/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSpikeDetectionConfigListInput>;

// Output Schema
export type ErrorTrackingSpikeDetectionConfigListOutput = {
  snooze_duration_minutes?: number;
  multiplier?: number;
  threshold?: number;
}[];
export const ErrorTrackingSpikeDetectionConfigListOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      snooze_duration_minutes: Schema.optional(Schema.Number),
      multiplier: Schema.optional(Schema.Number),
      threshold: Schema.optional(Schema.Number),
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSpikeDetectionConfigListOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSpikeDetectionConfigList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSpikeDetectionConfigListInput,
    outputSchema: ErrorTrackingSpikeDetectionConfigListOutput,
  }));
