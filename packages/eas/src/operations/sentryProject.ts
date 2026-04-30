import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation sentryProject {\n  sentryProject\n}";

// Input Schema (GraphQL variables)
export const SentryProjectInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sentryProject",
    type: "mutation",
  }),
);
export type SentryProjectInput = typeof SentryProjectInput.Type;

// Output Schema (GraphQL selection set)
export const SentryProjectOutput = Schema.Unknown;
export type SentryProjectOutput = typeof SentryProjectOutput.Type;

/**
 * Mutations for Sentry projects
 */
export const sentryProject = API.make(() => ({
  inputSchema: SentryProjectInput,
  outputSchema: SentryProjectOutput,
}));
