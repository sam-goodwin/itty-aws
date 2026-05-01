import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation convexTeamConnectionSendConvexTeamInviteToVerifiedEmail($input: SendConvexTeamInviteToVerifiedEmailInput!) {\n  convexTeamConnection {\n    sendConvexTeamInviteToVerifiedEmail(input: $input) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailInput =
  Schema.Struct({
    input: Schema.Struct({
      convexTeamConnectionId: Schema.String,
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "convexTeamConnectionSendConvexTeamInviteToVerifiedEmail",
      type: "mutation",
    }),
  );
export type ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailInput =
  typeof ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailInput.Type;

// Output Schema (GraphQL selection set)
export const ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailOutput =
  Schema.Boolean.pipe(
    T.ResponsePath("convexTeamConnection.sendConvexTeamInviteToVerifiedEmail"),
  );
export type ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailOutput =
  typeof ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailOutput.Type;

export const convexTeamConnectionSendConvexTeamInviteToVerifiedEmail = API.make(
  () => ({
    inputSchema: ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailInput,
    outputSchema: ConvexTeamConnectionSendConvexTeamInviteToVerifiedEmailOutput,
  }),
);
