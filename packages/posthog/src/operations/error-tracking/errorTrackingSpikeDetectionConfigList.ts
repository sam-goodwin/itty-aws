import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingSpikeDetectionConfigListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/spike_detection_config/",
    }),
  );
export type ErrorTrackingSpikeDetectionConfigListInput =
  typeof ErrorTrackingSpikeDetectionConfigListInput.Type;

// Output Schema
export const ErrorTrackingSpikeDetectionConfigListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      snooze_duration_minutes: Schema.Number,
      multiplier: Schema.Number,
      threshold: Schema.Number,
    }),
  );
export type ErrorTrackingSpikeDetectionConfigListOutput =
  typeof ErrorTrackingSpikeDetectionConfigListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSpikeDetectionConfigList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSpikeDetectionConfigListInput,
    outputSchema: ErrorTrackingSpikeDetectionConfigListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
