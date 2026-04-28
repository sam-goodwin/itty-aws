import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const AppMetricsHistoricalExportsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plugin_config_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/app_metrics/{plugin_config_id}/historical_exports/",
    }),
  );
export type AppMetricsHistoricalExportsListInput =
  typeof AppMetricsHistoricalExportsListInput.Type;

// Output Schema
export const AppMetricsHistoricalExportsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppMetricsHistoricalExportsListOutput =
  typeof AppMetricsHistoricalExportsListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const appMetricsHistoricalExportsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppMetricsHistoricalExportsListInput,
    outputSchema: AppMetricsHistoricalExportsListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
