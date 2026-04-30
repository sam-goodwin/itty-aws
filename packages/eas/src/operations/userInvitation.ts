import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation userInvitation {\n  userInvitation\n}";

// Input Schema (GraphQL variables)
export const UserInvitationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitation",
    type: "mutation",
  }),
);
export type UserInvitationInput = typeof UserInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationOutput = Schema.Unknown;
export type UserInvitationOutput = typeof UserInvitationOutput.Type;

/**
 * Mutations that create, delete, and accept UserInvitations
 */
export const userInvitation = API.make(() => ({
  inputSchema: UserInvitationInput,
  outputSchema: UserInvitationOutput,
}));
