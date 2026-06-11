import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getServiceDomainAvailable($domain: String!) {\n  serviceDomainAvailable(domain: $domain) {\n    available\n    message\n  }\n}";

// Input Schema (GraphQL variables)
export const GetServiceDomainAvailableInput = Schema.Struct({
  domain: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getServiceDomainAvailable",
    type: "query",
  }),
);
export type GetServiceDomainAvailableInput =
  typeof GetServiceDomainAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const GetServiceDomainAvailableOutput = Schema.Struct({
  available: Schema.Boolean,
  message: Schema.String,
}).pipe(T.ResponsePath("serviceDomainAvailable"));
export type GetServiceDomainAvailableOutput =
  typeof GetServiceDomainAvailableOutput.Type;

/**
 * Checks if a service domain is available
 */
export const getServiceDomainAvailable = API.make(() => ({
  inputSchema: GetServiceDomainAvailableInput,
  outputSchema: GetServiceDomainAvailableOutput,
}));
