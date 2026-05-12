import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateClusterInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterId: Schema.String.pipe(T.PathParam()),
  label: Schema.optional(Schema.String),
  min_pool_count: Schema.optional(Schema.Number),
  hostname: Schema.optional(Schema.String),
  desired_pool_count: Schema.optional(Schema.Number),
  vpc_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "PUT", path: "/clusters/{clusterId}" }));
export type UpdateClusterInput = typeof UpdateClusterInput.Type;

// Output Schema
export const UpdateClusterOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateClusterOutput = typeof UpdateClusterOutput.Type;

// The operation
/**
 * Update Cluster
 *
 * Update properties of a cluster. All parameters are optional.
 *
 * @param clusterId - The [Cluster ID](#operation/list-clusters).
 */
export const updateCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateClusterInput,
  outputSchema: UpdateClusterOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
