import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetKubernetesClustersConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/kubernetes/clusters/{vkeId}/config" }),
  );
export type GetKubernetesClustersConfigInput =
  typeof GetKubernetesClustersConfigInput.Type;

// Output Schema
export const GetKubernetesClustersConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kube_config: Schema.optional(Schema.String),
  });
export type GetKubernetesClustersConfigOutput =
  typeof GetKubernetesClustersConfigOutput.Type;

// The operation
/**
 * Get Kubernetes Cluster Kubeconfig
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const getKubernetesClustersConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetKubernetesClustersConfigInput,
    outputSchema: GetKubernetesClustersConfigOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
