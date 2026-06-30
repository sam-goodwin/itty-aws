import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsBulkDeleteCreateInput {
  project_id: string;
  filters?: {
    active?: "true" | "false" | "STALE";
    created_by_id?: number;
    search?: string;
    type?: "boolean" | "multivariant" | "experiment" | "remote_config";
    evaluation_runtime?: "server" | "client" | "all";
    excluded_properties?: string;
    tags?: string[];
    excluded_tags?: string[];
    has_evaluation_contexts?: boolean;
    archived?: boolean;
  };
  ids?: number[];
}
export const FeatureFlagsBulkDeleteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.Struct({
        active: Schema.optional(Schema.Literals(["true", "false", "STALE"])),
        created_by_id: Schema.optional(Schema.Number),
        search: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "boolean",
            "multivariant",
            "experiment",
            "remote_config",
          ]),
        ),
        evaluation_runtime: Schema.optional(
          Schema.Literals(["server", "client", "all"]),
        ),
        excluded_properties: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Array(Schema.String)),
        excluded_tags: Schema.optional(Schema.Array(Schema.String)),
        has_evaluation_contexts: Schema.optional(Schema.Boolean),
        archived: Schema.optional(Schema.Boolean),
      }),
    ),
    ids: Schema.optional(Schema.Array(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/feature_flags/bulk_delete/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsBulkDeleteCreateInput>;

// Output Schema
export interface FeatureFlagsBulkDeleteCreateOutput {
  deleted: {
    id: number;
    key: string;
    rollout_state: "fully_rolled_out" | "not_rolled_out" | "partial";
    active_variant: string | null;
  }[];
  errors: { id: unknown; key?: string; reason: string }[];
}
export const FeatureFlagsBulkDeleteCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        key: Schema.String,
        rollout_state: Schema.Literals([
          "fully_rolled_out",
          "not_rolled_out",
          "partial",
        ]),
        active_variant: Schema.NullOr(Schema.String),
      }),
    ),
    errors: Schema.Array(
      Schema.Struct({
        id: Schema.Unknown,
        key: Schema.optional(Schema.String),
        reason: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<FeatureFlagsBulkDeleteCreateOutput>;

// The operation
/**
 * Bulk delete feature flags by filter criteria or explicit IDs.
 * Accepts either:
 * - {"filters": {...}} - Same filter params as list endpoint (search, active, type, etc.)
 * - {"ids": [...]} - Explicit list of flag IDs (no limit)
 * Returns same format as bulk_delete for UI compatibility.
 * Uses bulk operations for efficiency: database updates are batched and cache
 * invalidation happens once at the end rather than per-flag.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsBulkDeleteCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsBulkDeleteCreateInput,
    outputSchema: FeatureFlagsBulkDeleteCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
