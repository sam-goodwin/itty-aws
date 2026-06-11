import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceAutoDeployUpdate($input: ServiceInstanceAutoDeployUpdateInput!) {\n  serviceInstanceAutoDeployUpdate(input: $input) {\n    enabled\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateServiceInstanceAutoDeployInput = Schema.Struct({
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
export type UpdateServiceInstanceAutoDeployInput =
  typeof UpdateServiceInstanceAutoDeployInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateServiceInstanceAutoDeployOutput = Schema.Struct({
  enabled: Schema.Boolean,
}).pipe(T.ResponsePath("serviceInstanceAutoDeployUpdate"));
export type UpdateServiceInstanceAutoDeployOutput =
  typeof UpdateServiceInstanceAutoDeployOutput.Type;

/**
 * Enables or disables auto-deploy for a service instance.
 */
export const updateServiceInstanceAutoDeploy = API.make(() => ({
  inputSchema: UpdateServiceInstanceAutoDeployInput,
  outputSchema: UpdateServiceInstanceAutoDeployOutput,
}));
