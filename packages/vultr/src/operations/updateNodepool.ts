import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateNodepoolInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vkeId: Schema.String.pipe(T.PathParam()),
  nodepoolId: Schema.String.pipe(T.PathParam()),
  node_quantity: Schema.optional(Schema.Number),
  tag: Schema.optional(Schema.String),
  auto_scaler: Schema.optional(Schema.Boolean),
  min_nodes: Schema.optional(Schema.Number),
  max_nodes: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}",
  }),
);
export type UpdateNodepoolInput = typeof UpdateNodepoolInput.Type;

// Output Schema
export const UpdateNodepoolOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateNodepoolOutput = typeof UpdateNodepoolOutput.Type;

// The operation
/**
 * Update Nodepool
 *
 * Update a Nodepool on a Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 */
export const updateNodepool = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateNodepoolInput,
  outputSchema: UpdateNodepoolOutput,
  errors: [BadRequest, NotFound] as const,
}));
