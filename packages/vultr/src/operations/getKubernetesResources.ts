import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetKubernetesResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/kubernetes/clusters/{vkeId}/resources" }),
  );
export type GetKubernetesResourcesInput =
  typeof GetKubernetesResourcesInput.Type;

// Output Schema
export const GetKubernetesResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(
      Schema.Struct({
        block_storage: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              date_created: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        load_balancer: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              date_created: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type GetKubernetesResourcesOutput =
  typeof GetKubernetesResourcesOutput.Type;

// The operation
/**
 * Get Kubernetes Resources
 *
 * Get the block storage volumes and load balancers deployed by the specified Kubernetes cluster.
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const getKubernetesResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetKubernetesResourcesInput,
    outputSchema: GetKubernetesResourcesOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
