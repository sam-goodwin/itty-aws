import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query userPreferenceGet($key: String!) {\n  userPreference {\n    get(key: $key) {\n      createdAt\n      id\n      key\n      updatedAt\n      value\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserPreferenceGetInput = Schema.Struct({
  key: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userPreferenceGet",
    type: "query",
  }),
);
export type UserPreferenceGetInput = typeof UserPreferenceGetInput.Type;

// Output Schema (GraphQL selection set)
export const UserPreferenceGetOutput = Schema.NullOr(
  Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    key: Schema.String,
    updatedAt: Schema.String,
    value: Schema.Unknown,
  }),
).pipe(T.ResponsePath("userPreference.get"));
export type UserPreferenceGetOutput = typeof UserPreferenceGetOutput.Type;

export const userPreferenceGet = API.make(() => ({
  inputSchema: UserPreferenceGetInput,
  outputSchema: UserPreferenceGetOutput,
}));
