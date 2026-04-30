import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation iosAppCredentials {\n  iosAppCredentials\n}";

// Input Schema (GraphQL variables)
export const IosAppCredentialsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "iosAppCredentials",
    type: "mutation",
  }),
);
export type IosAppCredentialsInput = typeof IosAppCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const IosAppCredentialsOutput = Schema.Unknown;
export type IosAppCredentialsOutput = typeof IosAppCredentialsOutput.Type;

/**
 * Mutations that modify the credentials for an iOS app
 */
export const iosAppCredentials = API.make(() => ({
  inputSchema: IosAppCredentialsInput,
  outputSchema: IosAppCredentialsOutput,
}));
