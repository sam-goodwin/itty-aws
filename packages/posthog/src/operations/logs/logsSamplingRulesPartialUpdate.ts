import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsSamplingRulesPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  enabled?: boolean;
  priority?: number | null;
  rule_type?: "severity_sampling" | "path_drop" | "rate_limit";
  scope_service?: string | null;
  scope_path_pattern?: string | null;
  scope_attribute_filters?: Record<string, unknown>[];
  config?: unknown;
  version?: number;
  created_by?: number;
  created_at?: string;
  updated_at?: string | null;
}
export const LogsSamplingRulesPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.NullOr(Schema.Number)),
    rule_type: Schema.optional(
      Schema.Literals(["severity_sampling", "path_drop", "rate_limit"]),
    ),
    scope_service: Schema.optional(Schema.NullOr(Schema.String)),
    scope_path_pattern: Schema.optional(Schema.NullOr(Schema.String)),
    scope_attribute_filters: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    config: Schema.optional(Schema.Unknown),
    version: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/logs/sampling_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<LogsSamplingRulesPartialUpdateInput>;

// Output Schema
export interface LogsSamplingRulesPartialUpdateOutput {
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
}
export const LogsSamplingRulesPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<LogsSamplingRulesPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this logs exclusion rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSamplingRulesPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogsSamplingRulesPartialUpdateInput,
    outputSchema: LogsSamplingRulesPartialUpdateOutput,
  }));
