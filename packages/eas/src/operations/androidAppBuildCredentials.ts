import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidAppBuildCredentials {\n  androidAppBuildCredentials\n}";

// Input Schema (GraphQL variables)
export const AndroidAppBuildCredentialsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidAppBuildCredentials",
    type: "mutation",
  }),
);
export type AndroidAppBuildCredentialsInput =
  typeof AndroidAppBuildCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidAppBuildCredentialsOutput = Schema.Unknown;
export type AndroidAppBuildCredentialsOutput =
  typeof AndroidAppBuildCredentialsOutput.Type;

/**
 * Mutations that modify the build credentials for an Android app
 */
export const androidAppBuildCredentials = API.make(() => ({
  inputSchema: AndroidAppBuildCredentialsInput,
  outputSchema: AndroidAppBuildCredentialsOutput,
}));
