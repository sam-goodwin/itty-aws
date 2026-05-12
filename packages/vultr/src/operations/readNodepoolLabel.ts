import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ReadNodepoolLabelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    labelId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/labels/{labelId}",
  }),
);
export type ReadNodepoolLabelInput = typeof ReadNodepoolLabelInput.Type;

// Output Schema
export const ReadNodepoolLabelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReadNodepoolLabelOutput = typeof ReadNodepoolLabelOutput.Type;

// The operation
/**
 * Read NodePool Label
 *
 * Read NodePool Label on Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 * @param labelId - The [NodePool Label ID](#operation/list-labels).
 */
export const readNodepoolLabel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadNodepoolLabelInput,
  outputSchema: ReadNodepoolLabelOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
