import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteServiceDomain($id: String!) {\n  serviceDomainDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteServiceDomainInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteServiceDomain",
    type: "mutation",
  }),
);
export type DeleteServiceDomainInput = typeof DeleteServiceDomainInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteServiceDomainOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceDomainDelete"),
);
export type DeleteServiceDomainOutput = typeof DeleteServiceDomainOutput.Type;

/**
 * Deletes a service domain.
 */
export const deleteServiceDomain = API.make(() => ({
  inputSchema: DeleteServiceDomainInput,
  outputSchema: DeleteServiceDomainOutput,
}));
