import * as Schema from "effect/Schema";
import {
  ExperimentApiExposureConfigSchema,
  ExperimentApiMetricSchema,
  ExperimentToSavedMetricSchema,
  ExperimentVariantSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExperimentsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/{id}/",
    }),
  );
export type ExperimentsRetrieveInput = typeof ExperimentsRetrieveInput.Type;

// Output Schema
export const ExperimentsRetrieveOutput =
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
        has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
        filters: Schema.optional(Schema.Unknown),
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
      }),
    ),
    holdout_id: Schema.optional(Schema.NullOr(Schema.Number)),
    exposure_cohort: Schema.optional(Schema.NullOr(Schema.Number)),
    parameters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          feature_flag_variants: Schema.optional(
            Schema.NullOr(
              Schema.Array(Schema.suspend(() => ExperimentVariantSchema)),
            ),
          ),
          minimum_detectable_effect: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          rollout_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
    secondary_metrics: Schema.optional(Schema.NullOr(Schema.Unknown)),
    saved_metrics: Schema.optional(
      Schema.Array(Schema.suspend(() => ExperimentToSavedMetricSchema)),
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
    exposure_criteria: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          exposure_config: Schema.optional(
            Schema.suspend(() => ExperimentApiExposureConfigSchema),
          ),
          filterTestAccounts: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    metrics: Schema.optional(
      Schema.NullOr(
        Schema.Array(Schema.suspend(() => ExperimentApiMetricSchema)),
      ),
    ),
    metrics_secondary: Schema.optional(
      Schema.NullOr(
        Schema.Array(Schema.suspend(() => ExperimentApiMetricSchema)),
      ),
    ),
    stats_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
    scheduling_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
    allow_unknown_events: Schema.optional(Schema.Boolean),
    _create_in_folder: Schema.optional(Schema.String),
    conclusion: Schema.optional(Schema.Unknown),
    conclusion_comment: Schema.optional(Schema.NullOr(Schema.String)),
    primary_metrics_ordered_uuids: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    secondary_metrics_ordered_uuids: Schema.optional(
      Schema.NullOr(Schema.Unknown),
    ),
    only_count_matured_users: Schema.optional(Schema.Boolean),
    update_feature_flag_params: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Unknown),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ExperimentsRetrieveOutput = typeof ExperimentsRetrieveOutput.Type;

// The operation
/**
 * Retrieve a single experiment by ID, including its current status, metrics, feature flag, and results metadata.
 *
 * @param id - A unique integer value identifying this experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsRetrieveInput,
  outputSchema: ExperimentsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
