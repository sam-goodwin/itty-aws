import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query canvasViewMergePreview($sourceEnvironmentId: String!, $targetEnvironmentId: String!) {\n  canvasViewMergePreview(sourceEnvironmentId: $sourceEnvironmentId, targetEnvironmentId: $targetEnvironmentId) {\n    mutations\n    state\n  }\n}";

// Input Schema (GraphQL variables)
export const CanvasViewMergePreviewInput = Schema.Struct({
  sourceEnvironmentId: Schema.String,
  targetEnvironmentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "canvasViewMergePreview",
    type: "query",
  }),
);
export type CanvasViewMergePreviewInput =
  typeof CanvasViewMergePreviewInput.Type;

// Output Schema (GraphQL selection set)
export const CanvasViewMergePreviewOutput = Schema.Struct({
  mutations: Schema.Array(Schema.Unknown),
  state: Schema.Unknown,
}).pipe(T.ResponsePath("canvasViewMergePreview"));
export type CanvasViewMergePreviewOutput =
  typeof CanvasViewMergePreviewOutput.Type;

/**
 * Preview a canvas layout merge from one environment to another. Returns the merged state and the mutations needed to reach it.
 */
export const canvasViewMergePreview = API.make(() => ({
  inputSchema: CanvasViewMergePreviewInput,
  outputSchema: CanvasViewMergePreviewOutput,
}));
