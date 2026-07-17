import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CreateBackupPolicyInput {
  organization: string;
  database: string;
  name?: string;
  target?: "production" | "development";
  retention_value?: number;
  retention_unit?: "hour" | "day" | "week" | "month" | "year";
  frequency_value?: number;
  frequency_unit?: "hour" | "day" | "week" | "month";
  schedule_time?: string;
  schedule_day?: number;
  schedule_week?: number;
}
export const CreateBackupPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    target: Schema.optional(Schema.Literals(["production", "development"])),
    retention_value: Schema.optional(Schema.Number),
    retention_unit: Schema.optional(
      Schema.Literals(["hour", "day", "week", "month", "year"]),
    ),
    frequency_value: Schema.optional(Schema.Number),
    frequency_unit: Schema.optional(
      Schema.Literals(["hour", "day", "week", "month"]),
    ),
    schedule_time: Schema.optional(Schema.String),
    schedule_day: Schema.optional(Schema.Number),
    schedule_week: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/databases/{database}/backup-policies",
    }),
  ) as unknown as Schema.Codec<CreateBackupPolicyInput>;

// Output Schema
export interface CreateBackupPolicyOutput {
  id: string;
  display_name: string;
  name: string;
  target: "production" | "development";
  retention_value: number;
  retention_unit: string;
  frequency_value: number;
  frequency_unit: string;
  schedule_time: string;
  schedule_day: number | null;
  schedule_week: number | null;
  created_at: string;
  updated_at: string;
  last_ran_at: string | null;
  next_run_at: string | null;
  required: boolean;
}
export const CreateBackupPolicyOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    display_name: Schema.String,
    name: Schema.String,
    target: Schema.Literals(["production", "development"]),
    retention_value: Schema.Number,
    retention_unit: Schema.String,
    frequency_value: Schema.Number,
    frequency_unit: Schema.String,
    schedule_time: Schema.String,
    schedule_day: Schema.NullOr(Schema.Number),
    schedule_week: Schema.NullOr(Schema.Number),
    created_at: Schema.String,
    updated_at: Schema.String,
    last_ran_at: Schema.NullOr(Schema.String),
    next_run_at: Schema.NullOr(Schema.String),
    required: Schema.Boolean,
  }) as unknown as Schema.Codec<CreateBackupPolicyOutput>;

// The operation
/**
 * Create a backup policy
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param name - The name of the backup policy
 * @param target - Whether the policy is for production or development branches
 * @param retention_value - A number value for the retention period of the backup policy
 * @param retention_unit - The unit for the retention period of the backup policy
 * @param frequency_value - A number value for the frequency of the backup policy
 * @param frequency_unit - The unit for the frequency of the backup policy
 * @param schedule_time - The time of day that the backup is scheduled, in HH:MM format
 * @param schedule_day - Day of the week that the backup is scheduled. 0 is Sunday, 6 is Saturday
 * @param schedule_week - Week of the month that the backup is scheduled. 0 is the first week, 3 is the fourth week
 */
export const createBackupPolicy = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateBackupPolicyInput,
  outputSchema: CreateBackupPolicyOutput,
  errors: [Forbidden, NotFound] as const,
}));
