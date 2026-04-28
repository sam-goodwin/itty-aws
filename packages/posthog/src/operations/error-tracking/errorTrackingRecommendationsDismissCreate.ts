import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingRecommendationsDismissCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/recommendations/{id}/dismiss/",
    }),
  );
export type ErrorTrackingRecommendationsDismissCreateInput =
  typeof ErrorTrackingRecommendationsDismissCreateInput.Type;

// Output Schema
export const ErrorTrackingRecommendationsDismissCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    meta: Schema.Unknown,
    computed_at: Schema.NullOr(Schema.String),
    dismissed_at: Schema.NullOr(Schema.String),
    next_refresh_at: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ErrorTrackingRecommendationsDismissCreateOutput =
  typeof ErrorTrackingRecommendationsDismissCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking recommendation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingRecommendationsDismissCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingRecommendationsDismissCreateInput,
    outputSchema: ErrorTrackingRecommendationsDismissCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
