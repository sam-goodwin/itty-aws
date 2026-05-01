import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AlertsSimulateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    insight: Schema.Number,
    detector_config: Schema.Unknown,
    series_index: Schema.optional(Schema.Number),
    date_from: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/alerts/simulate/",
    }),
  );
export type AlertsSimulateCreateInput = typeof AlertsSimulateCreateInput.Type;

// Output Schema
export const AlertsSimulateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.Number),
    dates: Schema.Array(Schema.String),
    scores: Schema.Array(Schema.NullOr(Schema.Number)),
    triggered_indices: Schema.Array(Schema.Number),
    triggered_dates: Schema.Array(Schema.String),
    interval: Schema.NullOr(Schema.String),
    total_points: Schema.Number,
    anomaly_count: Schema.Number,
    sub_detector_scores: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    breakdown_results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          label: Schema.String,
          data: Schema.Array(Schema.Number),
          dates: Schema.Array(Schema.String),
          scores: Schema.Array(Schema.NullOr(Schema.Number)),
          triggered_indices: Schema.Array(Schema.Number),
          triggered_dates: Schema.Array(Schema.String),
          total_points: Schema.Number,
          anomaly_count: Schema.Number,
          sub_detector_scores: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
        }),
      ),
    ),
  });
export type AlertsSimulateCreateOutput = typeof AlertsSimulateCreateOutput.Type;

// The operation
/**
 * Simulate a detector on an insight's historical data. Read-only — no AlertCheck records are created.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const alertsSimulateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AlertsSimulateCreateInput,
    outputSchema: AlertsSimulateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
