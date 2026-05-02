import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation variableDelete($input: VariableDeleteInput!) {\n  variableDelete(input: $input)\n}";

// Input Schema (GraphQL variables)
export const VariableDeleteInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    name: Schema.String,
    projectId: Schema.String,
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "variableDelete",
    type: "mutation",
  }),
);
export type VariableDeleteInput = typeof VariableDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const VariableDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("variableDelete"),
);
export type VariableDeleteOutput = typeof VariableDeleteOutput.Type;

/**
 * Deletes a variable.
 */
export const variableDelete = API.make(() => ({
  inputSchema: VariableDeleteInput,
  outputSchema: VariableDeleteOutput,
}));
