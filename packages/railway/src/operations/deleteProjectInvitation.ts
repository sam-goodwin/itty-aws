import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteProjectInvitation($id: String!) {\n  projectInvitationDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteProjectInvitationInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteProjectInvitation",
    type: "mutation",
  }),
);
export type DeleteProjectInvitationInput =
  typeof DeleteProjectInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteProjectInvitationOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectInvitationDelete"),
);
export type DeleteProjectInvitationOutput =
  typeof DeleteProjectInvitationOutput.Type;

/**
 * Delete an invitation for a project
 */
export const deleteProjectInvitation = API.make(() => ({
  inputSchema: DeleteProjectInvitationInput,
  outputSchema: DeleteProjectInvitationOutput,
}));
