import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface RemindersListInput {
  limit?: number;
  offset?: number;
}
export const RemindersListInput = /*@__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/reminders/" }),
) as unknown as Schema.Codec<RemindersListInput>;

// Output Schema
export interface RemindersListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    organization: string;
    team?: number | null;
    title: string;
    message?: string;
    resource_type?: string | null;
    resource_id?: string | null;
    scheduled_at?: string | null;
    recurrence_interval?: "daily" | "weekly" | "monthly" | "yearly" | "" | null;
    cron_expression?: string | null;
    timezone?: string;
    end_date?: string | null;
    next_fire_at: string | null;
    last_fired_at: string | null;
    status: "active" | "completed" | "errored";
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
    created_at: string;
    updated_at: string | null;
  }[];
}
export const RemindersListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      organization: Schema.String,
      team: Schema.optional(Schema.NullOr(Schema.Number)),
      title: Schema.String,
      message: Schema.optional(Schema.String),
      resource_type: Schema.optional(Schema.NullOr(Schema.String)),
      resource_id: Schema.optional(Schema.NullOr(Schema.String)),
      scheduled_at: Schema.optional(Schema.NullOr(Schema.String)),
      recurrence_interval: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["daily", "weekly", "monthly", "yearly"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      cron_expression: Schema.optional(Schema.NullOr(Schema.String)),
      timezone: Schema.optional(Schema.String),
      end_date: Schema.optional(Schema.NullOr(Schema.String)),
      next_fire_at: Schema.NullOr(Schema.String),
      last_fired_at: Schema.NullOr(Schema.String),
      status: Schema.Literals(["active", "completed", "errored"]),
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
      created_at: Schema.String,
      updated_at: Schema.NullOr(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RemindersListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const remindersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RemindersListInput,
  outputSchema: RemindersListOutput,
}));
