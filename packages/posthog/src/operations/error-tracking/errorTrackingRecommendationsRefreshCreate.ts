import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingRecommendationsRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/recommendations/{id}/refresh/",
    }),
  );
export type ErrorTrackingRecommendationsRefreshCreateInput =
  typeof ErrorTrackingRecommendationsRefreshCreateInput.Type;

// Output Schema
export const ErrorTrackingRecommendationsRefreshCreateOutput =
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
export type ErrorTrackingRecommendationsRefreshCreateOutput =
  typeof ErrorTrackingRecommendationsRefreshCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking recommendation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingRecommendationsRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingRecommendationsRefreshCreateInput,
    outputSchema: ErrorTrackingRecommendationsRefreshCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
