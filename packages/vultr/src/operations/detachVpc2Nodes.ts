import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DetachVpc2NodesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  nodes: Schema.Array(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/vpc2/{vpcId}/nodes/detach" }));
export type DetachVpc2NodesInput = typeof DetachVpc2NodesInput.Type;

// Output Schema
export const DetachVpc2NodesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachVpc2NodesOutput = typeof DetachVpc2NodesOutput.Type;

// The operation
/**
 * Remove nodes from a VPC 2.0 network
 *
 * Remove nodes from a VPC 2.0 network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const detachVpc2Nodes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachVpc2NodesInput,
  outputSchema: DetachVpc2NodesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
