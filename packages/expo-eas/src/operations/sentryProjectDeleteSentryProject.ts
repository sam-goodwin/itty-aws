import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sentryProjectDeleteSentryProject($sentryProjectId: ID!) {\n  sentryProject {\n    deleteSentryProject(sentryProjectId: $sentryProjectId) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const SentryProjectDeleteSentryProjectInput = Schema.Struct({
  sentryProjectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sentryProjectDeleteSentryProject",
    type: "mutation",
  }),
);
export type SentryProjectDeleteSentryProjectInput =
  typeof SentryProjectDeleteSentryProjectInput.Type;

// Output Schema (GraphQL selection set)
export const SentryProjectDeleteSentryProjectOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("sentryProject.deleteSentryProject"));
export type SentryProjectDeleteSentryProjectOutput =
  typeof SentryProjectDeleteSentryProjectOutput.Type;

export const sentryProjectDeleteSentryProject = API.make(() => ({
  inputSchema: SentryProjectDeleteSentryProjectInput,
  outputSchema: SentryProjectDeleteSentryProjectOutput,
}));
