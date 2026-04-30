import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation userPreference {\n  userPreference\n}";

// Input Schema (GraphQL variables)
export const UserPreferenceInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userPreference",
    type: "mutation",
  }),
);
export type UserPreferenceInput = typeof UserPreferenceInput.Type;

// Output Schema (GraphQL selection set)
export const UserPreferenceOutput = Schema.Unknown;
export type UserPreferenceOutput = typeof UserPreferenceOutput.Type;

/**
 * Mutation interface for user preferences
 */
export const userPreference = API.make(() => ({
  inputSchema: UserPreferenceInput,
  outputSchema: UserPreferenceOutput,
}));
