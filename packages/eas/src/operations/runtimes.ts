import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query runtimes {\n  runtimes\n}";

// Input Schema (GraphQL variables)
export const RuntimesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "runtimes",
    type: "query",
  }),
);
export type RuntimesInput = typeof RuntimesInput.Type;

// Output Schema (GraphQL selection set)
export const RuntimesOutput = Schema.Unknown;
export type RuntimesOutput = typeof RuntimesOutput.Type;

/**
 * Top-level query object for querying Runtimes.
 */
export const runtimes = API.make(() => ({
  inputSchema: RuntimesInput,
  outputSchema: RuntimesOutput,
}));
