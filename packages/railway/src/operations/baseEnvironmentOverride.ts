import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation baseEnvironmentOverride($id: String!, $input: BaseEnvironmentOverrideInput!) {\n  baseEnvironmentOverride(id: $id, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const BaseEnvironmentOverrideInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    baseEnvironmentOverrideId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "baseEnvironmentOverride",
    type: "mutation",
  }),
);
export type BaseEnvironmentOverrideInput =
  typeof BaseEnvironmentOverrideInput.Type;

// Output Schema (GraphQL selection set)
export const BaseEnvironmentOverrideOutput = Schema.Boolean.pipe(
  T.ResponsePath("baseEnvironmentOverride"),
);
export type BaseEnvironmentOverrideOutput =
  typeof BaseEnvironmentOverrideOutput.Type;

/**
 * Sets the base environment override for a deployment trigger.
 */
export const baseEnvironmentOverride = API.make(() => ({
  inputSchema: BaseEnvironmentOverrideInput,
  outputSchema: BaseEnvironmentOverrideOutput,
}));
