import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingRecommendationsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ErrorTrackingRecommendationsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/recommendations/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingRecommendationsListInput>;

// Output Schema
export interface ErrorTrackingRecommendationsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    type?: string;
    meta?: unknown;
    completed?: boolean;
    status?: string;
    computed_at?: string | null;
    dismissed_at?: string | null;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const ErrorTrackingRecommendationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          meta: Schema.optional(Schema.Unknown),
          completed: Schema.optional(Schema.Boolean),
          status: Schema.optional(Schema.String),
          computed_at: Schema.optional(Schema.NullOr(Schema.String)),
          dismissed_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingRecommendationsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingRecommendationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingRecommendationsListInput,
    outputSchema: ErrorTrackingRecommendationsListOutput,
  }));
