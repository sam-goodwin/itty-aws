import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation overrideBaseEnvironment($id: String!, $input: BaseEnvironmentOverrideInput!) {\n  baseEnvironmentOverride(id: $id, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const OverrideBaseEnvironmentInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    baseEnvironmentOverrideId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "overrideBaseEnvironment",
    type: "mutation",
  }),
);
export type OverrideBaseEnvironmentInput =
  typeof OverrideBaseEnvironmentInput.Type;

// Output Schema (GraphQL selection set)
export const OverrideBaseEnvironmentOutput = Schema.Boolean.pipe(
  T.ResponsePath("baseEnvironmentOverride"),
);
export type OverrideBaseEnvironmentOutput =
  typeof OverrideBaseEnvironmentOutput.Type;

/**
 * Sets the base environment override for a deployment trigger.
 */
export const overrideBaseEnvironment = API.make(() => ({
  inputSchema: OverrideBaseEnvironmentInput,
  outputSchema: OverrideBaseEnvironmentOutput,
}));
