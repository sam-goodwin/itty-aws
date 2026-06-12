import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "mutation serviceDomainUpdate($input: ServiceDomainUpdateInput!) {\n  serviceDomainUpdate(input: $input)\n}";

// Input Schema (GraphQL variables)
export const UpdateServiceDomainInput = Schema.Struct({
  input: Schema.Struct({
    domain: Schema.String,
    environmentId: Schema.String,
    serviceDomainId: Schema.String,
    serviceId: Schema.String,
    targetPort: Schema.optional(Schema.NullOr(Schema.Number)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceDomainUpdate",
    type: "mutation",
  }),
);
export type UpdateServiceDomainInput = typeof UpdateServiceDomainInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateServiceDomainOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceDomainUpdate"),
);
export type UpdateServiceDomainOutput = typeof UpdateServiceDomainOutput.Type;

/**
 * Updates a service domain.
 */
export const updateServiceDomain = API.make(() => ({
  inputSchema: UpdateServiceDomainInput,
  outputSchema: UpdateServiceDomainOutput,
  errors: [NotAuthorized],
}));
