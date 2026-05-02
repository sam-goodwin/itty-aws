import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query customDomainAvailable($domain: String!) {\n  customDomainAvailable(domain: $domain) {\n    available\n    message\n  }\n}";

// Input Schema (GraphQL variables)
export const CustomDomainAvailableInput = Schema.Struct({
  domain: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainAvailable",
    type: "query",
  }),
);
export type CustomDomainAvailableInput = typeof CustomDomainAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const CustomDomainAvailableOutput = Schema.Struct({
  available: Schema.Boolean,
  message: Schema.String,
}).pipe(T.ResponsePath("customDomainAvailable"));
export type CustomDomainAvailableOutput =
  typeof CustomDomainAvailableOutput.Type;

/**
 * Checks if a custom domain is available.
 */
export const customDomainAvailable = API.make(() => ({
  inputSchema: CustomDomainAvailableInput,
  outputSchema: CustomDomainAvailableOutput,
}));
