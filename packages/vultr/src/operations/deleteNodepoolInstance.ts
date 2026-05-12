import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNodepoolInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    nodeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/nodes/{nodeId}",
    }),
  );
export type DeleteNodepoolInstanceInput =
  typeof DeleteNodepoolInstanceInput.Type;

// Output Schema
export const DeleteNodepoolInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNodepoolInstanceOutput =
  typeof DeleteNodepoolInstanceOutput.Type;

// The operation
/**
 * Delete NodePool Instance
 *
 * Delete a single nodepool instance from a given Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 * @param nodeId - The [Instance ID](#operation/list-instances).
 */
export const deleteNodepoolInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteNodepoolInstanceInput,
    outputSchema: DeleteNodepoolInstanceOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
