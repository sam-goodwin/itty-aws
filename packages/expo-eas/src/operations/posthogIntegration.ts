import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query posthogIntegration {\n  posthogIntegration {\n    clientIdentifier\n  }\n}";

// Input Schema (GraphQL variables)
export const PosthogIntegrationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "posthogIntegration",
    type: "query",
  }),
);
export type PosthogIntegrationInput = typeof PosthogIntegrationInput.Type;

// Output Schema (GraphQL selection set)
export const PosthogIntegrationOutput = Schema.Struct({
  clientIdentifier: Schema.String,
}).pipe(T.ResponsePath("posthogIntegration"));
export type PosthogIntegrationOutput = typeof PosthogIntegrationOutput.Type;

/**
 * Top-level query object for querying PostHog Integration information.
 */
export const posthogIntegration = API.make(() => ({
  inputSchema: PosthogIntegrationInput,
  outputSchema: PosthogIntegrationOutput,
}));
