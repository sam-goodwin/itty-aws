import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userInvitationDeleteUserInvitation($id: ID!) {\n  userInvitation {\n    deleteUserInvitation(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationDeleteUserInvitationInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationDeleteUserInvitation",
    type: "mutation",
  }),
);
export type UserInvitationDeleteUserInvitationInput =
  typeof UserInvitationDeleteUserInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationDeleteUserInvitationOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("userInvitation.deleteUserInvitation"));
export type UserInvitationDeleteUserInvitationOutput =
  typeof UserInvitationDeleteUserInvitationOutput.Type;

export const userInvitationDeleteUserInvitation = API.make(() => ({
  inputSchema: UserInvitationDeleteUserInvitationInput,
  outputSchema: UserInvitationDeleteUserInvitationOutput,
}));
