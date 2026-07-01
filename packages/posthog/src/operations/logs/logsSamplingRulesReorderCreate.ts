import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsSamplingRulesReorderCreateInput {
  project_id: string;
  limit?: number;
  offset?: number;
  ordered_ids: string[];
}
export const LogsSamplingRulesReorderCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordered_ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/sampling_rules/reorder/",
    }),
  ) as unknown as Schema.Codec<LogsSamplingRulesReorderCreateInput>;

// Output Schema
export interface LogsSamplingRulesReorderCreateOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    name: string;
    enabled?: boolean;
    priority?: number | null;
    rule_type: "severity_sampling" | "path_drop" | "rate_limit";
    scope_service?: string | null;
    scope_path_pattern?: string | null;
    scope_attribute_filters?: Record<string, unknown>[];
    config: unknown;
    version: number;
    created_by: number;
    created_at: string;
    updated_at: string | null;
  }[];
}
export const LogsSamplingRulesReorderCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        enabled: Schema.optional(Schema.Boolean),
        priority: Schema.optional(Schema.NullOr(Schema.Number)),
        rule_type: Schema.Literals([
          "severity_sampling",
          "path_drop",
          "rate_limit",
        ]),
        scope_service: Schema.optional(Schema.NullOr(Schema.String)),
        scope_path_pattern: Schema.optional(Schema.NullOr(Schema.String)),
        scope_attribute_filters: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        config: Schema.Unknown,
        version: Schema.Number,
        created_by: Schema.Number,
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<LogsSamplingRulesReorderCreateOutput>;

// The operation
/**
 * Atomically reassign priorities so the given ID order maps to ascending priorities (0..n-1).
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSamplingRulesReorderCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogsSamplingRulesReorderCreateInput,
    outputSchema: LogsSamplingRulesReorderCreateOutput,
  }));
