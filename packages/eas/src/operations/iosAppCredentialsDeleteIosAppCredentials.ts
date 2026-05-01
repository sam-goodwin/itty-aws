import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation iosAppCredentialsDeleteIosAppCredentials($id: ID!) {\n  iosAppCredentials {\n    deleteIosAppCredentials(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const IosAppCredentialsDeleteIosAppCredentialsInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "iosAppCredentialsDeleteIosAppCredentials",
    type: "mutation",
  }),
);
export type IosAppCredentialsDeleteIosAppCredentialsInput =
  typeof IosAppCredentialsDeleteIosAppCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const IosAppCredentialsDeleteIosAppCredentialsOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("iosAppCredentials.deleteIosAppCredentials"));
export type IosAppCredentialsDeleteIosAppCredentialsOutput =
  typeof IosAppCredentialsDeleteIosAppCredentialsOutput.Type;

export const iosAppCredentialsDeleteIosAppCredentials = API.make(() => ({
  inputSchema: IosAppCredentialsDeleteIosAppCredentialsInput,
  outputSchema: IosAppCredentialsDeleteIosAppCredentialsOutput,
}));
