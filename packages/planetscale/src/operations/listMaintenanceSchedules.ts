import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListMaintenanceSchedulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/maintenance-schedules",
    }),
  );
export type ListMaintenanceSchedulesInput =
  typeof ListMaintenanceSchedulesInput.Type;

// Output Schema
export const ListMaintenanceSchedulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type ListMaintenanceSchedulesOutput =
  typeof ListMaintenanceSchedulesOutput.Type;

// The operation
/**
 * List maintenance schedules
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listMaintenanceSchedules =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListMaintenanceSchedulesInput,
    outputSchema: ListMaintenanceSchedulesOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
