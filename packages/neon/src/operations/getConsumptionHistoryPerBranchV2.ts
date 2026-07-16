import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetConsumptionHistoryPerBranchV2Input {
  cursor?: string;
  limit?: number;
  project_ids: string;
  branch_ids?: string;
  from: string;
  to: string;
  granularity: string;
  org_id: string;
  metrics: string;
}
export const GetConsumptionHistoryPerBranchV2Input =
  /*@__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    project_ids: Schema.String,
    branch_ids: Schema.optional(Schema.String),
    from: Schema.String,
    to: Schema.String,
    granularity: Schema.String,
    org_id: Schema.String,
    metrics: Schema.String,
  }).pipe(
    T.Http({ method: "GET", path: "/consumption_history/v2/branches" }),
  ) as unknown as Schema.Codec<GetConsumptionHistoryPerBranchV2Input>;

// Output Schema
export interface GetConsumptionHistoryPerBranchV2Output {
  branches: {
    project_id: string;
    branch_id: string;
    periods: {
      period_id: string;
      period_plan: string;
      period_start: string;
      period_end?: string;
      consumption: {
        timeframe_start?: string;
        timeframe_end?: string;
        metrics?: { metric_name: string; value: number }[];
      }[];
    }[];
  }[];
  pagination?: { cursor: string };
}
export const GetConsumptionHistoryPerBranchV2Output =
  /*@__PURE__*/ Schema.Struct({
    branches: Schema.Array(
      Schema.Struct({
        project_id: Schema.String,
        branch_id: Schema.String,
        periods: Schema.Array(
          Schema.Struct({
            period_id: Schema.String,
            period_plan: Schema.String,
            period_start: Schema.String,
            period_end: Schema.optional(Schema.String),
            consumption: Schema.Array(
              Schema.Struct({
                timeframe_start: Schema.optional(Schema.String),
                timeframe_end: Schema.optional(Schema.String),
                metrics: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      metric_name: Schema.String,
                      value: Schema.Number,
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    pagination: Schema.optional(
      Schema.Struct({
        cursor: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetConsumptionHistoryPerBranchV2Output>;

// The operation
/**
 * Retrieve branch consumption metrics
 *
 * Returns consumption metrics for each branch across one or more projects listed in
 * `project_ids` (1 to 100 projects). Available for accounts on paid usage-based Launch, Scale,
 * Agent, and Enterprise plans.
 * History starts when the account first ingests branch-level consumption data.
 * The `metrics` query parameter is required. Only these six values are supported on this
 * endpoint:
 * `compute_unit_seconds`, `root_branch_bytes_month`, `child_branch_bytes_month`,
 * `instant_restore_bytes_month`, `public_network_transfer_bytes`, `private_network_transfer_bytes`.
 * This endpoint does not support `extra_branches_month` or `snapshot_storage_bytes_month`.
 * Use `GET /consumption_history/v2/projects` for those.
 * Consumption metrics within each branch are returned in ascending time order (oldest first).
 * This request does not wake project computes.
 *
 * @param cursor - Cursor from the previous response (`pagination.cursor`). Pass it to fetch the next page
of branches. Pages are ordered by project ID, then branch ID.

 * @param limit - Maximum number of branches per page. Allowed range: 1 to 1000. Default: 100.

 * @param project_ids - Project IDs to include (required, 1 to 100). Returns metrics for branches in these projects.

Pass multiple IDs as repeated query parameters or a comma-separated list:
- `project_ids=cold-poetry-09157238&project_ids=quiet-snow-71788278`
- `project_ids=cold-poetry-09157238,quiet-snow-71788278`

 * @param branch_ids - Optional branch IDs to filter the response (up to 100). If omitted, all branches in the
listed projects are included.

Pass multiple IDs as repeated query parameters or a comma-separated list:
- `branch_ids=br-aged-salad-637688&branch_ids=br-sweet-breeze-497520`
- `branch_ids=br-aged-salad-637688,br-sweet-breeze-497520`

 * @param from - Specify the start `date-time` for the consumption period.
The `date-time` value is rounded according to the specified `granularity`.
For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
The specified `date-time` value must respect the specified `granularity`:
- For `hourly`, consumption metrics are limited to the last 168 hours.
- For `daily`, consumption metrics are limited to the last 60 days.
- For `monthly`, consumption metrics are limited to the last year.

Branch-level metrics are returned from when the account first ingests branch-level
consumption data. Periods before that time contain no branch metrics.

 * @param to - Specify the end `date-time` for the consumption period.
The `date-time` value is rounded according to the specified `granularity`.
For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
The specified `date-time` value must respect the specified `granularity`:
- For `hourly`, consumption metrics are limited to the last 168 hours.
- For `daily`, consumption metrics are limited to the last 60 days.
- For `monthly`, consumption metrics are limited to the last year.

 * @param granularity - Specify the granularity of consumption metrics.
Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days,
and 1 year, respectively.

 * @param org_id - Organization ID. Metrics are returned for projects in this organization.

 * @param metrics - Required. List the metrics to return. Only these values are supported:
- `compute_unit_seconds`
- `root_branch_bytes_month`
- `child_branch_bytes_month`
- `instant_restore_bytes_month`
- `public_network_transfer_bytes`
- `private_network_transfer_bytes`

Not supported on this endpoint: `extra_branches_month`, `snapshot_storage_bytes_month`.
Use `GET /consumption_history/v2/projects` for those.

Pass multiple values as repeated query parameters or a comma-separated list:
- `metrics=compute_unit_seconds&metrics=public_network_transfer_bytes`
- `metrics=compute_unit_seconds,public_network_transfer_bytes`

 */
export const getConsumptionHistoryPerBranchV2 =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: GetConsumptionHistoryPerBranchV2Input,
    outputSchema: GetConsumptionHistoryPerBranchV2Output,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "cursor",
      inputToken: "cursor",
      outputToken: "pagination.cursor",
      items: "branches",
    },
  }));
