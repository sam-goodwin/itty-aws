import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateKubernetesClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    region: Schema.String,
    version: Schema.String,
    vpc_id: Schema.optional(Schema.String),
    ha_controlplanes: Schema.optional(Schema.Boolean),
    enable_firewall: Schema.optional(Schema.Boolean),
    oidc: Schema.optional(
      Schema.Struct({
        issuer_url: Schema.String,
        client_id: Schema.String,
        username_claim: Schema.optional(Schema.String),
        groups_claim: Schema.optional(Schema.String),
      }),
    ),
    node_pools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          node_quantity: Schema.Number,
          label: Schema.String,
          plan: Schema.String,
          tag: Schema.optional(Schema.String),
          auto_scaler: Schema.optional(Schema.Boolean),
          min_nodes: Schema.optional(Schema.Number),
          max_nodes: Schema.optional(Schema.Number),
          user_data: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(T.Http({ method: "POST", path: "/kubernetes/clusters" }));
export type CreateKubernetesClusterInput =
  typeof CreateKubernetesClusterInput.Type;

// Output Schema
export const CreateKubernetesClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vke_cluster: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        firewall_group_id: Schema.optional(Schema.String),
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
        oidc: Schema.optional(
          Schema.Struct({
            issuer_url: Schema.optional(Schema.String),
            client_id: Schema.optional(Schema.String),
            username_claim: Schema.optional(Schema.String),
            groups_claim: Schema.optional(Schema.String),
          }),
        ),
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
              max_nodes: Schema.optional(Schema.Unknown),
              labels: Schema.optional(Schema.NullOr(Schema.Unknown)),
              taints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                    effect: Schema.optional(Schema.String),
                  }),
                ),
              ),
              user_data: Schema.optional(Schema.String),
            }),
          ),
        ),
        vpcs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              version: Schema.optional(Schema.Number),
              subnet: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type CreateKubernetesClusterOutput =
  typeof CreateKubernetesClusterOutput.Type;

// The operation
/**
 * Create Kubernetes Cluster
 */
export const createKubernetesCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateKubernetesClusterInput,
    outputSchema: CreateKubernetesClusterOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
