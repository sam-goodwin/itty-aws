import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteClusterInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/clusters/{clusterId}" }));
export type DeleteClusterInput = typeof DeleteClusterInput.Type;

// Output Schema
export const DeleteClusterOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteClusterOutput = typeof DeleteClusterOutput.Type;

// The operation
/**
 * Delete Cluster
 *
 * Delete a cluster.
 *
 * @param clusterId - The [Cluster ID](#operation/list-clusters).
 */
export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteClusterInput,
  outputSchema: DeleteClusterOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
