import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query builds {\n  builds\n}";

// Input Schema (GraphQL variables)
export const BuildsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "builds",
    type: "query",
  }),
);
export type BuildsInput = typeof BuildsInput.Type;

// Output Schema (GraphQL selection set)
export const BuildsOutput = Schema.Unknown;
export type BuildsOutput = typeof BuildsOutput.Type;

export const builds = API.make(() => ({
  inputSchema: BuildsInput,
  outputSchema: BuildsOutput,
}));
