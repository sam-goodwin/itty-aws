import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeleteNetworkBansInput {
  ref: string;
  ipv4_addresses: string[];
  requester_ip?: boolean;
  identifier?: string;
}
export const V1DeleteNetworkBansInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    ipv4_addresses: Schema.Array(Schema.String),
    requester_ip: Schema.optional(Schema.Boolean),
    identifier: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/network-bans" }),
  ) as unknown as Schema.Codec<V1DeleteNetworkBansInput>;

// Output Schema
export type V1DeleteNetworkBansOutput = void;
export const V1DeleteNetworkBansOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeleteNetworkBansOutput>;

// The operation
/**
 * [Beta] Remove network bans.
 *
 * @param ref - Project ref
 */
export const v1DeleteNetworkBans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteNetworkBansInput,
  outputSchema: V1DeleteNetworkBansOutput,
  errors: [BadRequest, Forbidden] as const,
}));
