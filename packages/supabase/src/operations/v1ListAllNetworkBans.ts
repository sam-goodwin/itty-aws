import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllNetworkBansInput {
  ref: string;
}
export const V1ListAllNetworkBansInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/network-bans/retrieve",
    }),
  ) as unknown as Schema.Codec<V1ListAllNetworkBansInput>;

// Output Schema
export interface V1ListAllNetworkBansOutput {
  banned_ipv4_addresses: string[];
}
export const V1ListAllNetworkBansOutput =
  /*@__PURE__*/ Schema.Struct({
    banned_ipv4_addresses: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<V1ListAllNetworkBansOutput>;

// The operation
/**
 * [Beta] Gets project's network bans
 *
 * @param ref - Project ref
 */
export const v1ListAllNetworkBans = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllNetworkBansInput,
  outputSchema: V1ListAllNetworkBansOutput,
  errors: [BadRequest, Forbidden] as const,
}));
