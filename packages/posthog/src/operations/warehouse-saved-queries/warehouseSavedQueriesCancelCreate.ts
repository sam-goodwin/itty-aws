import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseSavedQueriesCancelCreateInput {
  id: string;
  project_id: string;
  deleted?: boolean | null;
  name?: string;
  query?: { kind?: "HogQLQuery"; query: string };
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
  created_at?: string;
  sync_frequency?:
    | "never"
    | "15min"
    | "30min"
    | "1hour"
    | "6hour"
    | "12hour"
    | "24hour"
    | "7day"
    | "30day"
    | null;
  columns?: Record<string, unknown>[];
  status?: "Cancelled" | "Modified" | "Completed" | "Failed" | "Running" | null;
  last_run_at?: string | null;
  managed_viewset_kind?: string | null;
  folder_id?: string | null;
  folder_name?: string | null;
  latest_error?: string | null;
  edited_history_id?: string | null;
  latest_history_id?: number | null;
  soft_update?: boolean | null;
  dag_id?: string | null;
  is_materialized?: boolean | null;
  origin?: "data_warehouse" | "endpoint" | "managed_viewset" | null;
  is_test?: boolean;
  expires_at?: string | null;
  user_access_level?: string | null;
}
export const WarehouseSavedQueriesCancelCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.optional(Schema.String),
    query: Schema.optional(
      Schema.Struct({
        kind: Schema.optional(Schema.Literals(["HogQLQuery"])),
        query: Schema.String,
      }),
    ),
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
    created_at: Schema.optional(Schema.String),
    sync_frequency: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "never",
          "15min",
          "30min",
          "1hour",
          "6hour",
          "12hour",
          "24hour",
          "7day",
          "30day",
        ]),
      ),
    ),
    columns: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    status: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "Cancelled",
          "Modified",
          "Completed",
          "Failed",
          "Running",
        ]),
      ),
    ),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    managed_viewset_kind: Schema.optional(Schema.NullOr(Schema.String)),
    folder_id: Schema.optional(Schema.NullOr(Schema.String)),
    folder_name: Schema.optional(Schema.NullOr(Schema.String)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    edited_history_id: Schema.optional(Schema.NullOr(Schema.String)),
    latest_history_id: Schema.optional(Schema.NullOr(Schema.Number)),
    soft_update: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dag_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
    origin: Schema.optional(
      Schema.NullOr(
        Schema.Literals(["data_warehouse", "endpoint", "managed_viewset"]),
      ),
    ),
    is_test: Schema.optional(Schema.Boolean),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_saved_queries/{id}/cancel/",
    }),
  ) as unknown as Schema.Codec<WarehouseSavedQueriesCancelCreateInput>;

// Output Schema
export interface WarehouseSavedQueriesCancelCreateOutput {
  id?: string;
  deleted?: boolean | null;
  name?: string;
  query?: { kind?: "HogQLQuery"; query: string };
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
  created_at?: string;
  sync_frequency?:
    | "never"
    | "15min"
    | "30min"
    | "1hour"
    | "6hour"
    | "12hour"
    | "24hour"
    | "7day"
    | "30day"
    | null;
  columns?: Record<string, unknown>[];
  status?: "Cancelled" | "Modified" | "Completed" | "Failed" | "Running" | null;
  last_run_at?: string | null;
  managed_viewset_kind?: string | null;
  folder_id?: string | null;
  folder_name?: string | null;
  latest_error?: string | null;
  edited_history_id?: string | null;
  latest_history_id?: number | null;
  soft_update?: boolean | null;
  dag_id?: string | null;
  is_materialized?: boolean | null;
  origin?: "data_warehouse" | "endpoint" | "managed_viewset" | null;
  is_test?: boolean;
  expires_at?: string | null;
  user_access_level?: string | null;
}
export const WarehouseSavedQueriesCancelCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.optional(Schema.String),
    query: Schema.optional(
      Schema.Struct({
        kind: Schema.optional(Schema.Literals(["HogQLQuery"])),
        query: Schema.String,
      }),
    ),
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
    created_at: Schema.optional(Schema.String),
    sync_frequency: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "never",
          "15min",
          "30min",
          "1hour",
          "6hour",
          "12hour",
          "24hour",
          "7day",
          "30day",
        ]),
      ),
    ),
    columns: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    status: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "Cancelled",
          "Modified",
          "Completed",
          "Failed",
          "Running",
        ]),
      ),
    ),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    managed_viewset_kind: Schema.optional(Schema.NullOr(Schema.String)),
    folder_id: Schema.optional(Schema.NullOr(Schema.String)),
    folder_name: Schema.optional(Schema.NullOr(Schema.String)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    edited_history_id: Schema.optional(Schema.NullOr(Schema.String)),
    latest_history_id: Schema.optional(Schema.NullOr(Schema.Number)),
    soft_update: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dag_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
    origin: Schema.optional(
      Schema.NullOr(
        Schema.Literals(["data_warehouse", "endpoint", "managed_viewset"]),
      ),
    ),
    is_test: Schema.optional(Schema.Boolean),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<WarehouseSavedQueriesCancelCreateOutput>;

// The operation
/**
 * Cancel a running saved query workflow.
 *
 * @param id - A UUID string identifying this data warehouse saved query.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueriesCancelCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueriesCancelCreateInput,
    outputSchema: WarehouseSavedQueriesCancelCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
