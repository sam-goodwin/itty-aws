import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetricsgetDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/metrics/dashboards/{id}" }));
export type MetricsgetDashboardInput = typeof MetricsgetDashboardInput.Type;

// Output Schema
export const MetricsgetDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    metrics: Schema.Array(Schema.String),
    organization_id: Schema.String,
  });
export type MetricsgetDashboardOutput = typeof MetricsgetDashboardOutput.Type;

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
  errors: [UnprocessableEntity] as const,
}));
