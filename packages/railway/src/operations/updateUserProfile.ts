import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userProfileUpdate($input: UserProfileUpdateInput!) {\n  userProfileUpdate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateUserProfileInput = Schema.Struct({
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
export type UpdateUserProfileInput = typeof UpdateUserProfileInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateUserProfileOutput = Schema.Boolean.pipe(
  T.ResponsePath("userProfileUpdate"),
);
export type UpdateUserProfileOutput = typeof UpdateUserProfileOutput.Type;

/**
 * Updates the profile for the authenticated user
 */
export const updateUserProfile = API.make(() => ({
  inputSchema: UpdateUserProfileInput,
  outputSchema: UpdateUserProfileOutput,
}));
