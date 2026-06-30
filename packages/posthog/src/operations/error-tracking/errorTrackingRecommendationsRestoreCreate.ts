import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingRecommendationsRestoreCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/recommendations/{id}/restore/",
    }),
  );
export type ErrorTrackingRecommendationsRestoreCreateInput =
  typeof ErrorTrackingRecommendationsRestoreCreateInput.Type;

// Output Schema
export const ErrorTrackingRecommendationsRestoreCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    meta: Schema.optional(Schema.Unknown),
    completed: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    computed_at: Schema.optional(Schema.NullOr(Schema.String)),
    dismissed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type ErrorTrackingRecommendationsRestoreCreateOutput =
  typeof ErrorTrackingRecommendationsRestoreCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingRecommendationsRestoreCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingRecommendationsRestoreCreateInput,
    outputSchema: ErrorTrackingRecommendationsRestoreCreateOutput,
  }));
