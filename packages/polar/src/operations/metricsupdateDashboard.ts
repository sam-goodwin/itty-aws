import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MetricsupdateDashboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    metrics: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  }).pipe(T.Http({ method: "PATCH", path: "/v1/metrics/dashboards/{id}" }));
export type MetricsupdateDashboardInput =
  typeof MetricsupdateDashboardInput.Type;

// Output Schema
export const MetricsupdateDashboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    metrics: Schema.Array(Schema.String),
    organization_id: Schema.String,
  });
export type MetricsupdateDashboardOutput =
  typeof MetricsupdateDashboardOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }),
);
