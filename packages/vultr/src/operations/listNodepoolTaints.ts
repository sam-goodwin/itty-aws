import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListNodepoolTaintsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/taints",
    }),
  );
export type ListNodepoolTaintsInput = typeof ListNodepoolTaintsInput.Type;

// Output Schema
export const ListNodepoolTaintsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taints: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
        effect: Schema.optional(Schema.String),
      }),
    ),
  });
export type ListNodepoolTaintsOutput = typeof ListNodepoolTaintsOutput.Type;

// The operation
/**
 * List NodePool Taints
 *
 * List NodePool Taints on Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 */
export const listNodepoolTaints = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListNodepoolTaintsInput,
  outputSchema: ListNodepoolTaintsOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
