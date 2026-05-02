import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation variableUpsert($input: VariableUpsertInput!) {\n  variableUpsert(input: $input)\n}";

// Input Schema (GraphQL variables)
export const VariableUpsertInput = Schema.Struct({
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
    operationName: "variableUpsert",
    type: "mutation",
  }),
);
export type VariableUpsertInput = typeof VariableUpsertInput.Type;

// Output Schema (GraphQL selection set)
export const VariableUpsertOutput = Schema.Boolean.pipe(
  T.ResponsePath("variableUpsert"),
);
export type VariableUpsertOutput = typeof VariableUpsertOutput.Type;

/**
 * Upserts a variable.
 */
export const variableUpsert = API.make(() => ({
  inputSchema: VariableUpsertInput,
  outputSchema: VariableUpsertOutput,
}));
