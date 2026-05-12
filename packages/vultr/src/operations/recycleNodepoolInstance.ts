import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RecycleNodepoolInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    nodeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/nodes/{nodeId}/recycle",
    }),
  );
export type RecycleNodepoolInstanceInput =
  typeof RecycleNodepoolInstanceInput.Type;

// Output Schema
export const RecycleNodepoolInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RecycleNodepoolInstanceOutput =
  typeof RecycleNodepoolInstanceOutput.Type;

// The operation
/**
 * Recycle a NodePool Instance
 *
 * Recycle a specific NodePool Instance
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 * @param nodeId - Node ID
 */
export const recycleNodepoolInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecycleNodepoolInstanceInput,
    outputSchema: RecycleNodepoolInstanceOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
