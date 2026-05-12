import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetKubernetesClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/kubernetes/clusters/{vkeId}" }));
export type GetKubernetesClustersInput = typeof GetKubernetesClustersInput.Type;

// Output Schema
export const GetKubernetesClustersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vke_cluster: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        cluster_subnet: Schema.optional(Schema.String),
        service_subnet: Schema.optional(Schema.String),
        ip: Schema.optional(Schema.String),
        endpoint: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        ha_controlplanes: Schema.optional(Schema.Boolean),
        node_pools: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              date_created: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              tag: Schema.optional(Schema.String),
              plan: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              node_quantity: Schema.optional(Schema.Number),
              nodes: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    label: Schema.optional(Schema.String),
                    date_created: Schema.optional(Schema.String),
                  }),
                ),
              ),
              date_updated: Schema.optional(Schema.String),
              auto_scaler: Schema.optional(Schema.Boolean),
              min_nodes: Schema.optional(Schema.Number),
              max_nodes: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  });
export type GetKubernetesClustersOutput =
  typeof GetKubernetesClustersOutput.Type;

// The operation
/**
 * Get Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const getKubernetesClusters = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetKubernetesClustersInput,
    outputSchema: GetKubernetesClustersOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
