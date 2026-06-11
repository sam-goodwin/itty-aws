import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query httpMetricsGroupedByStatus($endDate: DateTime!, $environmentId: String!, $method: String, $path: String, $serviceId: String!, $startDate: DateTime!, $stepSeconds: Int) {\n  httpMetricsGroupedByStatus(endDate: $endDate, environmentId: $environmentId, method: $method, path: $path, serviceId: $serviceId, startDate: $startDate, stepSeconds: $stepSeconds) {\n    samples {\n      ts\n      value\n    }\n    statusCode\n  }\n}";

// Input Schema (GraphQL variables)
export const GetHttpMetricsGroupedByStatusInput = Schema.Struct({
  endDate: Schema.String,
  environmentId: Schema.String,
  method: Schema.optional(Schema.NullOr(Schema.String)),
  path: Schema.optional(Schema.NullOr(Schema.String)),
  serviceId: Schema.String,
  startDate: Schema.String,
  stepSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "httpMetricsGroupedByStatus",
    type: "query",
  }),
);
export type GetHttpMetricsGroupedByStatusInput =
  typeof GetHttpMetricsGroupedByStatusInput.Type;

// Output Schema (GraphQL selection set)
export const GetHttpMetricsGroupedByStatusOutput = Schema.Array(
  Schema.Struct({
    samples: Schema.Array(
      Schema.Struct({
        ts: Schema.Number,
        value: Schema.Number,
      }),
    ),
    statusCode: Schema.Number,
  }),
).pipe(T.ResponsePath("httpMetricsGroupedByStatus"));
export type GetHttpMetricsGroupedByStatusOutput =
  typeof GetHttpMetricsGroupedByStatusOutput.Type;

/**
 * Get HTTP request metrics for a service, grouped by status code
 */
export const getHttpMetricsGroupedByStatus = API.make(() => ({
  inputSchema: GetHttpMetricsGroupedByStatusInput,
  outputSchema: GetHttpMetricsGroupedByStatusOutput,
}));
