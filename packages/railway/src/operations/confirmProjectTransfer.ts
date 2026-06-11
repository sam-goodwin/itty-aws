import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectTransferConfirm($input: ProjectTransferConfirmInput!) {\n  projectTransferConfirm(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ConfirmProjectTransferInput = Schema.Struct({
  input: Schema.Struct({
    destinationWorkspaceId: Schema.optional(Schema.NullOr(Schema.String)),
    ownershipTransferId: Schema.String,
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectTransferConfirm",
    type: "mutation",
  }),
);
export type ConfirmProjectTransferInput =
  typeof ConfirmProjectTransferInput.Type;

// Output Schema (GraphQL selection set)
export const ConfirmProjectTransferOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTransferConfirm"),
);
export type ConfirmProjectTransferOutput =
  typeof ConfirmProjectTransferOutput.Type;

/**
 * Confirm the transfer of project ownership
 */
export const confirmProjectTransfer = API.make(() => ({
  inputSchema: ConfirmProjectTransferInput,
  outputSchema: ConfirmProjectTransferOutput,
}));
