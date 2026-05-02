import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userProfileUpdate($input: UserProfileUpdateInput!) {\n  userProfileUpdate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UserProfileUpdateInput = Schema.Struct({
  input: Schema.Struct({
    bio: Schema.optional(Schema.NullOr(Schema.String)),
    isPublic: Schema.Boolean,
    website: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userProfileUpdate",
    type: "mutation",
  }),
);
export type UserProfileUpdateInput = typeof UserProfileUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const UserProfileUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("userProfileUpdate"),
);
export type UserProfileUpdateOutput = typeof UserProfileUpdateOutput.Type;

/**
 * Updates the profile for the authenticated user
 */
export const userProfileUpdate = API.make(() => ({
  inputSchema: UserProfileUpdateInput,
  outputSchema: UserProfileUpdateOutput,
}));
