import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query branches {\n  branches\n}";

// Input Schema (GraphQL variables)
export const BranchesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "branches",
    type: "query",
  }),
);
export type BranchesInput = typeof BranchesInput.Type;

// Output Schema (GraphQL selection set)
export const BranchesOutput = Schema.Unknown;
export type BranchesOutput = typeof BranchesOutput.Type;

/**
 * Top-level query object for querying Branchs.
 */
export const branches = API.make(() => ({
  inputSchema: BranchesInput,
  outputSchema: BranchesOutput,
}));
