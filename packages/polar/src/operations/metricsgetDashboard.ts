import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricsgetDashboardInput {
  id: string;
}
export const MetricsgetDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/metrics/dashboards/{id}" }),
  ) as unknown as Schema.Codec<MetricsgetDashboardInput>;

// Output Schema
export interface MetricsgetDashboardOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  metrics: ReadonlyArray<string>;
  organization_id: string;
}
export const MetricsgetDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    metrics: Schema.Array(Schema.String),
    organization_id: Schema.String,
  }) as unknown as Schema.Codec<MetricsgetDashboardOutput>;

// The operation
/**
 * Get Metric Dashboard
 *
 * Get a user-defined metric dashboard by ID.
 * **Scopes**: `metrics:read`
 *
 * @param id - The metric dashboard ID.
 */
export const metricsgetDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MetricsgetDashboardInput,
  outputSchema: MetricsgetDashboardOutput,
}));
