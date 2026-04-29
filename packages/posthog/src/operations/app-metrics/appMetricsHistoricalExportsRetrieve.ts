import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AppMetricsHistoricalExportsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    plugin_config_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/app_metrics/{plugin_config_id}/historical_exports/{id}/",
    }),
  );
export type AppMetricsHistoricalExportsRetrieveInput =
  typeof AppMetricsHistoricalExportsRetrieveInput.Type;

// Output Schema
export const AppMetricsHistoricalExportsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type AppMetricsHistoricalExportsRetrieveOutput =
  typeof AppMetricsHistoricalExportsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const appMetricsHistoricalExportsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppMetricsHistoricalExportsRetrieveInput,
    outputSchema: AppMetricsHistoricalExportsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
