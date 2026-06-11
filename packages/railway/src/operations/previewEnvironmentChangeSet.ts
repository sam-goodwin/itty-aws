import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentPreviewChangeSet($environmentId: String!, $input: JSON!) {\n  environmentPreviewChangeSet(environmentId: $environmentId, input: $input) {\n    changeSet\n    diagnostics\n    effects\n  }\n}";

// Input Schema (GraphQL variables)
export const PreviewEnvironmentChangeSetInput = Schema.Struct({
  environmentId: Schema.String,
  input: Schema.Unknown,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentPreviewChangeSet",
    type: "mutation",
  }),
);
export type PreviewEnvironmentChangeSetInput =
  typeof PreviewEnvironmentChangeSetInput.Type;

// Output Schema (GraphQL selection set)
export const PreviewEnvironmentChangeSetOutput = Schema.Struct({
  changeSet: Schema.Unknown,
  diagnostics: Schema.Unknown,
  effects: Schema.Unknown,
}).pipe(T.ResponsePath("environmentPreviewChangeSet"));
export type PreviewEnvironmentChangeSetOutput =
  typeof PreviewEnvironmentChangeSetOutput.Type;

/**
 * Experimental: previews an intent-level RailwayChangeSet without side effects.
 */
export const previewEnvironmentChangeSet = API.make(() => ({
  inputSchema: PreviewEnvironmentChangeSetInput,
  outputSchema: PreviewEnvironmentChangeSetOutput,
}));
