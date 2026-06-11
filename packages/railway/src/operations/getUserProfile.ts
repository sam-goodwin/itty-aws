import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query userProfile($username: String!) {\n  userProfile(username: $username) {\n    avatar\n    createdAt\n    customerId\n    id\n    isTrialing\n    name\n    profile {\n      bio\n      isPublic\n      website\n    }\n    publishedTemplates {\n      code\n      createdAt\n      creator {\n        avatar\n        hasPublicProfile\n        name\n        username\n      }\n      deploys\n      description\n      health\n      image\n      name\n      teamId\n      userId\n      workspaceId\n    }\n    state\n    totalDeploys\n    username\n  }\n}";

// Input Schema (GraphQL variables)
export const GetUserProfileInput = Schema.Struct({
  username: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userProfile",
    type: "query",
  }),
);
export type GetUserProfileInput = typeof GetUserProfileInput.Type;

// Output Schema (GraphQL selection set)
export const GetUserProfileOutput = Schema.Struct({
  avatar: Schema.NullOr(Schema.String),
  createdAt: Schema.String,
  customerId: Schema.NullOr(Schema.String),
  id: Schema.String,
  isTrialing: Schema.NullOr(Schema.Boolean),
  name: Schema.NullOr(Schema.String),
  profile: Schema.Struct({
    bio: Schema.NullOr(Schema.String),
    isPublic: Schema.Boolean,
    website: Schema.NullOr(Schema.String),
  }),
  publishedTemplates: Schema.Array(
    Schema.Struct({
      code: Schema.String,
      createdAt: Schema.String,
      creator: Schema.NullOr(
        Schema.Struct({
          avatar: Schema.NullOr(Schema.String),
          hasPublicProfile: Schema.Boolean,
          name: Schema.NullOr(Schema.String),
          username: Schema.NullOr(Schema.String),
        }),
      ),
      deploys: Schema.Number,
      description: Schema.NullOr(Schema.String),
      health: Schema.NullOr(Schema.Number),
      image: Schema.NullOr(Schema.String),
      name: Schema.String,
      teamId: Schema.NullOr(Schema.String),
      userId: Schema.NullOr(Schema.String),
      workspaceId: Schema.NullOr(Schema.String),
    }),
  ),
  state: Schema.NullOr(Schema.String),
  totalDeploys: Schema.Number,
  username: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("userProfile"));
export type GetUserProfileOutput = typeof GetUserProfileOutput.Type;

/**
 * Get the public profile for a user
 */
export const getUserProfile = API.make(() => ({
  inputSchema: GetUserProfileInput,
  outputSchema: GetUserProfileOutput,
}));
