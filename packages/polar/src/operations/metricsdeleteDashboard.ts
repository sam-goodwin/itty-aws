import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricsdeleteDashboardInput {
  id: string;
}
export const MetricsdeleteDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/metrics/dashboards/{id}" }),
  ) as unknown as Schema.Codec<MetricsdeleteDashboardInput>;

// Output Schema
export type MetricsdeleteDashboardOutput = void;
export const MetricsdeleteDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MetricsdeleteDashboardOutput>;

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
  }),
);
