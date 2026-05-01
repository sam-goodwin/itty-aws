import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidAppCredentialsDeleteAndroidAppCredentials($id: ID!) {\n  androidAppCredentials {\n    deleteAndroidAppCredentials(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AndroidAppCredentialsDeleteAndroidAppCredentialsInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "androidAppCredentialsDeleteAndroidAppCredentials",
      type: "mutation",
    }),
  );
export type AndroidAppCredentialsDeleteAndroidAppCredentialsInput =
  typeof AndroidAppCredentialsDeleteAndroidAppCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidAppCredentialsDeleteAndroidAppCredentialsOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(T.ResponsePath("androidAppCredentials.deleteAndroidAppCredentials"));
export type AndroidAppCredentialsDeleteAndroidAppCredentialsOutput =
  typeof AndroidAppCredentialsDeleteAndroidAppCredentialsOutput.Type;

export const androidAppCredentialsDeleteAndroidAppCredentials = API.make(
  () => ({
    inputSchema: AndroidAppCredentialsDeleteAndroidAppCredentialsInput,
    outputSchema: AndroidAppCredentialsDeleteAndroidAppCredentialsOutput,
  }),
);
