import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation githubJobRunTrigger {\n  githubJobRunTrigger\n}";

// Input Schema (GraphQL variables)
export const GithubJobRunTriggerInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubJobRunTrigger",
    type: "mutation",
  }),
);
export type GithubJobRunTriggerInput = typeof GithubJobRunTriggerInput.Type;

// Output Schema (GraphQL selection set)
export const GithubJobRunTriggerOutput = Schema.Unknown;
export type GithubJobRunTriggerOutput = typeof GithubJobRunTriggerOutput.Type;

export const githubJobRunTrigger = API.make(() => ({
  inputSchema: GithubJobRunTriggerInput,
  outputSchema: GithubJobRunTriggerOutput,
}));
