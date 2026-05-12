import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteNodepoolTaintInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    taintId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/taints/{taintId}",
    }),
  );
export type DeleteNodepoolTaintInput = typeof DeleteNodepoolTaintInput.Type;

// Output Schema
export const DeleteNodepoolTaintOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNodepoolTaintOutput = typeof DeleteNodepoolTaintOutput.Type;

// The operation
/**
 * Delete NodePool Taint
 *
 * Delete NodePool Taint on Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 * @param taintId - The [NodePool Taint ID](#operation/list-taints).
 */
export const deleteNodepoolTaint = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNodepoolTaintInput,
  outputSchema: DeleteNodepoolTaintOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
