import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation applyEnvironmentChangeSet($commitMessage: String, $environmentId: String!, $input: JSON!) {\n  environmentApplyChangeSet(commitMessage: $commitMessage, environmentId: $environmentId, input: $input) {\n    changes {\n      kind\n      outputs\n      path\n      status\n      summary\n    }\n    deploymentId\n    diagnostics\n    id\n    stagedPatchId\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const ApplyEnvironmentChangeSetInput = Schema.Struct({
  commitMessage: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  input: Schema.Unknown,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "applyEnvironmentChangeSet",
    type: "mutation",
  }),
);
export type ApplyEnvironmentChangeSetInput =
  typeof ApplyEnvironmentChangeSetInput.Type;

// Output Schema (GraphQL selection set)
export const ApplyEnvironmentChangeSetOutput = Schema.Struct({
  changes: Schema.Array(
    Schema.Struct({
      kind: Schema.String,
      outputs: Schema.NullOr(Schema.Unknown),
      path: Schema.NullOr(Schema.String),
      status: Schema.String,
      summary: Schema.NullOr(Schema.String),
    }),
  ),
  deploymentId: Schema.NullOr(Schema.String),
  diagnostics: Schema.Unknown,
  id: Schema.String,
  stagedPatchId: Schema.NullOr(Schema.String),
  status: Schema.String,
}).pipe(T.ResponsePath("environmentApplyChangeSet"));
export type ApplyEnvironmentChangeSetOutput =
  typeof ApplyEnvironmentChangeSetOutput.Type;

/**
 * Experimental: applies an intent-level RailwayChangeSet and returns operation results.
 */
export const applyEnvironmentChangeSet = API.make(() => ({
  inputSchema: ApplyEnvironmentChangeSetInput,
  outputSchema: ApplyEnvironmentChangeSetOutput,
}));
