import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation updateBranch {\n  updateBranch\n}";

// Input Schema (GraphQL variables)
export const UpdateBranchInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateBranch",
    type: "mutation",
  }),
);
export type UpdateBranchInput = typeof UpdateBranchInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateBranchOutput = Schema.Unknown;
export type UpdateBranchOutput = typeof UpdateBranchOutput.Type;

export const updateBranch = API.make(() => ({
  inputSchema: UpdateBranchInput,
  outputSchema: UpdateBranchOutput,
}));
