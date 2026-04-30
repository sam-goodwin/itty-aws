import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation devDomainName {\n  devDomainName\n}";

// Input Schema (GraphQL variables)
export const DevDomainNameInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "devDomainName",
    type: "mutation",
  }),
);
export type DevDomainNameInput = typeof DevDomainNameInput.Type;

// Output Schema (GraphQL selection set)
export const DevDomainNameOutput = Schema.Unknown;
export type DevDomainNameOutput = typeof DevDomainNameOutput.Type;

/**
 * Mutations that assign or modify DevDomainNames for apps
 */
export const devDomainName = API.make(() => ({
  inputSchema: DevDomainNameInput,
  outputSchema: DevDomainNameOutput,
}));
