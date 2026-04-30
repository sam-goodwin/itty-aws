import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query submissions {\n  submissions\n}";

// Input Schema (GraphQL variables)
export const SubmissionsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "submissions",
    type: "query",
  }),
);
export type SubmissionsInput = typeof SubmissionsInput.Type;

// Output Schema (GraphQL selection set)
export const SubmissionsOutput = Schema.Unknown;
export type SubmissionsOutput = typeof SubmissionsOutput.Type;

export const submissions = API.make(() => ({
  inputSchema: SubmissionsInput,
  outputSchema: SubmissionsOutput,
}));
