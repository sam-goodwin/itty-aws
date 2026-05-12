import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteKubernetesClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/kubernetes/clusters/{vkeId}" }));
export type DeleteKubernetesClusterInput =
  typeof DeleteKubernetesClusterInput.Type;

// Output Schema
export const DeleteKubernetesClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteKubernetesClusterOutput =
  typeof DeleteKubernetesClusterOutput.Type;

// The operation
/**
 * Delete Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const deleteKubernetesCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteKubernetesClusterInput,
    outputSchema: DeleteKubernetesClusterOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
