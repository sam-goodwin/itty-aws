import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ScheduledChangesPartialUpdateInput {
  id: number;
  project_id: string;
  team_id?: number;
  record_id?: string;
  model_name?: "FeatureFlag";
  payload?: unknown;
  scheduled_at?: string;
  executed_at?: string | null;
  failure_reason?: string | null;
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
  };
  updated_at?: string;
  is_recurring?: boolean;
  recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | null;
  cron_expression?: string | null;
  last_executed_at?: string | null;
  end_date?: string | null;
  timezone?: string | null;
}
export const ScheduledChangesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    team_id: Schema.optional(Schema.Number),
    record_id: Schema.optional(Schema.String),
    model_name: Schema.optional(Schema.Literals(["FeatureFlag"])),
    payload: Schema.optional(Schema.Unknown),
    scheduled_at: Schema.optional(Schema.String),
    executed_at: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
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
    updated_at: Schema.optional(Schema.String),
    is_recurring: Schema.optional(Schema.Boolean),
    recurrence_interval: Schema.optional(
      Schema.NullOr(Schema.Literals(["daily", "weekly", "monthly", "yearly"])),
    ),
    cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/scheduled_changes/{id}/",
    }),
  ) as unknown as Schema.Codec<ScheduledChangesPartialUpdateInput>;

// Output Schema
export interface ScheduledChangesPartialUpdateOutput {
  id: number;
  team_id: number;
  record_id: string;
  model_name: "FeatureFlag";
  payload: unknown;
  scheduled_at: string;
  executed_at: string | null;
  failure_reason: string | null;
  created_at: string;
  created_by: {
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
  };
  updated_at: string;
  is_recurring?: boolean;
  recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | null;
  cron_expression?: string | null;
  last_executed_at: string | null;
  end_date?: string | null;
  timezone: string | null;
}
export const ScheduledChangesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    team_id: Schema.Number,
    record_id: Schema.String,
    model_name: Schema.Literals(["FeatureFlag"]),
    payload: Schema.Unknown,
    scheduled_at: Schema.String,
    executed_at: Schema.NullOr(Schema.String),
    failure_reason: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    created_by: Schema.Struct({
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
    updated_at: Schema.String,
    is_recurring: Schema.optional(Schema.Boolean),
    recurrence_interval: Schema.optional(
      Schema.NullOr(Schema.Literals(["daily", "weekly", "monthly", "yearly"])),
    ),
    cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.NullOr(Schema.String),
    end_date: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<ScheduledChangesPartialUpdateOutput>;

// The operation
/**
 * Create, read, update and delete scheduled changes.
 *
 * @param id - A unique integer value identifying this scheduled change.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const scheduledChangesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledChangesPartialUpdateInput,
    outputSchema: ScheduledChangesPartialUpdateOutput,
  }));
