import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetricslistDashboardsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/metrics/dashboards" }));
export type MetricslistDashboardsInput = typeof MetricslistDashboardsInput.Type;

// Output Schema
export const MetricslistDashboardsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      id: Schema.String,
      name: Schema.String,
      metrics: Schema.Array(Schema.String),
      organization_id: Schema.String,
    }),
  );
export type MetricslistDashboardsOutput =
  typeof MetricslistDashboardsOutput.Type;

// The operation
/**
 * List Metric Dashboards
 *
 * List user-defined metric dashboards.
 * **Scopes**: `metrics:read`
 *
 * @param organization_id - Filter by organization ID.
 */
export const metricslistDashboards = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricslistDashboardsInput,
    outputSchema: MetricslistDashboardsOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
