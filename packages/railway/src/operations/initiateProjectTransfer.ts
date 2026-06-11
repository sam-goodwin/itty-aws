import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation initiateProjectTransfer($input: ProjectTransferInitiateInput!) {\n  projectTransferInitiate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const InitiateProjectTransferInput = Schema.Struct({
  input: Schema.Struct({
    memberId: Schema.String,
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "initiateProjectTransfer",
    type: "mutation",
  }),
);
export type InitiateProjectTransferInput =
  typeof InitiateProjectTransferInput.Type;

// Output Schema (GraphQL selection set)
export const InitiateProjectTransferOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTransferInitiate"),
);
export type InitiateProjectTransferOutput =
  typeof InitiateProjectTransferOutput.Type;

/**
 * Initiate the transfer of project ownership
 */
export const initiateProjectTransfer = API.make(() => ({
  inputSchema: InitiateProjectTransferInput,
  outputSchema: InitiateProjectTransferOutput,
}));
