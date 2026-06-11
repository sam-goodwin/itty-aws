import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation variableCollectionUpsert($input: VariableCollectionUpsertInput!) {\n  variableCollectionUpsert(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpsertVariableCollectionInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    projectId: Schema.String,
    replace: Schema.optional(Schema.NullOr(Schema.Boolean)),
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
    skipDeploys: Schema.optional(Schema.NullOr(Schema.Boolean)),
    variables: Schema.Unknown,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "variableCollectionUpsert",
    type: "mutation",
  }),
);
export type UpsertVariableCollectionInput =
  typeof UpsertVariableCollectionInput.Type;

// Output Schema (GraphQL selection set)
export const UpsertVariableCollectionOutput = Schema.Boolean.pipe(
  T.ResponsePath("variableCollectionUpsert"),
);
export type UpsertVariableCollectionOutput =
  typeof UpsertVariableCollectionOutput.Type;

/**
 * Upserts a collection of variables.
 */
export const upsertVariableCollection = API.make(() => ({
  inputSchema: UpsertVariableCollectionInput,
  outputSchema: UpsertVariableCollectionOutput,
}));
