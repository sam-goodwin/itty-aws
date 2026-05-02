import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceAutoDeployUpdate($input: ServiceInstanceAutoDeployUpdateInput!) {\n  serviceInstanceAutoDeployUpdate(input: $input) {\n    enabled\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceAutoDeployUpdateInput = Schema.Struct({
  input: Schema.Struct({
    enabled: Schema.Boolean,
    environmentId: Schema.String,
    projectId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceAutoDeployUpdate",
    type: "mutation",
  }),
);
export type ServiceInstanceAutoDeployUpdateInput =
  typeof ServiceInstanceAutoDeployUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceAutoDeployUpdateOutput = Schema.Struct({
  enabled: Schema.Boolean,
}).pipe(T.ResponsePath("serviceInstanceAutoDeployUpdate"));
export type ServiceInstanceAutoDeployUpdateOutput =
  typeof ServiceInstanceAutoDeployUpdateOutput.Type;

/**
 * Enables or disables auto-deploy for a service instance.
 */
export const serviceInstanceAutoDeployUpdate = API.make(() => ({
  inputSchema: ServiceInstanceAutoDeployUpdateInput,
  outputSchema: ServiceInstanceAutoDeployUpdateOutput,
}));
