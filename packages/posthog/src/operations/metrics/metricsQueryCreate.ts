import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MetricsQueryCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      metricName: Schema.optional(Schema.String),
      aggregation: Schema.optional(
        Schema.Literals([
          "sum",
          "avg",
          "count",
          "p95",
          "rate",
          "increase",
          "histogram_quantile",
        ]),
      ),
      quantile: Schema.optional(Schema.NullOr(Schema.Number)),
      filters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            op: Schema.optional(
              Schema.Literals(["eq", "neq", "regex", "not_regex"]),
            ),
            value: Schema.String,
            scope: Schema.optional(
              Schema.Literals(["resource", "attribute", "auto"]),
            ),
          }),
        ),
      ),
      groupBy: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            scope: Schema.optional(
              Schema.Literals(["resource", "attribute", "auto"]),
            ),
          }),
        ),
      ),
      interval: Schema.optional(Schema.Unknown),
      clauses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            metricName: Schema.String,
            aggregation: Schema.optional(
              Schema.Literals([
                "sum",
                "avg",
                "count",
                "p95",
                "rate",
                "increase",
                "histogram_quantile",
              ]),
            ),
            quantile: Schema.optional(Schema.NullOr(Schema.Number)),
            filters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  op: Schema.optional(
                    Schema.Literals(["eq", "neq", "regex", "not_regex"]),
                  ),
                  value: Schema.String,
                  scope: Schema.optional(
                    Schema.Literals(["resource", "attribute", "auto"]),
                  ),
                }),
              ),
            ),
            groupBy: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  scope: Schema.optional(
                    Schema.Literals(["resource", "attribute", "auto"]),
                  ),
                }),
              ),
            ),
          }),
        ),
      ),
      formula: Schema.optional(Schema.NullOr(Schema.String)),
      dateFrom: Schema.String,
      dateTo: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/metrics/query/",
    }),
  );
export type MetricsQueryCreateInput = typeof MetricsQueryCreateInput.Type;

// Output Schema
export const MetricsQueryCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        labels: Schema.Record(Schema.String, Schema.String),
        points: Schema.Array(
          Schema.Struct({
            time: Schema.String,
            value: Schema.Number,
          }),
        ),
        metric_name: Schema.optional(Schema.NullOr(Schema.String)),
        clause: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  });
export type MetricsQueryCreateOutput = typeof MetricsQueryCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const metricsQueryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MetricsQueryCreateInput,
  outputSchema: MetricsQueryCreateOutput,
}));
