import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsBulkKeysRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.optional(Schema.Array(Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/feature_flags/bulk_keys/",
    }),
  );
export type FeatureFlagsBulkKeysRetrieveInput =
  typeof FeatureFlagsBulkKeysRetrieveInput.Type;

// Output Schema
export const FeatureFlagsBulkKeysRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.Record(Schema.String, Schema.String),
    warning: Schema.optional(Schema.String),
  });
export type FeatureFlagsBulkKeysRetrieveOutput =
  typeof FeatureFlagsBulkKeysRetrieveOutput.Type;

// The operation
/**
 * Get feature flag keys by IDs.
 * Accepts a list of feature flag IDs and returns a mapping of ID to key.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsBulkKeysRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsBulkKeysRetrieveInput,
    outputSchema: FeatureFlagsBulkKeysRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
