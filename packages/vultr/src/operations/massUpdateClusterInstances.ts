import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MassUpdateClusterInstancesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.PathParam()),
    action: Schema.Literals(["attach", "detach"]),
    instances: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/clusters/{clusterId}" }));
export type MassUpdateClusterInstancesInput =
  typeof MassUpdateClusterInstancesInput.Type;

// Output Schema
export const MassUpdateClusterInstancesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MassUpdateClusterInstancesOutput =
  typeof MassUpdateClusterInstancesOutput.Type;

// The operation
/**
 * Mass Update Cluster Instances
 *
 * Attach or Detach multiple instances on a cluster in a single request.
 *
 * @param clusterId - The [Cluster ID](#operation/list-clusters).
 */
export const massUpdateClusterInstances = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MassUpdateClusterInstancesInput,
    outputSchema: MassUpdateClusterInstancesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
