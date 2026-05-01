import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query userInvitationPublicDataByToken($token: ID!) {\n  userInvitationPublicData {\n    byToken(token: $token) {\n      accountName\n      accountProfileImageUrl\n      accountProfilePhoto\n      accountRequiresTwoFactor\n      created\n      email\n      expires\n      id\n      isForOrganization\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserInvitationPublicDataByTokenInput = Schema.Struct({
  token: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationPublicDataByToken",
    type: "query",
  }),
);
export type UserInvitationPublicDataByTokenInput =
  typeof UserInvitationPublicDataByTokenInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationPublicDataByTokenOutput = Schema.Struct({
  accountName: Schema.String,
  accountProfileImageUrl: Schema.String,
  accountProfilePhoto: Schema.NullOr(Schema.String),
  accountRequiresTwoFactor: Schema.Boolean,
  created: Schema.String,
  email: Schema.String,
  expires: Schema.String,
  id: Schema.String,
  isForOrganization: Schema.Boolean,
}).pipe(T.ResponsePath("userInvitationPublicData.byToken"));
export type UserInvitationPublicDataByTokenOutput =
  typeof UserInvitationPublicDataByTokenOutput.Type;

export const userInvitationPublicDataByToken = API.make(() => ({
  inputSchema: UserInvitationPublicDataByTokenInput,
  outputSchema: UserInvitationPublicDataByTokenOutput,
}));
