import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userInvitationResendUserInvitation($id: ID!) {\n  userInvitation {\n    resendUserInvitation(id: $id) {\n      accountName\n      accountProfileImageUrl\n      accountProfilePhoto\n      accountRequiresTwoFactor\n      created\n      email\n      expires\n      id\n      isForOrganization\n      permissions\n      role\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationResendUserInvitationInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationResendUserInvitation",
    type: "mutation",
  }),
);
export type UserInvitationResendUserInvitationInput =
  typeof UserInvitationResendUserInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationResendUserInvitationOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("userInvitation.resendUserInvitation"));
export type UserInvitationResendUserInvitationOutput =
  typeof UserInvitationResendUserInvitationOutput.Type;

export const userInvitationResendUserInvitation = API.make(() => ({
  inputSchema: UserInvitationResendUserInvitationInput,
  outputSchema: UserInvitationResendUserInvitationOutput,
}));
