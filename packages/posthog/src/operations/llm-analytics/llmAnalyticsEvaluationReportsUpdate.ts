import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsEvaluationReportsUpdateInput {
  id: string;
  project_id: string;
  evaluation?: string;
  frequency?: "scheduled" | "every_n";
  rrule?: string;
  starts_at?: string | null;
  timezone_name?: string;
  next_delivery_date?: string | null;
  delivery_targets?: unknown;
  max_sample_size?: number;
  enabled?: boolean;
  deleted?: boolean;
  last_delivered_at?: string | null;
  report_prompt_guidance?: string;
  trigger_threshold?: number | null;
  cooldown_minutes?: number;
  daily_run_cap?: number;
  created_by?: number | null;
  created_at?: string;
}
export const LlmAnalyticsEvaluationReportsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    evaluation: Schema.optional(Schema.String),
    frequency: Schema.optional(Schema.Literals(["scheduled", "every_n"])),
    rrule: Schema.optional(Schema.String),
    starts_at: Schema.optional(Schema.NullOr(Schema.String)),
    timezone_name: Schema.optional(Schema.String),
    next_delivery_date: Schema.optional(Schema.NullOr(Schema.String)),
    delivery_targets: Schema.optional(Schema.Unknown),
    max_sample_size: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    last_delivered_at: Schema.optional(Schema.NullOr(Schema.String)),
    report_prompt_guidance: Schema.optional(Schema.String),
    trigger_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
    cooldown_minutes: Schema.optional(Schema.Number),
    daily_run_cap: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsEvaluationReportsUpdateInput>;

// Output Schema
export interface LlmAnalyticsEvaluationReportsUpdateOutput {
  id?: string;
  evaluation?: string;
  frequency?: "scheduled" | "every_n";
  rrule?: string;
  starts_at?: string | null;
  timezone_name?: string;
  next_delivery_date?: string | null;
  delivery_targets?: unknown;
  max_sample_size?: number;
  enabled?: boolean;
  deleted?: boolean;
  last_delivered_at?: string | null;
  report_prompt_guidance?: string;
  trigger_threshold?: number | null;
  cooldown_minutes?: number;
  daily_run_cap?: number;
  created_by?: number | null;
  created_at?: string;
}
export const LlmAnalyticsEvaluationReportsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    evaluation: Schema.optional(Schema.String),
    frequency: Schema.optional(Schema.Literals(["scheduled", "every_n"])),
    rrule: Schema.optional(Schema.String),
    starts_at: Schema.optional(Schema.NullOr(Schema.String)),
    timezone_name: Schema.optional(Schema.String),
    next_delivery_date: Schema.optional(Schema.NullOr(Schema.String)),
    delivery_targets: Schema.optional(Schema.Unknown),
    max_sample_size: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    last_delivered_at: Schema.optional(Schema.NullOr(Schema.String)),
    report_prompt_guidance: Schema.optional(Schema.String),
    trigger_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
    cooldown_minutes: Schema.optional(Schema.Number),
    daily_run_cap: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LlmAnalyticsEvaluationReportsUpdateOutput>;

// The operation
/**
 * CRUD for evaluation report configurations + report run history.
 *
 * @param id - A UUID string identifying this evaluation report.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationReportsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationReportsUpdateInput,
    outputSchema: LlmAnalyticsEvaluationReportsUpdateOutput,
  }));
