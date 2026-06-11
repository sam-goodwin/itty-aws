import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getTcpProxies($environmentId: String!, $serviceId: String!) {\n  tcpProxies(environmentId: $environmentId, serviceId: $serviceId) {\n    applicationPort\n    createdAt\n    deletedAt\n    domain\n    environmentId\n    id\n    proxyPort\n    serviceId\n    syncStatus\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const GetTcpProxiesInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getTcpProxies",
    type: "query",
  }),
);
export type GetTcpProxiesInput = typeof GetTcpProxiesInput.Type;

// Output Schema (GraphQL selection set)
export const GetTcpProxiesOutput = Schema.Array(
  Schema.Struct({
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
  }),
).pipe(T.ResponsePath("tcpProxies"));
export type GetTcpProxiesOutput = typeof GetTcpProxiesOutput.Type;

/**
 * All TCP proxies for a service instance
 */
export const getTcpProxies = API.make(() => ({
  inputSchema: GetTcpProxiesInput,
  outputSchema: GetTcpProxiesOutput,
}));
