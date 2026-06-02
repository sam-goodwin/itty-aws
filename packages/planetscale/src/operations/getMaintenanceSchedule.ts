import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
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
  );
export type GetMaintenanceScheduleInput =
  typeof GetMaintenanceScheduleInput.Type;

// Output Schema
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
  });
export type GetMaintenanceScheduleOutput =
  typeof GetMaintenanceScheduleOutput.Type;

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
