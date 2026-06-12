import * as Schema from "effect/Schema";

export const TaskAutomationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  prompt: Schema.optional(Schema.String),
  repository: Schema.optional(Schema.String),
  github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
  cron_expression: Schema.optional(Schema.String),
  timezone: Schema.optional(Schema.String),
  template_id: Schema.optional(Schema.NullOr(Schema.String)),
  enabled: Schema.optional(Schema.Boolean),
  last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_run_status: Schema.optional(Schema.NullOr(Schema.String)),
  last_task_id: Schema.optional(Schema.NullOr(Schema.String)),
  last_task_run_id: Schema.optional(Schema.NullOr(Schema.String)),
  last_error: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
