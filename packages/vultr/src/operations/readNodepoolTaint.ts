import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ReadNodepoolTaintInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    taintId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/taints/{taintId}",
  }),
);
export type ReadNodepoolTaintInput = typeof ReadNodepoolTaintInput.Type;

// Output Schema
export const ReadNodepoolTaintOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
        effect: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReadNodepoolTaintOutput = typeof ReadNodepoolTaintOutput.Type;

// The operation
/**
 * Read NodePool Taint
 *
 * Read NodePool Taint on Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 * @param taintId - The [NodePool Taint ID](#operation/list-taints).
 */
export const readNodepoolTaint = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadNodepoolTaintInput,
  outputSchema: ReadNodepoolTaintOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
