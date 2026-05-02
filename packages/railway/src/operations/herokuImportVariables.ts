import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation herokuImportVariables($input: HerokuImportVariablesInput!) {\n  herokuImportVariables(input: $input)\n}";

// Input Schema (GraphQL variables)
export const HerokuImportVariablesInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    herokuAppId: Schema.String,
    projectId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "herokuImportVariables",
    type: "mutation",
  }),
);
export type HerokuImportVariablesInput = typeof HerokuImportVariablesInput.Type;

// Output Schema (GraphQL selection set)
export const HerokuImportVariablesOutput = Schema.Number.pipe(
  T.ResponsePath("herokuImportVariables"),
);
export type HerokuImportVariablesOutput =
  typeof HerokuImportVariablesOutput.Type;

/**
 * Import variables from a Heroku app into a Railway service. Returns the number of variables imports
 */
export const herokuImportVariables = API.make(() => ({
  inputSchema: HerokuImportVariablesInput,
  outputSchema: HerokuImportVariablesOutput,
}));
