import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingRecommendationsRefreshCreateInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingRecommendationsRefreshCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/recommendations/{id}/refresh/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingRecommendationsRefreshCreateInput>;

// Output Schema
export interface ErrorTrackingRecommendationsRefreshCreateOutput {
  id?: string;
  type?: string;
  meta?: unknown;
  completed?: boolean;
  status?: string;
  computed_at?: string | null;
  dismissed_at?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const ErrorTrackingRecommendationsRefreshCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    meta: Schema.optional(Schema.Unknown),
    completed: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    computed_at: Schema.optional(Schema.NullOr(Schema.String)),
    dismissed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ErrorTrackingRecommendationsRefreshCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingRecommendationsRefreshCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingRecommendationsRefreshCreateInput,
    outputSchema: ErrorTrackingRecommendationsRefreshCreateOutput,
  }));
