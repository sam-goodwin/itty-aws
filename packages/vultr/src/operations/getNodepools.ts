import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetNodepoolsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vkeId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/kubernetes/clusters/{vkeId}/node-pools" }),
);
export type GetNodepoolsInput = typeof GetNodepoolsInput.Type;

// Output Schema
export const GetNodepoolsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type GetNodepoolsOutput = typeof GetNodepoolsOutput.Type;

// The operation
/**
 * List NodePools
 *
 * List all available NodePools on a Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const getNodepools = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNodepoolsInput,
  outputSchema: GetNodepoolsOutput,
  errors: [BadRequest, NotFound] as const,
}));
