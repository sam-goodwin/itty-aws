import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AttachVpc2NodesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  nodes: Schema.Array(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/vpc2/{vpcId}/nodes/attach" }));
export type AttachVpc2NodesInput = typeof AttachVpc2NodesInput.Type;

// Output Schema
export const AttachVpc2NodesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachVpc2NodesOutput = typeof AttachVpc2NodesOutput.Type;

// The operation
/**
 * Attach nodes to a VPC 2.0 network
 *
 * Attach nodes to a VPC 2.0 network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const attachVpc2Nodes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AttachVpc2NodesInput,
  outputSchema: AttachVpc2NodesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
