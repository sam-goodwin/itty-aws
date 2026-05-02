import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentUnskipService($environmentId: String!, $serviceId: String!) {\n  environmentUnskipService(environmentId: $environmentId, serviceId: $serviceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentUnskipServiceInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentUnskipService",
    type: "mutation",
  }),
);
export type EnvironmentUnskipServiceInput =
  typeof EnvironmentUnskipServiceInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentUnskipServiceOutput = Schema.Boolean.pipe(
  T.ResponsePath("environmentUnskipService"),
);
export type EnvironmentUnskipServiceOutput =
  typeof EnvironmentUnskipServiceOutput.Type;

/**
 * Unskip a service in a PR environment, deploying it and its transitive dependencies.
 */
export const environmentUnskipService = API.make(() => ({
  inputSchema: EnvironmentUnskipServiceInput,
  outputSchema: EnvironmentUnskipServiceOutput,
}));
