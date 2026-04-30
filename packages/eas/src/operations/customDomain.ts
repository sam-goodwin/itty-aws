import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation customDomain {\n  customDomain\n}";

// Input Schema (GraphQL variables)
export const CustomDomainInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomain",
    type: "mutation",
  }),
);
export type CustomDomainInput = typeof CustomDomainInput.Type;

// Output Schema (GraphQL selection set)
export const CustomDomainOutput = Schema.Unknown;
export type CustomDomainOutput = typeof CustomDomainOutput.Type;

export const customDomain = API.make(() => ({
  inputSchema: CustomDomainInput,
  outputSchema: CustomDomainOutput,
}));
