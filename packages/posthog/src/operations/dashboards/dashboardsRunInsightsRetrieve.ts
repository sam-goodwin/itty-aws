import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DashboardsRunInsightsRetrieveInput {
  id: number;
  project_id: string;
  filters_override?: string;
  format?: "json" | "txt";
  output_format?: "json" | "optimized";
  refresh?: "blocking" | "force_blocking" | "force_cache";
  variables_override?: string;
}
export const DashboardsRunInsightsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters_override: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    output_format: Schema.optional(Schema.Literals(["json", "optimized"])),
    refresh: Schema.optional(
      Schema.Literals(["blocking", "force_blocking", "force_cache"]),
    ),
    variables_override: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{id}/run_insights/",
    }),
  ) as unknown as Schema.Codec<DashboardsRunInsightsRetrieveInput>;

// Output Schema
export interface DashboardsRunInsightsRetrieveOutput {
  results?: {
    id?: number;
    insight?: {
      id?: number;
      short_id?: string;
      name?: string | null;
      derived_name?: string | null;
      result?: unknown;
    };
  }[];
}
export const DashboardsRunInsightsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          insight: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              short_id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.NullOr(Schema.String)),
              derived_name: Schema.optional(Schema.NullOr(Schema.String)),
              result: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DashboardsRunInsightsRetrieveOutput>;

// The operation
/**
 * Run all insights on a dashboard and return their results.
 *
 * @param filters_override - Object (or pre-encoded JSON string) to override dashboard filters for this request only (not persisted). Top-level keys replace; nested values are not deep-merged — pass the complete value for any key you override. Accepts the same keys as the dashboard filters schema (e.g., `date_from`, `date_to`, `properties`). Ignored when accessed via a sharing token.
 * @param id - A unique integer value identifying this dashboard.
 * @param output_format - 'optimized' (default) returns LLM-friendly formatted text per insight. 'json' returns the raw query result objects.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param refresh - Cache behavior. 'force_cache' (default) serves from cache even if stale. 'blocking' uses cache if fresh, otherwise recalculates. 'force_blocking' always recalculates.
 * @param variables_override - Object (or pre-encoded JSON string) to override dashboard variables for this request only (not persisted). Format: {"<variable_id>": {"code_name": "<code_name>", "variableId": "<variable_id>", "value": <new_value>}}. Each entry must include `code_name` — partial entries are silently dropped. The simplest workflow is to call `dashboard-get` first, copy the matching entry from the response, and mutate `value`. Top-level keys replace; nested values are not deep-merged. Ignored when accessed via a sharing token.
 */
export const dashboardsRunInsightsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsRunInsightsRetrieveInput,
    outputSchema: DashboardsRunInsightsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
