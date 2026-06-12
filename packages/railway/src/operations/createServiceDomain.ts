import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "mutation serviceDomainCreate($input: ServiceDomainCreateInput!) {\n  serviceDomainCreate(input: $input) {\n    cdnMode\n    createdAt\n    deletedAt\n    domain\n    edgeId\n    environmentId\n    id\n    newDomainName\n    newHostLabel\n    projectId\n    serviceId\n    suffix\n    syncStatus\n    targetPort\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateServiceDomainInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    serviceId: Schema.String,
    targetPort: Schema.optional(Schema.NullOr(Schema.Number)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceDomainCreate",
    type: "mutation",
  }),
);
export type CreateServiceDomainInput = typeof CreateServiceDomainInput.Type;

// Output Schema (GraphQL selection set)
export const CreateServiceDomainOutput = Schema.Struct({
  cdnMode: Schema.NullOr(Schema.String),
  createdAt: Schema.NullOr(Schema.String),
  deletedAt: Schema.NullOr(Schema.String),
  domain: Schema.String,
  edgeId: Schema.NullOr(Schema.String),
  environmentId: Schema.String,
  id: Schema.String,
  newDomainName: Schema.NullOr(Schema.String),
  newHostLabel: Schema.NullOr(Schema.String),
  projectId: Schema.NullOr(Schema.String),
  serviceId: Schema.String,
  suffix: Schema.NullOr(Schema.String),
  syncStatus: Schema.Literals([
    "ACTIVE",
    "CREATING",
    "DELETED",
    "DELETING",
    "UNSPECIFIED",
    "UPDATING",
  ]),
  targetPort: Schema.NullOr(Schema.Number),
  updatedAt: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("serviceDomainCreate"));
export type CreateServiceDomainOutput = typeof CreateServiceDomainOutput.Type;

/**
 * Creates a new service domain.
 */
export const createServiceDomain = API.make(() => ({
  inputSchema: CreateServiceDomainInput,
  outputSchema: CreateServiceDomainOutput,
  errors: [NotAuthorized],
}));
