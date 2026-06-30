import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TracingSpansSymbolStatsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      filePath: Schema.String,
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      symbols: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.NullOr(Schema.String)),
            startLine: Schema.Number,
            endLine: Schema.Number,
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tracing/spans/symbol-stats/",
    }),
  );
export type TracingSpansSymbolStatsCreateInput =
  typeof TracingSpansSymbolStatsCreateInput.Type;

// Output Schema
export const TracingSpansSymbolStatsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        count: Schema.Number,
        error_count: Schema.Number,
        sum_duration_nano: Schema.Number,
        p50_duration_nano: Schema.Number,
        p95_duration_nano: Schema.Number,
        p99_duration_nano: Schema.Number,
        busy_count: Schema.Number,
        p50_busy_nano: Schema.Number,
        p95_busy_nano: Schema.Number,
        p99_busy_nano: Schema.Number,
        line: Schema.Number,
        name: Schema.optional(Schema.NullOr(Schema.String)),
        end_line: Schema.optional(Schema.NullOr(Schema.Number)),
        previous: Schema.Struct({
          count: Schema.Number,
          error_count: Schema.Number,
          sum_duration_nano: Schema.Number,
          p50_duration_nano: Schema.Number,
          p95_duration_nano: Schema.Number,
          p99_duration_nano: Schema.Number,
          busy_count: Schema.Number,
          p50_busy_nano: Schema.Number,
          p95_busy_nano: Schema.Number,
          p99_busy_nano: Schema.Number,
        }),
        count_pct_change: Schema.NullOr(Schema.Number),
        p95_duration_pct_change: Schema.NullOr(Schema.Number),
      }),
    ),
    granularity: Schema.Literals(["line", "symbol"]),
  });
export type TracingSpansSymbolStatsCreateOutput =
  typeof TracingSpansSymbolStatsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansSymbolStatsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TracingSpansSymbolStatsCreateInput,
    outputSchema: TracingSpansSymbolStatsCreateOutput,
  }));
