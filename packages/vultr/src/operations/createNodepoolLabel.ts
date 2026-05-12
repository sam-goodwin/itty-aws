import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateNodepoolLabelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    nodepoolId: Schema.String.pipe(T.PathParam()),
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/kubernetes/clusters/{vkeId}/node-pools/{nodepoolId}/labels",
    }),
  );
export type CreateNodepoolLabelInput = typeof CreateNodepoolLabelInput.Type;

// Output Schema
export const CreateNodepoolLabelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  });
export type CreateNodepoolLabelOutput = typeof CreateNodepoolLabelOutput.Type;

// The operation
/**
 * Create NodePool Label
 *
 * Add NodePool Label to Existing Kubernetes Nodepool
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 * @param nodepoolId - The [NodePool ID](#operation/get-nodepools).
 */
export const createNodepoolLabel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNodepoolLabelInput,
  outputSchema: CreateNodepoolLabelOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
