import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query experimentation {\n  experimentation {\n    accountConfig\n    deviceConfig\n    deviceExperimentationUnit\n    userConfig\n  }\n}";

// Input Schema (GraphQL variables)
export const ExperimentationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "experimentation",
    type: "query",
  }),
);
export type ExperimentationInput = typeof ExperimentationInput.Type;

// Output Schema (GraphQL selection set)
export const ExperimentationOutput = Schema.Struct({
  accountConfig: Schema.Unknown,
  deviceConfig: Schema.Unknown,
  deviceExperimentationUnit: Schema.String,
  userConfig: Schema.Unknown,
}).pipe(T.ResponsePath("experimentation"));
export type ExperimentationOutput = typeof ExperimentationOutput.Type;

/**
 * Top-level query object for querying Experimentation configuration.
 */
export const experimentation = API.make(() => ({
  inputSchema: ExperimentationInput,
  outputSchema: ExperimentationOutput,
}));
