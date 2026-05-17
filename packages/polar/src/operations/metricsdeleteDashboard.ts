import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetricsdeleteDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v1/metrics/dashboards/{id}" }));
export type MetricsdeleteDashboardInput =
  typeof MetricsdeleteDashboardInput.Type;

// Output Schema
export const MetricsdeleteDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MetricsdeleteDashboardOutput =
  typeof MetricsdeleteDashboardOutput.Type;

// The operation
/**
 * Delete Metric Dashboard
 *
 * Delete a user-defined metric dashboard.
 * **Scopes**: `metrics:write`
 *
 * @param id - The metric dashboard ID.
 */
export const metricsdeleteDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsdeleteDashboardInput,
    outputSchema: MetricsdeleteDashboardOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
