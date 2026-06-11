import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation upsertVariable($input: VariableUpsertInput!) {\n  variableUpsert(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpsertVariableInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    name: Schema.String,
    projectId: Schema.String,
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
    skipDeploys: Schema.optional(Schema.NullOr(Schema.Boolean)),
    value: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "upsertVariable",
    type: "mutation",
  }),
);
export type UpsertVariableInput = typeof UpsertVariableInput.Type;

// Output Schema (GraphQL selection set)
export const UpsertVariableOutput = Schema.Boolean.pipe(
  T.ResponsePath("variableUpsert"),
);
export type UpsertVariableOutput = typeof UpsertVariableOutput.Type;

/**
 * Upserts a variable.
 */
export const upsertVariable = API.make(() => ({
  inputSchema: UpsertVariableInput,
  outputSchema: UpsertVariableOutput,
}));
