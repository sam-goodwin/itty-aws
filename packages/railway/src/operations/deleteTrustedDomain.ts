import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation trustedDomainDelete($id: String!) {\n  trustedDomainDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteTrustedDomainInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "trustedDomainDelete",
    type: "mutation",
  }),
);
export type DeleteTrustedDomainInput = typeof DeleteTrustedDomainInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteTrustedDomainOutput = Schema.Boolean.pipe(
  T.ResponsePath("trustedDomainDelete"),
);
export type DeleteTrustedDomainOutput = typeof DeleteTrustedDomainOutput.Type;

/**
 * Delete a trusted domain
 */
export const deleteTrustedDomain = API.make(() => ({
  inputSchema: DeleteTrustedDomainInput,
  outputSchema: DeleteTrustedDomainOutput,
}));
