import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customDomainDelete($id: String!) {\n  customDomainDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CustomDomainDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainDelete",
    type: "mutation",
  }),
);
export type CustomDomainDeleteInput = typeof CustomDomainDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const CustomDomainDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("customDomainDelete"),
);
export type CustomDomainDeleteOutput = typeof CustomDomainDeleteOutput.Type;

/**
 * Deletes a custom domain.
 */
export const customDomainDelete = API.make(() => ({
  inputSchema: CustomDomainDeleteInput,
  outputSchema: CustomDomainDeleteOutput,
}));
