import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExternalDataSchemasCreateInput {
  project_id: string;
  id?: string;
  name?: string;
  label?: string | null;
  table?: Record<string, unknown> | null;
  should_sync?: boolean;
  last_synced_at?: string | null;
  latest_error?: string | null;
  incremental?: boolean;
  status?: string | null;
  sync_type?:
    | "full_refresh"
    | "incremental"
    | "append"
    | "webhook"
    | "cdc"
    | "xmin"
    | null;
  incremental_field?: string | null;
  incremental_field_type?:
    | "integer"
    | "numeric"
    | "datetime"
    | "date"
    | "timestamp"
    | "objectid"
    | "xid"
    | null;
  incremental_field_lookback_seconds?: number | null;
  sync_frequency?:
    | "never"
    | "1min"
    | "5min"
    | "15min"
    | "30min"
    | "1hour"
    | "6hour"
    | "12hour"
    | "24hour"
    | "7day"
    | "30day"
    | null;
  sync_time_of_day?: string | null;
  description?: string | null;
  primary_key_columns?: string[] | null;
  cdc_table_mode?: "consolidated" | "cdc_only" | "both" | null;
  enabled_columns?: string[] | null;
  row_filters?: { column: string; operator: string; value: unknown }[] | null;
  available_columns?: {
    name: string;
    data_type?: string;
    is_nullable?: boolean;
  }[];
  source?: {
    id?: string;
    source_type?: string;
    supports_column_selection?: boolean;
    user_access_level?: string | null;
  } | null;
}
export const ExternalDataSchemasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    label: Schema.optional(Schema.NullOr(Schema.String)),
    table: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    should_sync: Schema.optional(Schema.Boolean),
    last_synced_at: Schema.optional(Schema.NullOr(Schema.String)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    incremental: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.NullOr(Schema.String)),
    sync_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "full_refresh",
          "incremental",
          "append",
          "webhook",
          "cdc",
          "xmin",
        ]),
      ),
    ),
    incremental_field: Schema.optional(Schema.NullOr(Schema.String)),
    incremental_field_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "integer",
          "numeric",
          "datetime",
          "date",
          "timestamp",
          "objectid",
          "xid",
        ]),
      ),
    ),
    incremental_field_lookback_seconds: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    sync_frequency: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "never",
          "1min",
          "5min",
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
    sync_time_of_day: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    primary_key_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    cdc_table_mode: Schema.optional(
      Schema.NullOr(Schema.Literals(["consolidated", "cdc_only", "both"])),
    ),
    enabled_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    row_filters: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            column: Schema.String,
            operator: Schema.String,
            value: Schema.Unknown,
          }),
        ),
      ),
    ),
    available_columns: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          data_type: Schema.optional(Schema.String),
          is_nullable: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    source: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          source_type: Schema.optional(Schema.String),
          supports_column_selection: Schema.optional(Schema.Boolean),
          user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_schemas/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSchemasCreateInput>;

// Output Schema
export interface ExternalDataSchemasCreateOutput {
  id?: string;
  name?: string;
  label?: string | null;
  table?: Record<string, unknown> | null;
  should_sync?: boolean;
  last_synced_at?: string | null;
  latest_error?: string | null;
  incremental?: boolean;
  status?: string | null;
  sync_type?:
    | "full_refresh"
    | "incremental"
    | "append"
    | "webhook"
    | "cdc"
    | "xmin"
    | null;
  incremental_field?: string | null;
  incremental_field_type?:
    | "integer"
    | "numeric"
    | "datetime"
    | "date"
    | "timestamp"
    | "objectid"
    | "xid"
    | null;
  incremental_field_lookback_seconds?: number | null;
  sync_frequency?:
    | "never"
    | "1min"
    | "5min"
    | "15min"
    | "30min"
    | "1hour"
    | "6hour"
    | "12hour"
    | "24hour"
    | "7day"
    | "30day"
    | null;
  sync_time_of_day?: string | null;
  description?: string | null;
  primary_key_columns?: string[] | null;
  cdc_table_mode?: "consolidated" | "cdc_only" | "both" | null;
  enabled_columns?: string[] | null;
  row_filters?: { column: string; operator: string; value: unknown }[] | null;
  available_columns?: {
    name: string;
    data_type?: string;
    is_nullable?: boolean;
  }[];
  source?: {
    id?: string;
    source_type?: string;
    supports_column_selection?: boolean;
    user_access_level?: string | null;
  } | null;
}
export const ExternalDataSchemasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    label: Schema.optional(Schema.NullOr(Schema.String)),
    table: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    should_sync: Schema.optional(Schema.Boolean),
    last_synced_at: Schema.optional(Schema.NullOr(Schema.String)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    incremental: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.NullOr(Schema.String)),
    sync_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "full_refresh",
          "incremental",
          "append",
          "webhook",
          "cdc",
          "xmin",
        ]),
      ),
    ),
    incremental_field: Schema.optional(Schema.NullOr(Schema.String)),
    incremental_field_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "integer",
          "numeric",
          "datetime",
          "date",
          "timestamp",
          "objectid",
          "xid",
        ]),
      ),
    ),
    incremental_field_lookback_seconds: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    sync_frequency: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "never",
          "1min",
          "5min",
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
    sync_time_of_day: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    primary_key_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    cdc_table_mode: Schema.optional(
      Schema.NullOr(Schema.Literals(["consolidated", "cdc_only", "both"])),
    ),
    enabled_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    row_filters: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            column: Schema.String,
            operator: Schema.String,
            value: Schema.Unknown,
          }),
        ),
      ),
    ),
    available_columns: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          data_type: Schema.optional(Schema.String),
          is_nullable: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    source: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          source_type: Schema.optional(Schema.String),
          supports_column_selection: Schema.optional(Schema.Boolean),
          user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ExternalDataSchemasCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSchemasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalDataSchemasCreateInput,
    outputSchema: ExternalDataSchemasCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
