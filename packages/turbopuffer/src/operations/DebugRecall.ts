import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DebugRecallInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String.pipe(T.PathParam()),
  num: Schema.optional(Schema.Number),
  top_k: Schema.optional(Schema.Number),
  filters: Schema.optional(Schema.Unknown),
  include_ground_truth: Schema.optional(Schema.Boolean),
  rank_by: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({ method: "POST", path: "/v1/namespaces/{namespace}/_debug/recall" }),
);
export type DebugRecallInput = typeof DebugRecallInput.Type;

// Output Schema
export const DebugRecallOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  avg_recall: Schema.Number,
  avg_exhaustive_count: Schema.Number,
  avg_ann_count: Schema.Number,
  ground_truth: Schema.optional(
    Schema.Array(
      Schema.Struct({
        query_vector: Schema.Array(Schema.Number),
        nearest_neighbors: Schema.Array(
          Schema.Struct({
            id: Schema.Unknown,
            vector: Schema.optional(Schema.Unknown),
          }),
        ),
      }),
    ),
  ),
});
export type DebugRecallOutput = typeof DebugRecallOutput.Type;

// The operation
/**
 * Evaluate recall.
 *
 * @param namespace - The name of the namespace.
 */
export const DebugRecall = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DebugRecallInput,
  outputSchema: DebugRecallOutput,
}));
