import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query integrationAuth($provider: String!, $providerId: String!) {\n  integrationAuth(provider: $provider, providerId: $providerId) {\n    id\n    provider\n    providerId\n  }\n}";

// Input Schema (GraphQL variables)
export const IntegrationAuthInput = Schema.Struct({
  provider: Schema.String,
  providerId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "integrationAuth",
    type: "query",
  }),
);
export type IntegrationAuthInput = typeof IntegrationAuthInput.Type;

// Output Schema (GraphQL selection set)
export const IntegrationAuthOutput = Schema.Struct({
  id: Schema.String,
  provider: Schema.String,
  providerId: Schema.String,
}).pipe(T.ResponsePath("integrationAuth"));
export type IntegrationAuthOutput = typeof IntegrationAuthOutput.Type;

/**
 * Get an integration auth by provider providerId
 */
export const integrationAuth = API.make(() => ({
  inputSchema: IntegrationAuthInput,
  outputSchema: IntegrationAuthOutput,
}));
