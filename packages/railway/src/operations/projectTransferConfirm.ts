import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectTransferConfirm($input: ProjectTransferConfirmInput!) {\n  projectTransferConfirm(input: $input)\n}";

// Input Schema (GraphQL variables)
export const ProjectTransferConfirmInput = Schema.Struct({
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
export type ProjectTransferConfirmInput =
  typeof ProjectTransferConfirmInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectTransferConfirmOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTransferConfirm"),
);
export type ProjectTransferConfirmOutput =
  typeof ProjectTransferConfirmOutput.Type;

/**
 * Confirm the transfer of project ownership
 */
export const projectTransferConfirm = API.make(() => ({
  inputSchema: ProjectTransferConfirmInput,
  outputSchema: ProjectTransferConfirmOutput,
}));
