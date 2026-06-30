import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetConsumptionHistoryPerProjectV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    project_ids: Schema.optional(Schema.String),
    from: Schema.String,
    to: Schema.String,
    granularity: Schema.String,
    org_id: Schema.String,
    metrics: Schema.String,
  }).pipe(T.Http({ method: "GET", path: "/consumption_history/v2/projects" }));
export type GetConsumptionHistoryPerProjectV2Input =
  typeof GetConsumptionHistoryPerProjectV2Input.Type;

// Output Schema
export const GetConsumptionHistoryPerProjectV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projects: Schema.Array(
      Schema.Struct({
        project_id: Schema.String,
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
  });
export type GetConsumptionHistoryPerProjectV2Output =
  typeof GetConsumptionHistoryPerProjectV2Output.Type;

// The operation
/**
 * Retrieve project consumption metrics
 *
 * Returns consumption metrics for up to `limit` projects per page. If `project_ids` is omitted,
 * projects in the organization are included across pages (use `cursor`). If `project_ids` is
 * provided, the response is limited to those projects (up to 100). Available for accounts on
 * Launch, Scale, Agent, Business, and Enterprise plans.
 * History starts when the account upgrades to an eligible plan.
 * The `metrics` query parameter is required. Supported values:
 * `compute_unit_seconds`, `root_branch_bytes_month`, `child_branch_bytes_month`,
 * `instant_restore_bytes_month`, `public_network_transfer_bytes`, `private_network_transfer_bytes`,
 * `extra_branches_month`, `snapshot_storage_bytes_month`.
 * Consumption metrics within each project are returned in ascending time order (oldest first).
 * This request does not wake project computes.
 *
 * @param cursor - Cursor from the previous response (`pagination.cursor`). Pass it to fetch the next page
of projects. Pages are ordered by project creation order (newest first).

 * @param limit - Maximum number of projects per page. Allowed range: 1 to 100. Default: 10.

 * @param project_ids - Optional project IDs to filter the response (up to 100). If omitted, projects in the
organization are included across pages (use `cursor` and `limit`).

Pass multiple IDs as repeated query parameters or a comma-separated list:
- `project_ids=cold-poetry-09157238&project_ids=quiet-snow-71788278`
- `project_ids=cold-poetry-09157238,quiet-snow-71788278`

 * @param from - Specify the start `date-time` for the consumption period.
The `date-time` value is rounded according to the specified `granularity`.
For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
The specified `date-time` value must respect the specified `granularity`:
- For `hourly`, consumption metrics are limited to the last 168 hours.
- For `daily`, consumption metrics are limited to the last 60 days.
- For `monthly`, consumption metrics are limited to the last year.

The earliest allowed `from` value is `March 1, 2024, at 00:00:00 UTC`.
Metrics are returned from when the account upgraded to an eligible plan, which may be
later than that date.

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

 * @param metrics - Required. List the metrics to return. Supported values:
- `compute_unit_seconds`
- `root_branch_bytes_month`
- `child_branch_bytes_month`
- `instant_restore_bytes_month`
- `public_network_transfer_bytes`
- `private_network_transfer_bytes`
- `extra_branches_month`
- `snapshot_storage_bytes_month`

Pass multiple values as repeated query parameters or a comma-separated list:
- `metrics=compute_unit_seconds&metrics=extra_branches_month`
- `metrics=compute_unit_seconds,extra_branches_month`

 */
export const getConsumptionHistoryPerProjectV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: GetConsumptionHistoryPerProjectV2Input,
    outputSchema: GetConsumptionHistoryPerProjectV2Output,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "cursor",
      inputToken: "cursor",
      outputToken: "pagination.cursor",
      items: "projects",
    },
  }));
