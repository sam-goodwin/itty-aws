import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userPreferenceSet($key: String!, $value: JSON!) {\n  userPreference {\n    set(key: $key, value: $value) {\n      createdAt\n      id\n      key\n      updatedAt\n      value\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserPreferenceSetInput = Schema.Struct({
  key: Schema.String,
  value: Schema.Unknown,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userPreferenceSet",
    type: "mutation",
  }),
);
export type UserPreferenceSetInput = typeof UserPreferenceSetInput.Type;

// Output Schema (GraphQL selection set)
export const UserPreferenceSetOutput = Schema.Struct({
  createdAt: Schema.String,
  id: Schema.String,
  key: Schema.String,
  updatedAt: Schema.String,
  value: Schema.Unknown,
}).pipe(T.ResponsePath("userPreference.set"));
export type UserPreferenceSetOutput = typeof UserPreferenceSetOutput.Type;

export const userPreferenceSet = API.make(() => ({
  inputSchema: UserPreferenceSetInput,
  outputSchema: UserPreferenceSetOutput,
}));
