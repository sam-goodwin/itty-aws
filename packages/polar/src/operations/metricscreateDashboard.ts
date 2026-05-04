import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetricscreateDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    metrics: Schema.optional(Schema.Array(Schema.String)),
    organization_id: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "POST", path: "/v1/metrics/dashboards" }));
export type MetricscreateDashboardInput =
  typeof MetricscreateDashboardInput.Type;

// Output Schema
export const MetricscreateDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    id: Schema.String,
    name: Schema.String,
    metrics: Schema.Array(Schema.String),
    organization_id: Schema.String,
  });
export type MetricscreateDashboardOutput =
  typeof MetricscreateDashboardOutput.Type;

// The operation
/**
 * Create Metric Dashboard
 *
 * Create a user-defined metric dashboard.
 * **Scopes**: `metrics:write`
 */
export const metricscreateDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricscreateDashboardInput,
    outputSchema: MetricscreateDashboardOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
