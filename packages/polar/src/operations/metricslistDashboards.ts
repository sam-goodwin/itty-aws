import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricslistDashboardsInput {
  organization_id?: string | ReadonlyArray<string> | null;
}
export const MetricslistDashboardsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/metrics/dashboards" }),
  ) as unknown as Schema.Codec<MetricslistDashboardsInput>;

// Output Schema
export type MetricslistDashboardsOutput = ReadonlyArray<{
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  metrics: ReadonlyArray<string>;
  organization_id: string;
}>;
export const MetricslistDashboardsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      name: Schema.String,
      metrics: Schema.Array(Schema.String),
      organization_id: Schema.String,
    }),
  ) as unknown as Schema.Codec<MetricslistDashboardsOutput>;

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
  }),
);
