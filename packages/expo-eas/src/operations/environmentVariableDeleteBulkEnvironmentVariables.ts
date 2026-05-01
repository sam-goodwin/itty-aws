import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentVariableDeleteBulkEnvironmentVariables($ids: [ID!]!) {\n  environmentVariable {\n    deleteBulkEnvironmentVariables(ids: $ids) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentVariableDeleteBulkEnvironmentVariablesInput =
  Schema.Struct({
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "environmentVariableDeleteBulkEnvironmentVariables",
      type: "mutation",
    }),
  );
export type EnvironmentVariableDeleteBulkEnvironmentVariablesInput =
  typeof EnvironmentVariableDeleteBulkEnvironmentVariablesInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentVariableDeleteBulkEnvironmentVariablesOutput =
  Schema.Array(
    Schema.Struct({
      id: Schema.String,
    }),
  ).pipe(T.ResponsePath("environmentVariable.deleteBulkEnvironmentVariables"));
export type EnvironmentVariableDeleteBulkEnvironmentVariablesOutput =
  typeof EnvironmentVariableDeleteBulkEnvironmentVariablesOutput.Type;

export const environmentVariableDeleteBulkEnvironmentVariables = API.make(
  () => ({
    inputSchema: EnvironmentVariableDeleteBulkEnvironmentVariablesInput,
    outputSchema: EnvironmentVariableDeleteBulkEnvironmentVariablesOutput,
  }),
);
