import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation unskipEnvironmentService($environmentId: String!, $serviceId: String!) {\n  environmentUnskipService(environmentId: $environmentId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UnskipEnvironmentServiceInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "unskipEnvironmentService",
    type: "mutation",
  }),
);
export type UnskipEnvironmentServiceInput =
  typeof UnskipEnvironmentServiceInput.Type;

// Output Schema (GraphQL selection set)
export const UnskipEnvironmentServiceOutput = Schema.Boolean.pipe(
  T.ResponsePath("environmentUnskipService"),
);
export type UnskipEnvironmentServiceOutput =
  typeof UnskipEnvironmentServiceOutput.Type;

/**
 * Unskip a service in a PR environment, deploying it and its transitive dependencies.
 */
export const unskipEnvironmentService = API.make(() => ({
  inputSchema: UnskipEnvironmentServiceInput,
  outputSchema: UnskipEnvironmentServiceOutput,
}));
