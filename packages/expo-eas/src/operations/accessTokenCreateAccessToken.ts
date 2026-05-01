import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accessTokenCreateAccessToken($createAccessTokenData: CreateAccessTokenInput!) {\n  accessToken {\n    createAccessToken(createAccessTokenData: $createAccessTokenData) {\n      accessToken {\n        createdAt\n        id\n        lastUsedAt\n        note\n        owner {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        revokedAt\n        updatedAt\n        visibleTokenPrefix\n      }\n      token\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccessTokenCreateAccessTokenInput = Schema.Struct({
  createAccessTokenData: Schema.Struct({
    actorID: Schema.String,
    note: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accessTokenCreateAccessToken",
    type: "mutation",
  }),
);
export type AccessTokenCreateAccessTokenInput =
  typeof AccessTokenCreateAccessTokenInput.Type;

// Output Schema (GraphQL selection set)
export const AccessTokenCreateAccessTokenOutput = Schema.Struct({
  accessToken: Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    lastUsedAt: Schema.NullOr(Schema.String),
    note: Schema.NullOr(Schema.String),
    owner: Schema.Struct({
      created: Schema.String,
      displayName: Schema.String,
      firstName: Schema.NullOr(Schema.String),
      id: Schema.String,
      isExpoAdmin: Schema.Boolean,
      lastDeletionAttemptTime: Schema.NullOr(Schema.String),
    }),
    revokedAt: Schema.NullOr(Schema.String),
    updatedAt: Schema.String,
    visibleTokenPrefix: Schema.String,
  }),
  token: Schema.String,
}).pipe(T.ResponsePath("accessToken.createAccessToken"));
export type AccessTokenCreateAccessTokenOutput =
  typeof AccessTokenCreateAccessTokenOutput.Type;

export const accessTokenCreateAccessToken = API.make(() => ({
  inputSchema: AccessTokenCreateAccessTokenInput,
  outputSchema: AccessTokenCreateAccessTokenOutput,
}));
