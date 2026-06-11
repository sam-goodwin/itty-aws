import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation canvasViewMerge($sourceEnvironmentId: String!, $targetEnvironmentId: String!) {\n  canvasViewMerge(sourceEnvironmentId: $sourceEnvironmentId, targetEnvironmentId: $targetEnvironmentId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const MergeCanvasViewInput = Schema.Struct({
  sourceEnvironmentId: Schema.String,
  targetEnvironmentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "canvasViewMerge",
    type: "mutation",
  }),
);
export type MergeCanvasViewInput = typeof MergeCanvasViewInput.Type;

// Output Schema (GraphQL selection set)
export const MergeCanvasViewOutput = Schema.Boolean.pipe(
  T.ResponsePath("canvasViewMerge"),
);
export type MergeCanvasViewOutput = typeof MergeCanvasViewOutput.Type;

/**
 * Merge a canvas layout from one environment into another. Re-computes the merge from current state and applies mutations.
 */
export const mergeCanvasView = API.make(() => ({
  inputSchema: MergeCanvasViewInput,
  outputSchema: MergeCanvasViewOutput,
}));
