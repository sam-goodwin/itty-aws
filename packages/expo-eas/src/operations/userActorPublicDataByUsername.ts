import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query userActorPublicDataByUsername($username: String!) {\n  userActorPublicData {\n    byUsername(username: $username) {\n      firstName\n      id\n      lastName\n      profilePhoto\n      username\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserActorPublicDataByUsernameInput = Schema.Struct({
  username: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userActorPublicDataByUsername",
    type: "query",
  }),
);
export type UserActorPublicDataByUsernameInput =
  typeof UserActorPublicDataByUsernameInput.Type;

// Output Schema (GraphQL selection set)
export const UserActorPublicDataByUsernameOutput = Schema.Struct({
  firstName: Schema.NullOr(Schema.String),
  id: Schema.String,
  lastName: Schema.NullOr(Schema.String),
  profilePhoto: Schema.String,
  username: Schema.String,
}).pipe(T.ResponsePath("userActorPublicData.byUsername"));
export type UserActorPublicDataByUsernameOutput =
  typeof UserActorPublicDataByUsernameOutput.Type;

export const userActorPublicDataByUsername = API.make(() => ({
  inputSchema: UserActorPublicDataByUsernameInput,
  outputSchema: UserActorPublicDataByUsernameOutput,
}));
