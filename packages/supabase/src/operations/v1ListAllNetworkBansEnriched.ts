import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllNetworkBansEnrichedInput {
  ref: string;
}
export const V1ListAllNetworkBansEnrichedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/network-bans/retrieve/enriched",
    }),
  ) as unknown as Schema.Codec<V1ListAllNetworkBansEnrichedInput>;

// Output Schema
export interface V1ListAllNetworkBansEnrichedOutput {
  banned_ipv4_addresses: {
    banned_address: string;
    identifier: string;
    type: string;
  }[];
}
export const V1ListAllNetworkBansEnrichedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    banned_ipv4_addresses: Schema.Array(
      Schema.Struct({
        banned_address: Schema.String,
        identifier: Schema.String,
        type: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<V1ListAllNetworkBansEnrichedOutput>;

// The operation
/**
 * [Beta] Gets project's network bans with additional information about which databases they affect
 *
 * @param ref - Project ref
 */
export const v1ListAllNetworkBansEnriched =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1ListAllNetworkBansEnrichedInput,
    outputSchema: V1ListAllNetworkBansEnrichedOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
