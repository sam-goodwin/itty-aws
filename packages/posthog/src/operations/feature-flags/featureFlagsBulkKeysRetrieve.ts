import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsBulkKeysRetrieveInput {
  project_id: string;
  ids?: unknown[];
}
export const FeatureFlagsBulkKeysRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.optional(Schema.Array(Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/feature_flags/bulk_keys/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsBulkKeysRetrieveInput>;

// Output Schema
export interface FeatureFlagsBulkKeysRetrieveOutput {
  keys: Record<string, string>;
  warning?: string;
}
export const FeatureFlagsBulkKeysRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    keys: Schema.Record(Schema.String, Schema.String),
    warning: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FeatureFlagsBulkKeysRetrieveOutput>;

// The operation
/**
 * Get feature flag keys by IDs.
 * Accepts a list of feature flag IDs and returns a mapping of ID to key.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsBulkKeysRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsBulkKeysRetrieveInput,
    outputSchema: FeatureFlagsBulkKeysRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
