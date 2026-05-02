import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceDomainDelete($id: String!) {\n  serviceDomainDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceDomainDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceDomainDelete",
    type: "mutation",
  }),
);
export type ServiceDomainDeleteInput = typeof ServiceDomainDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceDomainDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceDomainDelete"),
);
export type ServiceDomainDeleteOutput = typeof ServiceDomainDeleteOutput.Type;

/**
 * Deletes a service domain.
 */
export const serviceDomainDelete = API.make(() => ({
  inputSchema: ServiceDomainDeleteInput,
  outputSchema: ServiceDomainDeleteOutput,
}));
