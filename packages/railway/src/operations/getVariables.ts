import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "query variables($environmentId: String!, $projectId: String!, $serviceId: String, $unrendered: Boolean) {\n  variables(environmentId: $environmentId, projectId: $projectId, serviceId: $serviceId, unrendered: $unrendered)\n}";

// Input Schema (GraphQL variables)
export const GetVariablesInput = Schema.Struct({
  environmentId: Schema.String,
  projectId: Schema.String,
  serviceId: Schema.optional(Schema.NullOr(Schema.String)),
  unrendered: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "variables",
    type: "query",
  }),
);
export type GetVariablesInput = typeof GetVariablesInput.Type;

// Output Schema (GraphQL selection set)
export const GetVariablesOutput = Schema.Unknown.pipe(
  T.ResponsePath("variables"),
);
export type GetVariablesOutput = typeof GetVariablesOutput.Type;

/**
 * All variables by pluginId or serviceId. If neither are provided, all shared variables are returned.
 */
export const getVariables = API.make(() => ({
  inputSchema: GetVariablesInput,
  outputSchema: GetVariablesOutput,
  errors: [NotAuthorized],
}));
