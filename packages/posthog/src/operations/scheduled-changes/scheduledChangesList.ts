import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ScheduledChangesListInput {
  project_id: string;
  limit?: number;
  model_name?: string;
  offset?: number;
  record_id?: string;
}
export const ScheduledChangesListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    model_name: Schema.optional(Schema.String),
    offset: Schema.optional(Schema.Number),
    record_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/scheduled_changes/",
    }),
  ) as unknown as Schema.Codec<ScheduledChangesListInput>;

// Output Schema
export interface ScheduledChangesListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const ScheduledChangesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
          Schema.NullOr(
            Schema.Literals(["daily", "weekly", "monthly", "yearly"]),
          ),
        ),
        cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
        last_executed_at: Schema.NullOr(Schema.String),
        end_date: Schema.optional(Schema.NullOr(Schema.String)),
        timezone: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScheduledChangesListOutput>;

// The operation
/**
 * Create, read, update and delete scheduled changes.
 *
 * @param limit - Number of results to return per page.
 * @param model_name - Filter by model type. Use "FeatureFlag" to see feature flag schedules.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param record_id - Filter by the ID of a specific feature flag.
 */
export const scheduledChangesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScheduledChangesListInput,
  outputSchema: ScheduledChangesListOutput,
}));
