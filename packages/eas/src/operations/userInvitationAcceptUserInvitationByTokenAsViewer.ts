import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userInvitationAcceptUserInvitationByTokenAsViewer($token: ID!) {\n  userInvitation {\n    acceptUserInvitationByTokenAsViewer(token: $token) {\n      success\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationAcceptUserInvitationByTokenAsViewerInput =
  Schema.Struct({
    token: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "userInvitationAcceptUserInvitationByTokenAsViewer",
      type: "mutation",
    }),
  );
export type UserInvitationAcceptUserInvitationByTokenAsViewerInput =
  typeof UserInvitationAcceptUserInvitationByTokenAsViewerInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationAcceptUserInvitationByTokenAsViewerOutput =
  Schema.Struct({
    success: Schema.Boolean,
  }).pipe(T.ResponsePath("userInvitation.acceptUserInvitationByTokenAsViewer"));
export type UserInvitationAcceptUserInvitationByTokenAsViewerOutput =
  typeof UserInvitationAcceptUserInvitationByTokenAsViewerOutput.Type;

export const userInvitationAcceptUserInvitationByTokenAsViewer = API.make(
  () => ({
    inputSchema: UserInvitationAcceptUserInvitationByTokenAsViewerInput,
    outputSchema: UserInvitationAcceptUserInvitationByTokenAsViewerOutput,
  }),
);
