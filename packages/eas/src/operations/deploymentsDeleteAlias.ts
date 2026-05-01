import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentsDeleteAlias($aliasName: WorkerDeploymentIdentifier, $appId: ID!) {\n  deployments {\n    deleteAlias(aliasName: $aliasName, appId: $appId) {\n      aliasName\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsDeleteAliasInput = Schema.Struct({
  aliasName: Schema.optional(Schema.NullOr(Schema.Unknown)),
  appId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentsDeleteAlias",
    type: "mutation",
  }),
);
export type DeploymentsDeleteAliasInput =
  typeof DeploymentsDeleteAliasInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsDeleteAliasOutput = Schema.Struct({
  aliasName: Schema.NullOr(Schema.Unknown),
  id: Schema.String,
}).pipe(T.ResponsePath("deployments.deleteAlias"));
export type DeploymentsDeleteAliasOutput =
  typeof DeploymentsDeleteAliasOutput.Type;

export const deploymentsDeleteAlias = API.make(() => ({
  inputSchema: DeploymentsDeleteAliasInput,
  outputSchema: DeploymentsDeleteAliasOutput,
}));
