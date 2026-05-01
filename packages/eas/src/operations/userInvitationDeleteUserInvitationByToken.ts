import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userInvitationDeleteUserInvitationByToken($token: ID!) {\n  userInvitation {\n    deleteUserInvitationByToken(token: $token) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationDeleteUserInvitationByTokenInput = Schema.Struct({
  token: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationDeleteUserInvitationByToken",
    type: "mutation",
  }),
);
export type UserInvitationDeleteUserInvitationByTokenInput =
  typeof UserInvitationDeleteUserInvitationByTokenInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationDeleteUserInvitationByTokenOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("userInvitation.deleteUserInvitationByToken"));
export type UserInvitationDeleteUserInvitationByTokenOutput =
  typeof UserInvitationDeleteUserInvitationByTokenOutput.Type;

export const userInvitationDeleteUserInvitationByToken = API.make(() => ({
  inputSchema: UserInvitationDeleteUserInvitationByTokenInput,
  outputSchema: UserInvitationDeleteUserInvitationByTokenOutput,
}));
