import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation transferProject($input: ProjectTransferInput!, $projectId: String!) {\n  projectTransfer(input: $input, projectId: $projectId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TransferProjectInput = Schema.Struct({
  input: Schema.Struct({
    workspaceId: Schema.String,
  }),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "transferProject",
    type: "mutation",
  }),
);
export type TransferProjectInput = typeof TransferProjectInput.Type;

// Output Schema (GraphQL selection set)
export const TransferProjectOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTransfer"),
);
export type TransferProjectOutput = typeof TransferProjectOutput.Type;

/**
 * Transfer a project to a workspace
 */
export const transferProject = API.make(() => ({
  inputSchema: TransferProjectInput,
  outputSchema: TransferProjectOutput,
}));
