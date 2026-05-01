import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsAllActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/activity/",
    }),
  );
export type FeatureFlagsAllActivityRetrieveInput =
  typeof FeatureFlagsAllActivityRetrieveInput.Type;

// Output Schema
export const FeatureFlagsAllActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          user: Schema.optional(Schema.NullOr(Schema.Unknown)),
          activity: Schema.optional(Schema.String),
          scope: Schema.optional(Schema.String),
          item_id: Schema.optional(Schema.String),
          detail: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              changes: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    action: Schema.optional(Schema.String),
                    field: Schema.optional(Schema.String),
                    before: Schema.optional(Schema.Unknown),
                    after: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
              merge: Schema.optional(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  source: Schema.optional(Schema.Unknown),
                  target: Schema.optional(Schema.Unknown),
                }),
              ),
              trigger: Schema.optional(
                Schema.Struct({
                  job_type: Schema.optional(Schema.String),
                  job_id: Schema.optional(Schema.String),
                  payload: Schema.optional(Schema.Unknown),
                }),
              ),
              name: Schema.optional(Schema.String),
              short_id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    total_count: Schema.optional(Schema.Number),
  });
export type FeatureFlagsAllActivityRetrieveOutput =
  typeof FeatureFlagsAllActivityRetrieveOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param limit - Number of items per page
 * @param page - Page number
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsAllActivityRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsAllActivityRetrieveInput,
    outputSchema: FeatureFlagsAllActivityRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
