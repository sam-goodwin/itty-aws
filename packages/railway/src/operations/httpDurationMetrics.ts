import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query httpDurationMetrics($endDate: DateTime!, $environmentId: String!, $method: String, $path: String, $serviceId: String!, $startDate: DateTime!, $statusCode: Int, $stepSeconds: Int) {\n  httpDurationMetrics(endDate: $endDate, environmentId: $environmentId, method: $method, path: $path, serviceId: $serviceId, startDate: $startDate, statusCode: $statusCode, stepSeconds: $stepSeconds) {\n    samples {\n      p50\n      p90\n      p95\n      p99\n      ts\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const HttpDurationMetricsInput = Schema.Struct({
  endDate: Schema.String,
  environmentId: Schema.String,
  method: Schema.optional(Schema.NullOr(Schema.String)),
  path: Schema.optional(Schema.NullOr(Schema.String)),
  serviceId: Schema.String,
  startDate: Schema.String,
  statusCode: Schema.optional(Schema.NullOr(Schema.Number)),
  stepSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "httpDurationMetrics",
    type: "query",
  }),
);
export type HttpDurationMetricsInput = typeof HttpDurationMetricsInput.Type;

// Output Schema (GraphQL selection set)
export const HttpDurationMetricsOutput = Schema.Struct({
  samples: Schema.Array(
    Schema.Struct({
      p50: Schema.Number,
      p90: Schema.Number,
      p95: Schema.Number,
      p99: Schema.Number,
      ts: Schema.Number,
    }),
  ),
}).pipe(T.ResponsePath("httpDurationMetrics"));
export type HttpDurationMetricsOutput = typeof HttpDurationMetricsOutput.Type;

/**
 * Get HTTP request duration metrics for a service (avg, p50, p90, p95, p99)
 */
export const httpDurationMetrics = API.make(() => ({
  inputSchema: HttpDurationMetricsInput,
  outputSchema: HttpDurationMetricsOutput,
}));
