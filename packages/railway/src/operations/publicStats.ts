import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query publicStats {\n  publicStats {\n    totalDeploymentsLastMonth\n    totalLogsLastMonth\n    totalProjects\n    totalRequestsLastMonth\n    totalServices\n    totalUsers\n  }\n}";

// Input Schema (GraphQL variables)
export const PublicStatsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "publicStats",
    type: "query",
  }),
);
export type PublicStatsInput = typeof PublicStatsInput.Type;

// Output Schema (GraphQL selection set)
export const PublicStatsOutput = Schema.Struct({
  totalDeploymentsLastMonth: Schema.Number,
  totalLogsLastMonth: Schema.String,
  totalProjects: Schema.Number,
  totalRequestsLastMonth: Schema.String,
  totalServices: Schema.Number,
  totalUsers: Schema.Number,
}).pipe(T.ResponsePath("publicStats"));
export type PublicStatsOutput = typeof PublicStatsOutput.Type;

/**
 * Get public Railway stats.
 */
export const publicStats = API.make(() => ({
  inputSchema: PublicStatsInput,
  outputSchema: PublicStatsOutput,
}));
