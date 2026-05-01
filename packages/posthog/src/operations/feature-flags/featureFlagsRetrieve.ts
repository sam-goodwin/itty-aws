import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/{id}/",
    }),
  );
export type FeatureFlagsRetrieveInput = typeof FeatureFlagsRetrieveInput.Type;

// Output Schema
export const FeatureFlagsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.optional(Schema.String),
    key: Schema.String,
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    deleted: Schema.optional(Schema.Boolean),
    active: Schema.optional(Schema.Boolean),
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
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.NullOr(Schema.String),
    version: Schema.optional(Schema.Number),
    last_modified_by: Schema.Struct({
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
    ensure_experience_continuity: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    experiment_set: Schema.Array(Schema.Number),
    experiment_set_metadata: Schema.Array(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    surveys: Schema.Record(Schema.String, Schema.Unknown),
    features: Schema.Record(Schema.String, Schema.Unknown),
    rollback_conditions: Schema.optional(Schema.NullOr(Schema.Unknown)),
    performed_rollback: Schema.optional(Schema.NullOr(Schema.Boolean)),
    can_edit: Schema.Boolean,
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    evaluation_contexts: Schema.optional(Schema.Array(Schema.Unknown)),
    usage_dashboard: Schema.Number,
    analytics_dashboards: Schema.optional(Schema.Array(Schema.Number)),
    has_enriched_analytics: Schema.optional(Schema.NullOr(Schema.Boolean)),
    user_access_level: Schema.NullOr(Schema.String),
    creation_context: Schema.optional(
      Schema.Literals([
        "feature_flags",
        "experiments",
        "surveys",
        "early_access_features",
        "web_experiments",
        "product_tours",
      ]),
    ),
    is_remote_configuration: Schema.optional(Schema.NullOr(Schema.Boolean)),
    has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
    status: Schema.String,
    evaluation_runtime: Schema.optional(Schema.Unknown),
    bucketing_identifier: Schema.optional(Schema.Unknown),
    last_called_at: Schema.optional(Schema.NullOr(Schema.String)),
    _create_in_folder: Schema.optional(Schema.String),
    _should_create_usage_dashboard: Schema.optional(Schema.Boolean),
    is_used_in_replay_settings: Schema.Boolean,
  });
export type FeatureFlagsRetrieveOutput = typeof FeatureFlagsRetrieveOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeatureFlagsRetrieveInput,
    outputSchema: FeatureFlagsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
