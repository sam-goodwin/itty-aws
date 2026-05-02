import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation canvasViewMerge($sourceEnvironmentId: String!, $targetEnvironmentId: String!) {\n  canvasViewMerge(sourceEnvironmentId: $sourceEnvironmentId, targetEnvironmentId: $targetEnvironmentId)\n}";

// Input Schema (GraphQL variables)
export const CanvasViewMergeInput = Schema.Struct({
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
export type CanvasViewMergeInput = typeof CanvasViewMergeInput.Type;

// Output Schema (GraphQL selection set)
export const CanvasViewMergeOutput = Schema.Boolean.pipe(
  T.ResponsePath("canvasViewMerge"),
);
export type CanvasViewMergeOutput = typeof CanvasViewMergeOutput.Type;

/**
 * Merge a canvas layout from one environment into another. Re-computes the merge from current state and applies mutations.
 */
export const canvasViewMerge = API.make(() => ({
  inputSchema: CanvasViewMergeInput,
  outputSchema: CanvasViewMergeOutput,
}));
