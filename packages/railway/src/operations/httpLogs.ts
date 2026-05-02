import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query httpLogs($afterDate: String, $afterLimit: Int, $anchorDate: String, $beforeDate: String, $beforeLimit: Int, $deploymentId: String!, $endDate: String, $filter: String, $limit: Int, $startDate: String) {\n  httpLogs(afterDate: $afterDate, afterLimit: $afterLimit, anchorDate: $anchorDate, beforeDate: $beforeDate, beforeLimit: $beforeLimit, deploymentId: $deploymentId, endDate: $endDate, filter: $filter, limit: $limit, startDate: $startDate) {\n    clientUa\n    deploymentId\n    deploymentInstanceId\n    downstreamProto\n    edgeRegion\n    host\n    httpStatus\n    method\n    path\n    requestId\n    responseDetails\n    rxBytes\n    srcIp\n    timestamp\n    totalDuration\n    txBytes\n    upstreamAddress\n    upstreamErrors\n    upstreamProto\n    upstreamRqDuration\n  }\n}";

// Input Schema (GraphQL variables)
export const HttpLogsInput = Schema.Struct({
  afterDate: Schema.optional(Schema.NullOr(Schema.String)),
  afterLimit: Schema.optional(Schema.NullOr(Schema.Number)),
  anchorDate: Schema.optional(Schema.NullOr(Schema.String)),
  beforeDate: Schema.optional(Schema.NullOr(Schema.String)),
  beforeLimit: Schema.optional(Schema.NullOr(Schema.Number)),
  deploymentId: Schema.String,
  endDate: Schema.optional(Schema.NullOr(Schema.String)),
  filter: Schema.optional(Schema.NullOr(Schema.String)),
  limit: Schema.optional(Schema.NullOr(Schema.Number)),
  startDate: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "httpLogs",
    type: "query",
  }),
);
export type HttpLogsInput = typeof HttpLogsInput.Type;

// Output Schema (GraphQL selection set)
export const HttpLogsOutput = Schema.Array(
  Schema.Struct({
    clientUa: Schema.String,
    deploymentId: Schema.String,
    deploymentInstanceId: Schema.String,
    downstreamProto: Schema.String,
    edgeRegion: Schema.String,
    host: Schema.String,
    httpStatus: Schema.Number,
    method: Schema.String,
    path: Schema.String,
    requestId: Schema.String,
    responseDetails: Schema.String,
    rxBytes: Schema.Number,
    srcIp: Schema.String,
    timestamp: Schema.String,
    totalDuration: Schema.Number,
    txBytes: Schema.Number,
    upstreamAddress: Schema.String,
    upstreamErrors: Schema.String,
    upstreamProto: Schema.String,
    upstreamRqDuration: Schema.Number,
  }),
).pipe(T.ResponsePath("httpLogs"));
export type HttpLogsOutput = typeof HttpLogsOutput.Type;

/**
 * Fetch HTTP logs for a deployment
 */
export const httpLogs = API.make(() => ({
  inputSchema: HttpLogsInput,
  outputSchema: HttpLogsOutput,
}));
