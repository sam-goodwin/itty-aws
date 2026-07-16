import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsSamplingRulesUpdateInput {
  id: string;
  project_id: string;
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
export const LogsSamplingRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/logs/sampling_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<LogsSamplingRulesUpdateInput>;

// Output Schema
export interface LogsSamplingRulesUpdateOutput {
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
export const LogsSamplingRulesUpdateOutput =
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
  }) as unknown as Schema.Codec<LogsSamplingRulesUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this logs exclusion rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSamplingRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsSamplingRulesUpdateInput,
  outputSchema: LogsSamplingRulesUpdateOutput,
}));
