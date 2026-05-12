import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateNodepoolTaintInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    effect: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/taints",
    }),
  );
export type CreateNodepoolTaintInput = typeof CreateNodepoolTaintInput.Type;

// Output Schema
export const CreateNodepoolTaintOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
        effect: Schema.optional(Schema.String),
      }),
    ),
  });
export type CreateNodepoolTaintOutput = typeof CreateNodepoolTaintOutput.Type;

// The operation
/**
 * Create NodePool Taint
 *
 * Add NodePool Taint to Existing Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 */
export const createNodepoolTaint = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNodepoolTaintInput,
  outputSchema: CreateNodepoolTaintOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
