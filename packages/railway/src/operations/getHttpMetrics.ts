import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query httpMetrics($endDate: DateTime!, $environmentId: String!, $method: String, $path: String, $serviceId: String!, $startDate: DateTime!, $statusCode: Int, $stepSeconds: Int) {\n  httpMetrics(endDate: $endDate, environmentId: $environmentId, method: $method, path: $path, serviceId: $serviceId, startDate: $startDate, statusCode: $statusCode, stepSeconds: $stepSeconds) {\n    samples {\n      ts\n      value\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetHttpMetricsInput = Schema.Struct({
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
export type GetHttpMetricsInput = typeof GetHttpMetricsInput.Type;

// Output Schema (GraphQL selection set)
export const GetHttpMetricsOutput = Schema.Struct({
  samples: Schema.Array(
    Schema.Struct({
      ts: Schema.Number,
      value: Schema.Number,
    }),
  ),
}).pipe(T.ResponsePath("httpMetrics"));
export type GetHttpMetricsOutput = typeof GetHttpMetricsOutput.Type;

/**
 * Get HTTP request metrics for a service
 */
export const getHttpMetrics = API.make(() => ({
  inputSchema: GetHttpMetricsInput,
  outputSchema: GetHttpMetricsOutput,
}));
