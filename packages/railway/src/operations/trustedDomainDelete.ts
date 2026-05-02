import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation trustedDomainDelete($id: String!) {\n  trustedDomainDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const TrustedDomainDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "trustedDomainDelete",
    type: "mutation",
  }),
);
export type TrustedDomainDeleteInput = typeof TrustedDomainDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const TrustedDomainDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("trustedDomainDelete"),
);
export type TrustedDomainDeleteOutput = typeof TrustedDomainDeleteOutput.Type;

/**
 * Delete a trusted domain
 */
export const trustedDomainDelete = API.make(() => ({
  inputSchema: TrustedDomainDeleteInput,
  outputSchema: TrustedDomainDeleteOutput,
}));
