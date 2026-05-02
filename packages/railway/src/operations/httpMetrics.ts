import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query httpMetrics($endDate: DateTime!, $environmentId: String!, $method: String, $path: String, $serviceId: String!, $startDate: DateTime!, $statusCode: Int, $stepSeconds: Int) {\n  httpMetrics(endDate: $endDate, environmentId: $environmentId, method: $method, path: $path, serviceId: $serviceId, startDate: $startDate, statusCode: $statusCode, stepSeconds: $stepSeconds) {\n    samples {\n      ts\n      value\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const HttpMetricsInput = Schema.Struct({
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
    operationName: "httpMetrics",
    type: "query",
  }),
);
export type HttpMetricsInput = typeof HttpMetricsInput.Type;

// Output Schema (GraphQL selection set)
export const HttpMetricsOutput = Schema.Struct({
  samples: Schema.Array(
    Schema.Struct({
      ts: Schema.Number,
      value: Schema.Number,
    }),
  ),
}).pipe(T.ResponsePath("httpMetrics"));
export type HttpMetricsOutput = typeof HttpMetricsOutput.Type;

/**
 * Get HTTP request metrics for a service
 */
export const httpMetrics = API.make(() => ({
  inputSchema: HttpMetricsInput,
  outputSchema: HttpMetricsOutput,
}));
