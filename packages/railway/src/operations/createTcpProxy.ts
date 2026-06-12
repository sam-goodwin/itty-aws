import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized, TcpProxyLimitExceeded } from "./errors.ts";

const __document =
  "mutation tcpProxyCreate($input: TCPProxyCreateInput!) {\n  tcpProxyCreate(input: $input) {\n    applicationPort\n    createdAt\n    deletedAt\n    domain\n    environmentId\n    id\n    proxyPort\n    serviceId\n    syncStatus\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateTcpProxyInput = Schema.Struct({
  input: Schema.Struct({
    applicationPort: Schema.Number,
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "tcpProxyCreate",
    type: "mutation",
  }),
);
export type CreateTcpProxyInput = typeof CreateTcpProxyInput.Type;

// Output Schema (GraphQL selection set)
export const CreateTcpProxyOutput = Schema.Struct({
  applicationPort: Schema.Number,
  createdAt: Schema.NullOr(Schema.String),
  deletedAt: Schema.NullOr(Schema.String),
  domain: Schema.String,
  environmentId: Schema.String,
  id: Schema.String,
  proxyPort: Schema.Number,
  serviceId: Schema.String,
  syncStatus: Schema.Literals([
    "ACTIVE",
    "CREATING",
    "DELETED",
    "DELETING",
    "UNSPECIFIED",
    "UPDATING",
  ]),
  updatedAt: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("tcpProxyCreate"));
export type CreateTcpProxyOutput = typeof CreateTcpProxyOutput.Type;

/**
 * Creates a new TCP proxy for a service instance.
 */
export const createTcpProxy = API.make(() => ({
  inputSchema: CreateTcpProxyInput,
  outputSchema: CreateTcpProxyOutput,
  errors: [NotAuthorized, TcpProxyLimitExceeded],
}));
