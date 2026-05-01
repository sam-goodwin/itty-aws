import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation iosAppBuildCredentialsDeleteIosAppBuildCredentials($id: ID!) {\n  iosAppBuildCredentials {\n    deleteIosAppBuildCredentials(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const IosAppBuildCredentialsDeleteIosAppBuildCredentialsInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "iosAppBuildCredentialsDeleteIosAppBuildCredentials",
      type: "mutation",
    }),
  );
export type IosAppBuildCredentialsDeleteIosAppBuildCredentialsInput =
  typeof IosAppBuildCredentialsDeleteIosAppBuildCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const IosAppBuildCredentialsDeleteIosAppBuildCredentialsOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath("iosAppBuildCredentials.deleteIosAppBuildCredentials"),
  );
export type IosAppBuildCredentialsDeleteIosAppBuildCredentialsOutput =
  typeof IosAppBuildCredentialsDeleteIosAppBuildCredentialsOutput.Type;

export const iosAppBuildCredentialsDeleteIosAppBuildCredentials = API.make(
  () => ({
    inputSchema: IosAppBuildCredentialsDeleteIosAppBuildCredentialsInput,
    outputSchema: IosAppBuildCredentialsDeleteIosAppBuildCredentialsOutput,
  }),
);
