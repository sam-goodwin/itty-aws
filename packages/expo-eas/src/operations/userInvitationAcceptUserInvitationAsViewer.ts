import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userInvitationAcceptUserInvitationAsViewer($id: ID!) {\n  userInvitation {\n    acceptUserInvitationAsViewer(id: $id) {\n      success\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationAcceptUserInvitationAsViewerInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationAcceptUserInvitationAsViewer",
    type: "mutation",
  }),
);
export type UserInvitationAcceptUserInvitationAsViewerInput =
  typeof UserInvitationAcceptUserInvitationAsViewerInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationAcceptUserInvitationAsViewerOutput = Schema.Struct({
  success: Schema.Boolean,
}).pipe(T.ResponsePath("userInvitation.acceptUserInvitationAsViewer"));
export type UserInvitationAcceptUserInvitationAsViewerOutput =
  typeof UserInvitationAcceptUserInvitationAsViewerOutput.Type;

export const userInvitationAcceptUserInvitationAsViewer = API.make(() => ({
  inputSchema: UserInvitationAcceptUserInvitationAsViewerInput,
  outputSchema: UserInvitationAcceptUserInvitationAsViewerOutput,
}));
