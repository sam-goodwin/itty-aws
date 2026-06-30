import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsAlertsUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  enabled?: boolean;
  filters?: {
    filterGroup?: {
      type?: "AND" | "OR";
      values?: { type?: "AND" | "OR"; values?: unknown[] }[];
    } | null;
    serviceNames?: string[] | null;
    severityLevels?:
      | ("trace" | "debug" | "info" | "warn" | "error" | "fatal")[]
      | null;
  };
  threshold_count?: number;
  threshold_operator?: "above" | "below";
  window_minutes?: number;
  check_interval_minutes?: number;
  state?:
    | "not_firing"
    | "firing"
    | "pending_resolve"
    | "errored"
    | "snoozed"
    | "broken";
  evaluation_periods?: number;
  datapoints_to_alarm?: number;
  cooldown_minutes?: number;
  snooze_until?: string | null;
  next_check_at?: string | null;
  last_notified_at?: string | null;
  last_checked_at?: string | null;
  consecutive_failures?: number;
  last_error_message?: string | null;
  state_timeline?: {
    start?: string;
    end?: string;
    state?:
      | "not_firing"
      | "firing"
      | "pending_resolve"
      | "errored"
      | "snoozed"
      | "broken";
    enabled?: boolean;
  }[];
  destination_types?: ("slack" | "webhook" | "teams")[];
  first_enabled_at?: string | null;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  updated_at?: string | null;
}
export const LogsAlertsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  filters: Schema.optional(
    Schema.Struct({
      filterGroup: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            type: Schema.optional(Schema.Literals(["AND", "OR"])),
            values: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.Literals(["AND", "OR"])),
                  values: Schema.optional(Schema.Array(Schema.Unknown)),
                }),
              ),
            ),
          }),
        ),
      ),
      serviceNames: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
      severityLevels: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Literals([
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
            ]),
          ),
        ),
      ),
    }),
  ),
  threshold_count: Schema.optional(Schema.Number),
  threshold_operator: Schema.optional(Schema.Literals(["above", "below"])),
  window_minutes: Schema.optional(Schema.Number),
  check_interval_minutes: Schema.optional(Schema.Number),
  state: Schema.optional(
    Schema.Literals([
      "not_firing",
      "firing",
      "pending_resolve",
      "errored",
      "snoozed",
      "broken",
    ]),
  ),
  evaluation_periods: Schema.optional(Schema.Number),
  datapoints_to_alarm: Schema.optional(Schema.Number),
  cooldown_minutes: Schema.optional(Schema.Number),
  snooze_until: Schema.optional(Schema.NullOr(Schema.String)),
  next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
  consecutive_failures: Schema.optional(Schema.Number),
  last_error_message: Schema.optional(Schema.NullOr(Schema.String)),
  state_timeline: Schema.optional(
    Schema.Array(
      Schema.Struct({
        start: Schema.optional(Schema.String),
        end: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "not_firing",
            "firing",
            "pending_resolve",
            "errored",
            "snoozed",
            "broken",
          ]),
        ),
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
  destination_types: Schema.optional(
    Schema.Array(Schema.Literals(["slack", "webhook", "teams"])),
  ),
  first_enabled_at: Schema.optional(Schema.NullOr(Schema.String)),
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
        role_at_organization: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals([
                "engineering",
                "data",
                "product",
                "founder",
                "leadership",
                "marketing",
                "sales",
                "other",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        ),
      }),
    ),
  ),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/api/projects/{project_id}/logs/alerts/{id}/",
  }),
) as unknown as Schema.Codec<LogsAlertsUpdateInput>;

// Output Schema
export interface LogsAlertsUpdateOutput {
  id?: string;
  name?: string;
  enabled?: boolean;
  filters?: {
    filterGroup?: {
      type?: "AND" | "OR";
      values?: { type?: "AND" | "OR"; values?: unknown[] }[];
    } | null;
    serviceNames?: string[] | null;
    severityLevels?:
      | ("trace" | "debug" | "info" | "warn" | "error" | "fatal")[]
      | null;
  };
  threshold_count?: number;
  threshold_operator?: "above" | "below";
  window_minutes?: number;
  check_interval_minutes?: number;
  state?:
    | "not_firing"
    | "firing"
    | "pending_resolve"
    | "errored"
    | "snoozed"
    | "broken";
  evaluation_periods?: number;
  datapoints_to_alarm?: number;
  cooldown_minutes?: number;
  snooze_until?: string | null;
  next_check_at?: string | null;
  last_notified_at?: string | null;
  last_checked_at?: string | null;
  consecutive_failures?: number;
  last_error_message?: string | null;
  state_timeline?: {
    start?: string;
    end?: string;
    state?:
      | "not_firing"
      | "firing"
      | "pending_resolve"
      | "errored"
      | "snoozed"
      | "broken";
    enabled?: boolean;
  }[];
  destination_types?: ("slack" | "webhook" | "teams")[];
  first_enabled_at?: string | null;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  updated_at?: string | null;
}
export const LogsAlertsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    filters: Schema.optional(
      Schema.Struct({
        filterGroup: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["AND", "OR"])),
              values: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.Literals(["AND", "OR"])),
                    values: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              ),
            }),
          ),
        ),
        serviceNames: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        severityLevels: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "trace",
                "debug",
                "info",
                "warn",
                "error",
                "fatal",
              ]),
            ),
          ),
        ),
      }),
    ),
    threshold_count: Schema.optional(Schema.Number),
    threshold_operator: Schema.optional(Schema.Literals(["above", "below"])),
    window_minutes: Schema.optional(Schema.Number),
    check_interval_minutes: Schema.optional(Schema.Number),
    state: Schema.optional(
      Schema.Literals([
        "not_firing",
        "firing",
        "pending_resolve",
        "errored",
        "snoozed",
        "broken",
      ]),
    ),
    evaluation_periods: Schema.optional(Schema.Number),
    datapoints_to_alarm: Schema.optional(Schema.Number),
    cooldown_minutes: Schema.optional(Schema.Number),
    snooze_until: Schema.optional(Schema.NullOr(Schema.String)),
    next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
    consecutive_failures: Schema.optional(Schema.Number),
    last_error_message: Schema.optional(Schema.NullOr(Schema.String)),
    state_timeline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          start: Schema.optional(Schema.String),
          end: Schema.optional(Schema.String),
          state: Schema.optional(
            Schema.Literals([
              "not_firing",
              "firing",
              "pending_resolve",
              "errored",
              "snoozed",
              "broken",
            ]),
          ),
          enabled: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    destination_types: Schema.optional(
      Schema.Array(Schema.Literals(["slack", "webhook", "teams"])),
    ),
    first_enabled_at: Schema.optional(Schema.NullOr(Schema.String)),
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  },
) as unknown as Schema.Codec<LogsAlertsUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this logs alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsAlertsUpdateInput,
  outputSchema: LogsAlertsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
