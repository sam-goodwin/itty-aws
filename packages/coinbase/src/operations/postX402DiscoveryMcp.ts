import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostX402DiscoveryMcpInput {
  jsonrpc: "2.0";
  id?: string | number;
  method: string;
  params?: Record<string, unknown>;
}
export const PostX402DiscoveryMcpInput =
  /*@__PURE__*/ Schema.Struct({
    jsonrpc: Schema.Literals(["2.0"]),
    id: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
    method: Schema.String,
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/x402/discovery/mcp" }),
  ) as unknown as Schema.Codec<PostX402DiscoveryMcpInput>;

// Output Schema
export interface PostX402DiscoveryMcpOutput {
  jsonrpc: "2.0";
  id?: string | number | null;
  result?: Record<string, unknown>;
  error?: { code: number; message: string; data?: Record<string, unknown> };
}
export const PostX402DiscoveryMcpOutput =
  /*@__PURE__*/ Schema.Struct({
    jsonrpc: Schema.Literals(["2.0"]),
    id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Number])),
    ),
    result: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  }) as unknown as Schema.Codec<PostX402DiscoveryMcpOutput>;

// The operation
/**
 * Handle MCP JSON-RPC request
 *
 * Handles JSON-RPC requests for the Model Context Protocol (MCP). Supports MCP methods for discovering x402 payment resources and tools.
 */
export const postX402DiscoveryMcp = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostX402DiscoveryMcpInput,
  outputSchema: PostX402DiscoveryMcpOutput,
}));
