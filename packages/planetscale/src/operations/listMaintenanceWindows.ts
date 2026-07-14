import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListMaintenanceWindowsInput {
  id: string;
  organization: string;
  database: string;
  page?: number;
  per_page?: number;
}
export const ListMaintenanceWindowsInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/maintenance-schedules/{id}/windows",
    }),
  ) as unknown as Schema.Codec<ListMaintenanceWindowsInput>;

// Output Schema
export interface ListMaintenanceWindowsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    created_at: string;
    updated_at: string;
    started_at: string | null;
    finished_at: string | null;
  }[];
}
export const ListMaintenanceWindowsOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        started_at: Schema.NullOr(Schema.String),
        finished_at: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ListMaintenanceWindowsOutput>;

// The operation
/**
 * List maintenance windows
 *
 * @param id - The ID of the maintenance schedule
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listMaintenanceWindows =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListMaintenanceWindowsInput,
    outputSchema: ListMaintenanceWindowsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
