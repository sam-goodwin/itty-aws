import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricsupdateDashboardInput {
  id: string;
  name?: string | null;
  metrics?: ReadonlyArray<string> | null;
}
export const MetricsupdateDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    metrics: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/metrics/dashboards/{id}" }),
  ) as unknown as Schema.Codec<MetricsupdateDashboardInput>;

// Output Schema
export interface MetricsupdateDashboardOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  metrics: ReadonlyArray<string>;
  organization_id: string;
}
export const MetricsupdateDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    metrics: Schema.Array(Schema.String),
    organization_id: Schema.String,
  }) as unknown as Schema.Codec<MetricsupdateDashboardOutput>;

// The operation
/**
 * Update Metric Dashboard
 *
 * Update a user-defined metric dashboard.
 * **Scopes**: `metrics:write`
 *
 * @param id - The metric dashboard ID.
 */
export const metricsupdateDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsupdateDashboardInput,
    outputSchema: MetricsupdateDashboardOutput,
  }),
);
