import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    snooze_duration_minutes: Schema.optional(Schema.Number),
    multiplier: Schema.optional(Schema.Number),
    threshold: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/error_tracking/spike_detection_config/update_config/",
    }),
  );
export type ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput =
  typeof ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snooze_duration_minutes: Schema.Number,
    multiplier: Schema.Number,
    threshold: Schema.Number,
  });
export type ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput =
  typeof ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSpikeDetectionConfigUpdateConfigPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateInput,
    outputSchema:
      ErrorTrackingSpikeDetectionConfigUpdateConfigPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
