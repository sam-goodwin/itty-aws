import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectTransfer($input: ProjectTransferInput!, $projectId: String!) {\n  projectTransfer(input: $input, projectId: $projectId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectTransferInput = Schema.Struct({
  input: Schema.Struct({
    workspaceId: Schema.String,
  }),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectTransfer",
    type: "mutation",
  }),
);
export type ProjectTransferInput = typeof ProjectTransferInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectTransferOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTransfer"),
);
export type ProjectTransferOutput = typeof ProjectTransferOutput.Type;

/**
 * Transfer a project to a workspace
 */
export const projectTransfer = API.make(() => ({
  inputSchema: ProjectTransferInput,
  outputSchema: ProjectTransferOutput,
}));
