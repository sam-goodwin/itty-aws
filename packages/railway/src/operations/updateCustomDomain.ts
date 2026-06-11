import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customDomainUpdate($environmentId: String!, $id: String!, $targetPort: Int) {\n  customDomainUpdate(environmentId: $environmentId, id: $id, targetPort: $targetPort) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateCustomDomainInput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
  targetPort: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainUpdate",
    type: "mutation",
  }),
);
export type UpdateCustomDomainInput = typeof UpdateCustomDomainInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateCustomDomainOutput = Schema.Boolean.pipe(
  T.ResponsePath("customDomainUpdate"),
);
export type UpdateCustomDomainOutput = typeof UpdateCustomDomainOutput.Type;

/**
 * Updates a custom domain.
 */
export const updateCustomDomain = API.make(() => ({
  inputSchema: UpdateCustomDomainInput,
  outputSchema: UpdateCustomDomainOutput,
}));
