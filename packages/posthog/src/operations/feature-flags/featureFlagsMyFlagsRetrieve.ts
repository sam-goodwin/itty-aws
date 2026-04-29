import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsMyFlagsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    groups: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/my_flags/",
    }),
  );
export type FeatureFlagsMyFlagsRetrieveInput =
  typeof FeatureFlagsMyFlagsRetrieveInput.Type;

// Output Schema
export const FeatureFlagsMyFlagsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      feature_flag: Schema.Struct({
        id: Schema.Number,
        team_id: Schema.Number,
        name: Schema.optional(Schema.String),
        key: Schema.String,
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
        evaluation_contexts: Schema.Array(Schema.String),
      }),
      value: Schema.Unknown,
    }),
  );
export type FeatureFlagsMyFlagsRetrieveOutput =
  typeof FeatureFlagsMyFlagsRetrieveOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param groups - Groups for feature flag evaluation (JSON object string)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsMyFlagsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeatureFlagsMyFlagsRetrieveInput,
    outputSchema: FeatureFlagsMyFlagsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
