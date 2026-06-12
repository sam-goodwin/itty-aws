import * as Schema from "effect/Schema";
import {
  AlertCheckSchema,
  AlertConditionTypeSchema,
  AlertScheduleRestrictionWindowSchema,
  InsightThresholdTypeSchema,
  InsightsThresholdBoundsSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AlertsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
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
  created_at: Schema.optional(Schema.String),
  insight: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  subscribed_users: Schema.optional(Schema.Array(Schema.Number)),
  threshold: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      created_at: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      configuration: Schema.optional(
        Schema.Struct({
          bounds: Schema.optional(
            Schema.suspend(() => InsightsThresholdBoundsSchema),
          ),
          type: Schema.optional(
            Schema.suspend(() => InsightThresholdTypeSchema),
          ),
        }),
      ),
    }),
  ),
  condition: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        type: Schema.optional(Schema.suspend(() => AlertConditionTypeSchema)),
      }),
    ),
  ),
  state: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
  next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
  checks: Schema.optional(Schema.Array(Schema.suspend(() => AlertCheckSchema))),
  checks_total: Schema.optional(Schema.NullOr(Schema.Number)),
  config: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        check_ongoing_interval: Schema.optional(Schema.NullOr(Schema.Boolean)),
        series_index: Schema.optional(Schema.Number),
        type: Schema.optional(Schema.Literals(["TrendsAlertConfig"])),
      }),
    ),
  ),
  detector_config: Schema.optional(Schema.Unknown),
  calculation_interval: Schema.optional(
    Schema.Literals(["hourly", "daily", "weekly", "monthly"]),
  ),
  snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
  skip_weekend: Schema.optional(Schema.NullOr(Schema.Boolean)),
  schedule_restriction: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        blocked_windows: Schema.optional(
          Schema.Array(
            Schema.suspend(() => AlertScheduleRestrictionWindowSchema),
          ),
        ),
      }),
    ),
  ),
  last_value: Schema.optional(Schema.NullOr(Schema.Number)),
  investigation_agent_enabled: Schema.optional(Schema.Boolean),
  investigation_gates_notifications: Schema.optional(Schema.Boolean),
  investigation_inconclusive_action: Schema.optional(
    Schema.Literals(["notify", "suppress"]),
  ),
}).pipe(
  T.Http({ method: "PUT", path: "/api/projects/{project_id}/alerts/{id}/" }),
);
export type AlertsUpdateInput = typeof AlertsUpdateInput.Type;

// Output Schema
export const AlertsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
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
  created_at: Schema.optional(Schema.String),
  insight: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  subscribed_users: Schema.optional(Schema.Array(Schema.Number)),
  threshold: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      created_at: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      configuration: Schema.optional(
        Schema.Struct({
          bounds: Schema.optional(
            Schema.suspend(() => InsightsThresholdBoundsSchema),
          ),
          type: Schema.optional(
            Schema.suspend(() => InsightThresholdTypeSchema),
          ),
        }),
      ),
    }),
  ),
  condition: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        type: Schema.optional(Schema.suspend(() => AlertConditionTypeSchema)),
      }),
    ),
  ),
  state: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
  next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
  checks: Schema.optional(Schema.Array(Schema.suspend(() => AlertCheckSchema))),
  checks_total: Schema.optional(Schema.NullOr(Schema.Number)),
  config: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        check_ongoing_interval: Schema.optional(Schema.NullOr(Schema.Boolean)),
        series_index: Schema.optional(Schema.Number),
        type: Schema.optional(Schema.Literals(["TrendsAlertConfig"])),
      }),
    ),
  ),
  detector_config: Schema.optional(Schema.Unknown),
  calculation_interval: Schema.optional(
    Schema.Literals(["hourly", "daily", "weekly", "monthly"]),
  ),
  snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
  skip_weekend: Schema.optional(Schema.NullOr(Schema.Boolean)),
  schedule_restriction: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        blocked_windows: Schema.optional(
          Schema.Array(
            Schema.suspend(() => AlertScheduleRestrictionWindowSchema),
          ),
        ),
      }),
    ),
  ),
  last_value: Schema.optional(Schema.NullOr(Schema.Number)),
  investigation_agent_enabled: Schema.optional(Schema.Boolean),
  investigation_gates_notifications: Schema.optional(Schema.Boolean),
  investigation_inconclusive_action: Schema.optional(
    Schema.Literals(["notify", "suppress"]),
  ),
});
export type AlertsUpdateOutput = typeof AlertsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const alertsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsUpdateInput,
  outputSchema: AlertsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
