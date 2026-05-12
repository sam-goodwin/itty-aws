import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateKubernetesClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    label: Schema.String,
  }).pipe(T.Http({ method: "PUT", path: "/kubernetes/clusters/{vkeId}" }));
export type UpdateKubernetesClusterInput =
  typeof UpdateKubernetesClusterInput.Type;

// Output Schema
export const UpdateKubernetesClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateKubernetesClusterOutput =
  typeof UpdateKubernetesClusterOutput.Type;

// The operation
/**
 * Update Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const updateKubernetesCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateKubernetesClusterInput,
    outputSchema: UpdateKubernetesClusterOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
