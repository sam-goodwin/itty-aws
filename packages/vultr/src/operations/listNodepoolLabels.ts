import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListNodepoolLabelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/labels",
    }),
  );
export type ListNodepoolLabelsInput = typeof ListNodepoolLabelsInput.Type;

// Output Schema
export const ListNodepoolLabelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  });
export type ListNodepoolLabelsOutput = typeof ListNodepoolLabelsOutput.Type;

// The operation
/**
 * List NodePool Labels
 *
 * List NodePool Labels on Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 */
export const listNodepoolLabels = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListNodepoolLabelsInput,
  outputSchema: ListNodepoolLabelsOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
