import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsRunInsightsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    output_format: Schema.optional(Schema.Literals(["json", "optimized"])),
    refresh: Schema.optional(
      Schema.Literals(["blocking", "force_blocking", "force_cache"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{id}/run_insights/",
    }),
  );
export type DashboardsRunInsightsRetrieveInput =
  typeof DashboardsRunInsightsRetrieveInput.Type;

// Output Schema
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
  });
export type DashboardsRunInsightsRetrieveOutput =
  typeof DashboardsRunInsightsRetrieveOutput.Type;

// The operation
/**
 * Run all insights on a dashboard and return their results.
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param output_format - 'optimized' (default) returns LLM-friendly formatted text per insight. 'json' returns the raw query result objects.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param refresh - Cache behavior. 'force_cache' (default) serves from cache even if stale. 'blocking' uses cache if fresh, otherwise recalculates. 'force_blocking' always recalculates.
 */
export const dashboardsRunInsightsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsRunInsightsRetrieveInput,
    outputSchema: DashboardsRunInsightsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
