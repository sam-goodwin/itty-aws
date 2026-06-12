import * as Schema from "effect/Schema";

export const HogFlowMinimalSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.Literals(["draft", "active", "archived"])),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  updated_at: Schema.optional(Schema.String),
  trigger: Schema.optional(Schema.Unknown),
  trigger_masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
  conversion: Schema.optional(Schema.NullOr(Schema.Unknown)),
  exit_condition: Schema.optional(
    Schema.Literals([
      "exit_on_conversion",
      "exit_on_trigger_not_matched",
      "exit_on_trigger_not_matched_or_conversion",
      "exit_only_at_end",
    ]),
  ),
  edges: Schema.optional(Schema.Unknown),
  actions: Schema.optional(Schema.Unknown),
  abort_action: Schema.optional(Schema.NullOr(Schema.String)),
  variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
  billable_action_types: Schema.optional(Schema.NullOr(Schema.Unknown)),
});
export const HogFlowStatusEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["draft", "active", "archived"]);
export const ExitConditionEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "exit_on_conversion",
    "exit_on_trigger_not_matched",
    "exit_on_trigger_not_matched_or_conversion",
    "exit_only_at_end",
  ]);
export const HogFlowActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  on_error: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.Number),
  updated_at: Schema.optional(Schema.Number),
  filters: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        source: Schema.optional(
          Schema.Literals(["events", "person-updates", "data-warehouse-table"]),
        ),
        actions: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        events: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        data_warehouse: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        properties: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
        transpiled: Schema.optional(Schema.Unknown),
        filter_test_accounts: Schema.optional(Schema.Boolean),
        bytecode_error: Schema.optional(Schema.String),
      }),
    ),
  ),
  type: Schema.optional(Schema.String),
  config: Schema.optional(Schema.Unknown),
  output_variable: Schema.optional(Schema.NullOr(Schema.Unknown)),
});
export const AppMetricSeriesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.Number)),
});
export const HogFlowScheduleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  rrule: Schema.optional(Schema.String),
  starts_at: Schema.optional(Schema.String),
  timezone: Schema.optional(Schema.String),
  variables: Schema.optional(Schema.Unknown),
  status: Schema.optional(Schema.Literals(["active", "paused", "completed"])),
  next_run_at: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
