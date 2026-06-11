import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query customDomainAvailable($domain: String!) {\n  customDomainAvailable(domain: $domain) {\n    available\n    message\n  }\n}";

// Input Schema (GraphQL variables)
export const GetCustomDomainAvailableInput = Schema.Struct({
  domain: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainAvailable",
    type: "query",
  }),
);
export type GetCustomDomainAvailableInput =
  typeof GetCustomDomainAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const GetCustomDomainAvailableOutput = Schema.Struct({
  available: Schema.Boolean,
  message: Schema.String,
}).pipe(T.ResponsePath("customDomainAvailable"));
export type GetCustomDomainAvailableOutput =
  typeof GetCustomDomainAvailableOutput.Type;

/**
 * Checks if a custom domain is available.
 */
export const getCustomDomainAvailable = API.make(() => ({
  inputSchema: GetCustomDomainAvailableInput,
  outputSchema: GetCustomDomainAvailableOutput,
}));
