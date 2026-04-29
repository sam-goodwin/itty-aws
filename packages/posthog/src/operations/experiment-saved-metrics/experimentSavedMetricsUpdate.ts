import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExperimentSavedMetricsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/experiment_saved_metrics/{id}/",
    }),
  );
export type ExperimentSavedMetricsUpdateInput =
  typeof ExperimentSavedMetricsUpdateInput.Type;

// Output Schema
export const ExperimentSavedMetricsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ExperimentSavedMetricsUpdateOutput =
  typeof ExperimentSavedMetricsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this experiment saved metric.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentSavedMetricsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentSavedMetricsUpdateInput,
    outputSchema: ExperimentSavedMetricsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
