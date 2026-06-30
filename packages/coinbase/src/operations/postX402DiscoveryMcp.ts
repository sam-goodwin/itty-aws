import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostX402DiscoveryMcpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonrpc: Schema.Literals(["2.0"]),
    id: Schema.optional(Schema.Unknown),
    method: Schema.String,
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(T.Http({ method: "POST", path: "/v2/x402/discovery/mcp" }));
export type PostX402DiscoveryMcpInput = typeof PostX402DiscoveryMcpInput.Type;

// Output Schema
export const PostX402DiscoveryMcpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonrpc: Schema.Literals(["2.0"]),
    id: Schema.optional(Schema.Unknown),
    result: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  });
export type PostX402DiscoveryMcpOutput = typeof PostX402DiscoveryMcpOutput.Type;

// The operation
/**
 * Handle MCP JSON-RPC request
 *
 * Handles JSON-RPC requests for the Model Context Protocol (MCP). Supports MCP methods for discovering x402 payment resources and tools.
 */
export const postX402DiscoveryMcp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostX402DiscoveryMcpInput,
    outputSchema: PostX402DiscoveryMcpOutput,
  }),
);
