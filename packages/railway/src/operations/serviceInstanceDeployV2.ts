import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceDeployV2($commitSha: String, $environmentId: String!, $serviceId: String!) {\n  serviceInstanceDeployV2(commitSha: $commitSha, environmentId: $environmentId, serviceId: $serviceId)\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceDeployV2Input = Schema.Struct({
  commitSha: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceDeployV2",
    type: "mutation",
  }),
);
export type ServiceInstanceDeployV2Input =
  typeof ServiceInstanceDeployV2Input.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceDeployV2Output = Schema.String.pipe(
  T.ResponsePath("serviceInstanceDeployV2"),
);
export type ServiceInstanceDeployV2Output =
  typeof ServiceInstanceDeployV2Output.Type;

/**
 * Deploy a service instance. Returns a deployment ID
 */
export const serviceInstanceDeployV2 = API.make(() => ({
  inputSchema: ServiceInstanceDeployV2Input,
  outputSchema: ServiceInstanceDeployV2Output,
}));
