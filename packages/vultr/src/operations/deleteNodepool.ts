import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNodepoolInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vkeId: Schema.String.pipe(T.PathParam()),
  nodepoolId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}",
  }),
);
export type DeleteNodepoolInput = typeof DeleteNodepoolInput.Type;

// Output Schema
export const DeleteNodepoolOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNodepoolOutput = typeof DeleteNodepoolOutput.Type;

// The operation
/**
 * Delete Nodepool
 *
 * Delete a NodePool from a Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 */
export const deleteNodepool = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNodepoolInput,
  outputSchema: DeleteNodepoolOutput,
  errors: [BadRequest, NotFound] as const,
}));
