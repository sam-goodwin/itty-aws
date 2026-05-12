import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceNeighborsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/neighbors" }));
export type GetInstanceNeighborsInput = typeof GetInstanceNeighborsInput.Type;

// Output Schema
export const GetInstanceNeighborsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    neighbors: Schema.optional(Schema.Array(Schema.String)),
  });
export type GetInstanceNeighborsOutput = typeof GetInstanceNeighborsOutput.Type;

// The operation
/**
 * Get Instance neighbors
 *
 * Get a list of other instances in the same location as this Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const getInstanceNeighbors = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInstanceNeighborsInput,
    outputSchema: GetInstanceNeighborsOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
