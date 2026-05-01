import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customDomainDeleteCustomDomain($customDomainId: ID!) {\n  customDomain {\n    deleteCustomDomain(customDomainId: $customDomainId) {\n      appId\n      hostname\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const CustomDomainDeleteCustomDomainInput = Schema.Struct({
  customDomainId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainDeleteCustomDomain",
    type: "mutation",
  }),
);
export type CustomDomainDeleteCustomDomainInput =
  typeof CustomDomainDeleteCustomDomainInput.Type;

// Output Schema (GraphQL selection set)
export const CustomDomainDeleteCustomDomainOutput = Schema.Struct({
  appId: Schema.String,
  hostname: Schema.String,
  id: Schema.String,
}).pipe(T.ResponsePath("customDomain.deleteCustomDomain"));
export type CustomDomainDeleteCustomDomainOutput =
  typeof CustomDomainDeleteCustomDomainOutput.Type;

export const customDomainDeleteCustomDomain = API.make(() => ({
  inputSchema: CustomDomainDeleteCustomDomainInput,
  outputSchema: CustomDomainDeleteCustomDomainOutput,
}));
