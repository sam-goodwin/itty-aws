import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accessTokenDeleteAccessToken($id: ID!) {\n  accessToken {\n    deleteAccessToken(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccessTokenDeleteAccessTokenInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accessTokenDeleteAccessToken",
    type: "mutation",
  }),
);
export type AccessTokenDeleteAccessTokenInput =
  typeof AccessTokenDeleteAccessTokenInput.Type;

// Output Schema (GraphQL selection set)
export const AccessTokenDeleteAccessTokenOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("accessToken.deleteAccessToken"));
export type AccessTokenDeleteAccessTokenOutput =
  typeof AccessTokenDeleteAccessTokenOutput.Type;

export const accessTokenDeleteAccessToken = API.make(() => ({
  inputSchema: AccessTokenDeleteAccessTokenInput,
  outputSchema: AccessTokenDeleteAccessTokenOutput,
}));
