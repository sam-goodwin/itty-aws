import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/{id}/activity/",
    }),
  );
export type FeatureFlagsActivityRetrieveInput =
  typeof FeatureFlagsActivityRetrieveInput.Type;

// Output Schema
export const FeatureFlagsActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        user: Schema.NullOr(Schema.Unknown),
        activity: Schema.String,
        scope: Schema.String,
        item_id: Schema.String,
        detail: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            changes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.String,
                  action: Schema.String,
                  field: Schema.String,
                  before: Schema.Unknown,
                  after: Schema.Unknown,
                }),
              ),
            ),
            merge: Schema.optional(
              Schema.Struct({
                type: Schema.String,
                source: Schema.Unknown,
                target: Schema.Unknown,
              }),
            ),
            trigger: Schema.optional(
              Schema.Struct({
                job_type: Schema.String,
                job_id: Schema.String,
                payload: Schema.Unknown,
              }),
            ),
            name: Schema.String,
            short_id: Schema.String,
            type: Schema.String,
          }),
        ),
        created_at: Schema.String,
      }),
    ),
    next: Schema.NullOr(Schema.String),
    previous: Schema.NullOr(Schema.String),
    total_count: Schema.Number,
  });
export type FeatureFlagsActivityRetrieveOutput =
  typeof FeatureFlagsActivityRetrieveOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param limit - Number of items per page
 * @param page - Page number
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsActivityRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsActivityRetrieveInput,
    outputSchema: FeatureFlagsActivityRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
