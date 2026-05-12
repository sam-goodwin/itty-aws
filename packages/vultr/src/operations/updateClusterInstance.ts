import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateClusterInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.PathParam()),
    action: Schema.Literals(["attach", "detach"]).pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/clusters/{clusterId}/{action}/{instanceId}",
    }),
  );
export type UpdateClusterInstanceInput = typeof UpdateClusterInstanceInput.Type;

// Output Schema
export const UpdateClusterInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateClusterInstanceOutput =
  typeof UpdateClusterInstanceOutput.Type;

// The operation
/**
 * Update Cluster Instance
 *
 * Attach or Detach a single instance on a cluster.
 *
 * @param clusterId - The [Cluster ID](#operation/list-clusters).
 * @param action - The action to perform.

* attach
* detach
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const updateClusterInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateClusterInstanceInput,
    outputSchema: UpdateClusterInstanceOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
