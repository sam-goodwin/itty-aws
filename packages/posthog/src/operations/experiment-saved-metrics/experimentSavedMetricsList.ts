import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExperimentSavedMetricsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiment_saved_metrics/",
    }),
  );
export type ExperimentSavedMetricsListInput =
  typeof ExperimentSavedMetricsListInput.Type;

// Output Schema
export const ExperimentSavedMetricsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        description: Schema.optional(Schema.NullOr(Schema.String)),
        query: Schema.Unknown,
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        created_at: Schema.String,
        updated_at: Schema.String,
        tags: Schema.optional(Schema.Array(Schema.Unknown)),
        user_access_level: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type ExperimentSavedMetricsListOutput =
  typeof ExperimentSavedMetricsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentSavedMetricsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentSavedMetricsListInput,
    outputSchema: ExperimentSavedMetricsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
