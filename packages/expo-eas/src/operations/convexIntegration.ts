import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query convexIntegration {\n  convexIntegration {\n    clientIdentifier\n  }\n}";

// Input Schema (GraphQL variables)
export const ConvexIntegrationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "convexIntegration",
    type: "query",
  }),
);
export type ConvexIntegrationInput = typeof ConvexIntegrationInput.Type;

// Output Schema (GraphQL selection set)
export const ConvexIntegrationOutput = Schema.Struct({
  clientIdentifier: Schema.String,
}).pipe(T.ResponsePath("convexIntegration"));
export type ConvexIntegrationOutput = typeof ConvexIntegrationOutput.Type;

/**
 * Top-level query object for querying Convex Integration information.
 */
export const convexIntegration = API.make(() => ({
  inputSchema: ConvexIntegrationInput,
  outputSchema: ConvexIntegrationOutput,
}));
