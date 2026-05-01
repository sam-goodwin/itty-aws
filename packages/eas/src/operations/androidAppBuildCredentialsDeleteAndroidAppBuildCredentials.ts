import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidAppBuildCredentialsDeleteAndroidAppBuildCredentials($id: ID!) {\n  androidAppBuildCredentials {\n    deleteAndroidAppBuildCredentials(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "androidAppBuildCredentialsDeleteAndroidAppBuildCredentials",
      type: "mutation",
    }),
  );
export type AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsInput =
  typeof AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath(
      "androidAppBuildCredentials.deleteAndroidAppBuildCredentials",
    ),
  );
export type AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsOutput =
  typeof AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsOutput.Type;

export const androidAppBuildCredentialsDeleteAndroidAppBuildCredentials =
  API.make(() => ({
    inputSchema:
      AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsInput,
    outputSchema:
      AndroidAppBuildCredentialsDeleteAndroidAppBuildCredentialsOutput,
  }));
