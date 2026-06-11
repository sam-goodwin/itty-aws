import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customDomainDelete($id: String!) {\n  customDomainDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteCustomDomainInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainDelete",
    type: "mutation",
  }),
);
export type DeleteCustomDomainInput = typeof DeleteCustomDomainInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteCustomDomainOutput = Schema.Boolean.pipe(
  T.ResponsePath("customDomainDelete"),
);
export type DeleteCustomDomainOutput = typeof DeleteCustomDomainOutput.Type;

/**
 * Deletes a custom domain.
 */
export const deleteCustomDomain = API.make(() => ({
  inputSchema: DeleteCustomDomainInput,
  outputSchema: DeleteCustomDomainOutput,
}));
