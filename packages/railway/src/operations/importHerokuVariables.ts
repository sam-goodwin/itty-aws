import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation importHerokuVariables($input: HerokuImportVariablesInput!) {\n  herokuImportVariables(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ImportHerokuVariablesInput = Schema.Struct({
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
    operationName: "importHerokuVariables",
    type: "mutation",
  }),
);
export type ImportHerokuVariablesInput = typeof ImportHerokuVariablesInput.Type;

// Output Schema (GraphQL selection set)
export const ImportHerokuVariablesOutput = Schema.Number.pipe(
  T.ResponsePath("herokuImportVariables"),
);
export type ImportHerokuVariablesOutput =
  typeof ImportHerokuVariablesOutput.Type;

/**
 * Import variables from a Heroku app into a Railway service. Returns the number of variables imports
 */
export const importHerokuVariables = API.make(() => ({
  inputSchema: ImportHerokuVariablesInput,
  outputSchema: ImportHerokuVariablesOutput,
}));
