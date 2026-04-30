import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query statuspageService {\n  statuspageService\n}";

// Input Schema (GraphQL variables)
export const StatuspageServiceInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "statuspageService",
    type: "query",
  }),
);
export type StatuspageServiceInput = typeof StatuspageServiceInput.Type;

// Output Schema (GraphQL selection set)
export const StatuspageServiceOutput = Schema.Unknown;
export type StatuspageServiceOutput = typeof StatuspageServiceOutput.Type;

/**
 * Top-level query object for querying Expo status page services.
 */
export const statuspageService = API.make(() => ({
  inputSchema: StatuspageServiceInput,
  outputSchema: StatuspageServiceOutput,
}));
