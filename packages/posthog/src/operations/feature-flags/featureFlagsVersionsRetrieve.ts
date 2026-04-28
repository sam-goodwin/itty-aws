import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors";

// Input Schema
export const FeatureFlagsVersionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    version_number: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/{id}/versions/{version_number}/",
    }),
  );
export type FeatureFlagsVersionsRetrieveInput =
  typeof FeatureFlagsVersionsRetrieveInput.Type;

// Output Schema
export const FeatureFlagsVersionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    key: Schema.String,
    name: Schema.optional(Schema.String),
    filters: Schema.Record(Schema.String, Schema.Unknown),
    active: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.NullOr(Schema.Number)),
    rollback_conditions: Schema.optional(Schema.NullOr(Schema.Unknown)),
    performed_rollback: Schema.optional(Schema.NullOr(Schema.Boolean)),
    ensure_experience_continuity: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    has_enriched_analytics: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_remote_configuration: Schema.optional(Schema.NullOr(Schema.Boolean)),
    has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
    evaluation_runtime: Schema.optional(Schema.Unknown),
    bucketing_identifier: Schema.optional(Schema.Unknown),
    last_called_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.NullOr(Schema.Number),
    is_historical: Schema.Boolean,
    version_timestamp: Schema.NullOr(Schema.String),
    modified_by: Schema.NullOr(Schema.Number),
  });
export type FeatureFlagsVersionsRetrieveOutput =
  typeof FeatureFlagsVersionsRetrieveOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version_number - The version number to reconstruct.
 */
export const featureFlagsVersionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsVersionsRetrieveInput,
    outputSchema: FeatureFlagsVersionsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
