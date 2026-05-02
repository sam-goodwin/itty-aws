import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectTransferInitiate($input: ProjectTransferInitiateInput!) {\n  projectTransferInitiate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectTransferInitiateInput = Schema.Struct({
  input: Schema.Struct({
    memberId: Schema.String,
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectTransferInitiate",
    type: "mutation",
  }),
);
export type ProjectTransferInitiateInput =
  typeof ProjectTransferInitiateInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectTransferInitiateOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTransferInitiate"),
);
export type ProjectTransferInitiateOutput =
  typeof ProjectTransferInitiateOutput.Type;

/**
 * Initiate the transfer of project ownership
 */
export const projectTransferInitiate = API.make(() => ({
  inputSchema: ProjectTransferInitiateInput,
  outputSchema: ProjectTransferInitiateOutput,
}));
