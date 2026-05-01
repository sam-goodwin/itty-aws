import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingRecommendationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/recommendations/",
    }),
  );
export type ErrorTrackingRecommendationsListInput =
  typeof ErrorTrackingRecommendationsListInput.Type;

// Output Schema
export const ErrorTrackingRecommendationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          meta: Schema.optional(Schema.Unknown),
          computed_at: Schema.optional(Schema.NullOr(Schema.String)),
          dismissed_at: Schema.optional(Schema.NullOr(Schema.String)),
          next_refresh_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ErrorTrackingRecommendationsListOutput =
  typeof ErrorTrackingRecommendationsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingRecommendationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingRecommendationsListInput,
    outputSchema: ErrorTrackingRecommendationsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
