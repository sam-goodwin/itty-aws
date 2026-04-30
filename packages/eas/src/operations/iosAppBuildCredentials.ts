import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation iosAppBuildCredentials {\n  iosAppBuildCredentials\n}";

// Input Schema (GraphQL variables)
export const IosAppBuildCredentialsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "iosAppBuildCredentials",
    type: "mutation",
  }),
);
export type IosAppBuildCredentialsInput =
  typeof IosAppBuildCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const IosAppBuildCredentialsOutput = Schema.Unknown;
export type IosAppBuildCredentialsOutput =
  typeof IosAppBuildCredentialsOutput.Type;

/**
 * Mutations that modify the build credentials for an iOS app
 */
export const iosAppBuildCredentials = API.make(() => ({
  inputSchema: IosAppBuildCredentialsInput,
  outputSchema: IosAppBuildCredentialsOutput,
}));
