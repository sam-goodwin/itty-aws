import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput {
  project_id: string;
  snooze_duration_minutes?: number;
  multiplier?: number;
  threshold?: number;
}
export const ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    snooze_duration_minutes: Schema.optional(Schema.Number),
    multiplier: Schema.optional(Schema.Number),
    threshold: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/spike_detection_config/update_config/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput>;

// Output Schema
export interface ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput {
  snooze_duration_minutes?: number;
  multiplier?: number;
  threshold?: number;
}
export const ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    snooze_duration_minutes: Schema.optional(Schema.Number),
    multiplier: Schema.optional(Schema.Number),
    threshold: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSpikeDetectionConfigUpdateConfigPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput,
    outputSchema:
      ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput,
  }));
