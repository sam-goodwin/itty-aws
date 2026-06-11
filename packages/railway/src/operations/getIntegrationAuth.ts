import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getIntegrationAuth($provider: String!, $providerId: String!) {\n  integrationAuth(provider: $provider, providerId: $providerId) {\n    id\n    provider\n    providerId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetIntegrationAuthInput = Schema.Struct({
  provider: Schema.String,
  providerId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getIntegrationAuth",
    type: "query",
  }),
);
export type GetIntegrationAuthInput = typeof GetIntegrationAuthInput.Type;

// Output Schema (GraphQL selection set)
export const GetIntegrationAuthOutput = Schema.Struct({
  id: Schema.String,
  provider: Schema.String,
  providerId: Schema.String,
}).pipe(T.ResponsePath("integrationAuth"));
export type GetIntegrationAuthOutput = typeof GetIntegrationAuthOutput.Type;

/**
 * Get an integration auth by provider providerId
 */
export const getIntegrationAuth = API.make(() => ({
  inputSchema: GetIntegrationAuthInput,
  outputSchema: GetIntegrationAuthOutput,
}));
