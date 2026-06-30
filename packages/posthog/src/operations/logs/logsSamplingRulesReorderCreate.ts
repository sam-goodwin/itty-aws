import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type LogsSamplingRulesReorderCreateInput =
  typeof LogsSamplingRulesReorderCreateInput.Type;

// Output Schema
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
  });
export type LogsSamplingRulesReorderCreateOutput =
  typeof LogsSamplingRulesReorderCreateOutput.Type;

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
