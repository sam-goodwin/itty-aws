import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query serviceDomainAvailable($domain: String!) {\n  serviceDomainAvailable(domain: $domain) {\n    available\n    message\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceDomainAvailableInput = Schema.Struct({
  domain: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceDomainAvailable",
    type: "query",
  }),
);
export type ServiceDomainAvailableInput =
  typeof ServiceDomainAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceDomainAvailableOutput = Schema.Struct({
  available: Schema.Boolean,
  message: Schema.String,
}).pipe(T.ResponsePath("serviceDomainAvailable"));
export type ServiceDomainAvailableOutput =
  typeof ServiceDomainAvailableOutput.Type;

/**
 * Checks if a service domain is available
 */
export const serviceDomainAvailable = API.make(() => ({
  inputSchema: ServiceDomainAvailableInput,
  outputSchema: ServiceDomainAvailableOutput,
}));
