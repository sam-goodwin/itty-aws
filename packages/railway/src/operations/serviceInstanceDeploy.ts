import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceDeploy($commitSha: String, $environmentId: String!, $latestCommit: Boolean, $serviceId: String!) {\n  serviceInstanceDeploy(commitSha: $commitSha, environmentId: $environmentId, latestCommit: $latestCommit, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceDeployInput = Schema.Struct({
  commitSha: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  latestCommit: Schema.optional(Schema.NullOr(Schema.Boolean)),
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceDeploy",
    type: "mutation",
  }),
);
export type ServiceInstanceDeployInput = typeof ServiceInstanceDeployInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceDeployOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceDeploy"),
);
export type ServiceInstanceDeployOutput =
  typeof ServiceInstanceDeployOutput.Type;

/**
 * Deploy a service instance
 */
export const serviceInstanceDeploy = API.make(() => ({
  inputSchema: ServiceInstanceDeployInput,
  outputSchema: ServiceInstanceDeployOutput,
}));
