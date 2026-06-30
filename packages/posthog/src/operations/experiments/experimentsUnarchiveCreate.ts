import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ExperimentsUnarchiveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/experiments/{id}/unarchive/",
    }),
  );
export type ExperimentsUnarchiveCreateInput =
  typeof ExperimentsUnarchiveCreateInput.Type;

// Output Schema
export const ExperimentsUnarchiveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    start_date: Schema.optional(Schema.NullOr(Schema.String)),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    feature_flag_key: Schema.optional(Schema.String),
    feature_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(Schema.Unknown),
        bucketing_identifier: Schema.optional(Schema.Unknown),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    holdout: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        filters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(Schema.Array(Schema.Unknown)),
              rollout_percentage: Schema.optional(Schema.Number),
              variant: Schema.optional(Schema.NullOr(Schema.String)),
              aggregation_group_type_index: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
            }),
          ),
        ),
        created_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              uuid: Schema.optional(Schema.String),
              distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
              first_name: Schema.optional(Schema.String),
              last_name: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
              is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
              hedgehog_config: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              role_at_organization: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    holdout_id: Schema.optional(Schema.NullOr(Schema.Number)),
    exposure_cohort: Schema.optional(Schema.NullOr(Schema.Number)),
    parameters: Schema.optional(Schema.Unknown),
    running_time_calculation: Schema.optional(Schema.Unknown),
    excluded_variants: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    secondary_metrics: Schema.optional(Schema.Unknown),
    saved_metrics: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          experiment: Schema.optional(Schema.Number),
          saved_metric: Schema.optional(Schema.Number),
          metadata: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
          query: Schema.optional(Schema.Unknown),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    saved_metrics_ids: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Unknown)),
    ),
    filters: Schema.optional(Schema.Unknown),
    archived: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Unknown),
    exposure_criteria: Schema.optional(Schema.Unknown),
    metrics: Schema.optional(Schema.Unknown),
    metrics_secondary: Schema.optional(Schema.Unknown),
    stats_config: Schema.optional(Schema.Unknown),
    scheduling_config: Schema.optional(Schema.Unknown),
    allow_unknown_events: Schema.optional(Schema.Boolean),
    _create_in_folder: Schema.optional(Schema.String),
    conclusion: Schema.optional(Schema.Unknown),
    conclusion_comment: Schema.optional(Schema.NullOr(Schema.String)),
    primary_metrics_ordered_uuids: Schema.optional(Schema.Unknown),
    secondary_metrics_ordered_uuids: Schema.optional(Schema.Unknown),
    only_count_matured_users: Schema.optional(Schema.Boolean),
    update_feature_flag_params: Schema.optional(Schema.Boolean),
    status: Schema.optional(
      Schema.Literals(["draft", "running", "paused", "stopped"]),
    ),
    is_legacy: Schema.optional(Schema.Boolean),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ExperimentsUnarchiveCreateOutput =
  typeof ExperimentsUnarchiveCreateOutput.Type;

// The operation
/**
 * Unarchive an archived experiment.
 * Restores the experiment to the default list view. Returns 400 if the
 * experiment is not currently archived.
 *
 * @param id - A unique integer value identifying this experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsUnarchiveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentsUnarchiveCreateInput,
    outputSchema: ExperimentsUnarchiveCreateOutput,
  }),
);
