import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteNodepoolLabelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    labelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/labels/{labelId}",
    }),
  );
export type DeleteNodepoolLabelInput = typeof DeleteNodepoolLabelInput.Type;

// Output Schema
export const DeleteNodepoolLabelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNodepoolLabelOutput = typeof DeleteNodepoolLabelOutput.Type;

// The operation
/**
 * Delete NodePool Label
 *
 * Delete NodePool Label on Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 * @param labelId - The [NodePool Label ID](#operation/list-labels).
 */
export const deleteNodepoolLabel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNodepoolLabelInput,
  outputSchema: DeleteNodepoolLabelOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
