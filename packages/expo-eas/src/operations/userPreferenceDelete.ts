import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userPreferenceDelete($key: String!) {\n  userPreference {\n    delete(key: $key) {\n      createdAt\n      id\n      key\n      updatedAt\n      value\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserPreferenceDeleteInput = Schema.Struct({
  key: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userPreferenceDelete",
    type: "mutation",
  }),
);
export type UserPreferenceDeleteInput = typeof UserPreferenceDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const UserPreferenceDeleteOutput = Schema.NullOr(
  Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    key: Schema.String,
    updatedAt: Schema.String,
    value: Schema.Unknown,
  }),
).pipe(T.ResponsePath("userPreference.delete"));
export type UserPreferenceDeleteOutput = typeof UserPreferenceDeleteOutput.Type;

export const userPreferenceDelete = API.make(() => ({
  inputSchema: UserPreferenceDeleteInput,
  outputSchema: UserPreferenceDeleteOutput,
}));
