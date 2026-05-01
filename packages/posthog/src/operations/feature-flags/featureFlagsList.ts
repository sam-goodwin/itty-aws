import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  active: Schema.optional(Schema.Literals(["STALE", "false", "true"])),
  created_by_id: Schema.optional(Schema.String),
  evaluation_runtime: Schema.optional(
    Schema.Literals(["both", "client", "server"]),
  ),
  excluded_properties: Schema.optional(Schema.String),
  has_evaluation_contexts: Schema.optional(Schema.Literals(["false", "true"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.String),
  type: Schema.optional(
    Schema.Literals(["boolean", "experiment", "multivariant", "remote_config"]),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/feature_flags/" }),
);
export type FeatureFlagsListInput = typeof FeatureFlagsListInput.Type;

// Output Schema
export const FeatureFlagsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  },
);
export type FeatureFlagsListOutput = typeof FeatureFlagsListOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param created_by_id - The User ID which initially created the feature flag.
 * @param evaluation_runtime - Filter feature flags by their evaluation runtime.
 * @param excluded_properties - JSON-encoded list of feature flag keys to exclude from the results.
 * @param has_evaluation_contexts - Filter feature flags by presence of evaluation contexts. 'true' returns only flags with at least one evaluation context, 'false' returns only flags without.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search by feature flag key or name. Case insensitive.
 * @param tags - JSON-encoded list of tag names to filter feature flags by.
 */
export const featureFlagsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FeatureFlagsListInput,
  outputSchema: FeatureFlagsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
