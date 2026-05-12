import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateNodepoolsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vkeId: Schema.String.pipe(T.PathParam()),
  node_quantity: Schema.Number,
  label: Schema.String,
  plan: Schema.String,
  tag: Schema.optional(Schema.String),
  auto_scaler: Schema.optional(Schema.Boolean),
  min_nodes: Schema.optional(Schema.Number),
  max_nodes: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "POST", path: "/kubernetes/clusters/{vkeId}/node-pools" }),
);
export type CreateNodepoolsInput = typeof CreateNodepoolsInput.Type;

// Output Schema
export const CreateNodepoolsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  node_pool: Schema.optional(
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
});
export type CreateNodepoolsOutput = typeof CreateNodepoolsOutput.Type;

// The operation
/**
 * Create NodePool
 *
 * Create NodePool for a Existing Kubernetes Cluster
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const createNodepools = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNodepoolsInput,
  outputSchema: CreateNodepoolsOutput,
  errors: [BadRequest, NotFound] as const,
}));
