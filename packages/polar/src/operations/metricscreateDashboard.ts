import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricscreateDashboardInput {
  name: string;
  metrics?: ReadonlyArray<string>;
  organization_id?: string | null;
}
export const MetricscreateDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    metrics: Schema.optional(Schema.Array(Schema.String)),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/metrics/dashboards" }),
  ) as unknown as Schema.Codec<MetricscreateDashboardInput>;

// Output Schema
export interface MetricscreateDashboardOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  metrics: ReadonlyArray<string>;
  organization_id: string;
}
export const MetricscreateDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    metrics: Schema.Array(Schema.String),
    organization_id: Schema.String,
  }) as unknown as Schema.Codec<MetricscreateDashboardOutput>;

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
  }),
);
