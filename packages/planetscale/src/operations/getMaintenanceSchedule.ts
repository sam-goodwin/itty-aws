import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetMaintenanceScheduleInput {
  id: string;
  organization: string;
  database: string;
}
export const GetMaintenanceScheduleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/maintenance-schedules/{id}",
    }),
  ) as unknown as Schema.Codec<GetMaintenanceScheduleInput>;

// Output Schema
export interface GetMaintenanceScheduleOutput {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  last_window_datetime: string;
  next_window_datetime: string;
  duration: number;
  day: number;
  hour: number;
  week: number;
  frequency_value: number;
  frequency_unit: "day" | "week" | "month" | "once";
  enabled: boolean;
  expires_at: string | null;
  deadline_at: string | null;
  required: boolean;
  pending_vitess_version_update: boolean;
  pending_vitess_version: string | null;
  pending_mysql_version_update: boolean;
  pending_mysql_version: string | null;
}
export const GetMaintenanceScheduleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    last_window_datetime: Schema.String,
    next_window_datetime: Schema.String,
    duration: Schema.Number,
    day: Schema.Number,
    hour: Schema.Number,
    week: Schema.Number,
    frequency_value: Schema.Number,
    frequency_unit: Schema.Literals(["day", "week", "month", "once"]),
    enabled: Schema.Boolean,
    expires_at: Schema.NullOr(Schema.String),
    deadline_at: Schema.NullOr(Schema.String),
    required: Schema.Boolean,
    pending_vitess_version_update: Schema.Boolean,
    pending_vitess_version: Schema.NullOr(Schema.String),
    pending_mysql_version_update: Schema.Boolean,
    pending_mysql_version: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<GetMaintenanceScheduleOutput>;

// The operation
/**
 * Get a maintenance schedule
 *
 * @param id - The ID of the maintenance schedule
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 */
export const getMaintenanceSchedule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetMaintenanceScheduleInput,
    outputSchema: GetMaintenanceScheduleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
