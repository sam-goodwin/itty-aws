import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsDataSourcesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/data_sources/",
    }),
  );
export type MarketingAnalyticsDataSourcesRetrieveInput =
  typeof MarketingAnalyticsDataSourcesRetrieveInput.Type;

// Output Schema
export const MarketingAnalyticsDataSourcesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrations: Schema.Array(
      Schema.Struct({
        source_type: Schema.String,
        is_native: Schema.Boolean,
        display_name: Schema.String,
        connected: Schema.Boolean,
        last_sync_at: Schema.NullOr(Schema.String),
        last_sync_status: Schema.String,
        last_error: Schema.NullOr(Schema.String),
        rows_last_24h: Schema.Number,
        rows_last_7d: Schema.Number,
        sources_map_present: Schema.Boolean,
        schema_columns_mapped: Schema.Array(Schema.String),
        schema_columns_required_missing: Schema.Array(Schema.String),
        required_tables: Schema.Array(
          Schema.Struct({
            table_name: Schema.String,
            present: Schema.Boolean,
            should_sync: Schema.Boolean,
            status: Schema.NullOr(Schema.String),
            last_synced_at: Schema.NullOr(Schema.String),
          }),
        ),
        settings_url: Schema.String,
        schemas_url: Schema.NullOr(Schema.String),
        diagnosis: Schema.String,
        fix_suggestion: Schema.NullOr(Schema.String),
      }),
    ),
    has_any_data: Schema.Boolean,
    overall_status: Schema.String,
    issues_summary: Schema.Array(Schema.String),
  });
export type MarketingAnalyticsDataSourcesRetrieveOutput =
  typeof MarketingAnalyticsDataSourcesRetrieveOutput.Type;

// The operation
/**
 * List marketing data sources
 *
 * Check the platform → data-warehouse side of every native marketing integration: connection state, sync recency, row counts, required-table status, and schema-mapping coverage. Read-only.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param source_type - Optional. Restrict to one integration (e.g. 'GoogleAds').
 */
export const marketingAnalyticsDataSourcesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsDataSourcesRetrieveInput,
    outputSchema: MarketingAnalyticsDataSourcesRetrieveOutput,
  }));
