import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation variableDelete($input: VariableDeleteInput!) {\n  variableDelete(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteVariableInput = Schema.Struct({
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
export type DeleteVariableInput = typeof DeleteVariableInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteVariableOutput = Schema.Boolean.pipe(
  T.ResponsePath("variableDelete"),
);
export type DeleteVariableOutput = typeof DeleteVariableOutput.Type;

/**
 * Deletes a variable.
 */
export const deleteVariable = API.make(() => ({
  inputSchema: DeleteVariableInput,
  outputSchema: DeleteVariableOutput,
}));
