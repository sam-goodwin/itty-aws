import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query userInvitationPublicData {\n  userInvitationPublicData\n}";

// Input Schema (GraphQL variables)
export const UserInvitationPublicDataInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userInvitationPublicData",
    type: "query",
  }),
);
export type UserInvitationPublicDataInput =
  typeof UserInvitationPublicDataInput.Type;

// Output Schema (GraphQL selection set)
export const UserInvitationPublicDataOutput = Schema.Unknown;
export type UserInvitationPublicDataOutput =
  typeof UserInvitationPublicDataOutput.Type;

/**
 * Top-level query object for querying UserInvitationPublicData publicly.
 */
export const userInvitationPublicData = API.make(() => ({
  inputSchema: UserInvitationPublicDataInput,
  outputSchema: UserInvitationPublicDataOutput,
}));
