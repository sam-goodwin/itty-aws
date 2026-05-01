import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userInvitationCreateUserInvitationForAccount($accountID: ID!, $email: String!, $permissions: [Permission]!) {\n  userInvitation {\n    createUserInvitationForAccount(accountID: $accountID, email: $email, permissions: $permissions) {\n      accountName\n      accountProfileImageUrl\n      accountProfilePhoto\n      accountRequiresTwoFactor\n      created\n      email\n      expires\n      id\n      isForOrganization\n      permissions\n      role\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationCreateUserInvitationForAccountInput = Schema.Struct({
  accountID: Schema.String,
  email: Schema.String,
  permissions: Schema.Array(
    Schema.NullOr(Schema.Literals(["ADMIN", "OWN", "PUBLISH", "VIEW"])),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationCreateUserInvitationForAccount",
    type: "mutation",
  }),
);
export type UserInvitationCreateUserInvitationForAccountInput =
  typeof UserInvitationCreateUserInvitationForAccountInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationCreateUserInvitationForAccountOutput = Schema.Struct(
  {
    accountName: Schema.String,
    accountProfileImageUrl: Schema.String,
    accountProfilePhoto: Schema.NullOr(Schema.String),
    accountRequiresTwoFactor: Schema.Boolean,
    created: Schema.String,
    email: Schema.String,
    expires: Schema.String,
    id: Schema.String,
    isForOrganization: Schema.Boolean,
    permissions: Schema.Array(
      Schema.Literals(["ADMIN", "OWN", "PUBLISH", "VIEW"]),
    ),
    role: Schema.Literals([
      "ADMIN",
      "CUSTOM",
      "DEVELOPER",
      "HAS_ADMIN",
      "NOT_ADMIN",
      "OWNER",
      "VIEW_ONLY",
    ]),
  },
).pipe(T.ResponsePath("userInvitation.createUserInvitationForAccount"));
export type UserInvitationCreateUserInvitationForAccountOutput =
  typeof UserInvitationCreateUserInvitationForAccountOutput.Type;

export const userInvitationCreateUserInvitationForAccount = API.make(() => ({
  inputSchema: UserInvitationCreateUserInvitationForAccountInput,
  outputSchema: UserInvitationCreateUserInvitationForAccountOutput,
}));
