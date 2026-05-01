import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query snackByHashId($hashId: ID!) {\n  snack {\n    byHashId(hashId: $hashId) {\n      description\n      fullName\n      hasBeenRunSuccessfully\n      hashId\n      iconUrl\n      id\n      isDraft\n      name\n      previewImage\n      published\n      sdkVersion\n      slug\n      updated\n      username\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const SnackByHashIdInput = Schema.Struct({
  hashId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "snackByHashId",
    type: "query",
  }),
);
export type SnackByHashIdInput = typeof SnackByHashIdInput.Type;

// Output Schema (GraphQL selection set)
export const SnackByHashIdOutput = Schema.Struct({
  description: Schema.String,
  fullName: Schema.String,
  hasBeenRunSuccessfully: Schema.NullOr(Schema.Boolean),
  hashId: Schema.String,
  iconUrl: Schema.NullOr(Schema.String),
  id: Schema.String,
  isDraft: Schema.Boolean,
  name: Schema.String,
  previewImage: Schema.NullOr(Schema.String),
  published: Schema.Boolean,
  sdkVersion: Schema.String,
  slug: Schema.String,
  updated: Schema.String,
  username: Schema.String,
}).pipe(T.ResponsePath("snack.byHashId"));
export type SnackByHashIdOutput = typeof SnackByHashIdOutput.Type;

export const snackByHashId = API.make(() => ({
  inputSchema: SnackByHashIdInput,
  outputSchema: SnackByHashIdOutput,
}));
