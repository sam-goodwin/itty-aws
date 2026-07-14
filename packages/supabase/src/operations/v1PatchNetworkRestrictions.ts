import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1PatchNetworkRestrictionsInput {
  ref: string;
  add?: { dbAllowedCidrs?: string[]; dbAllowedCidrsV6?: string[] };
  remove?: { dbAllowedCidrs?: string[]; dbAllowedCidrsV6?: string[] };
}
export const V1PatchNetworkRestrictionsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    add: Schema.optional(
      Schema.Struct({
        dbAllowedCidrs: Schema.optional(Schema.Array(Schema.String)),
        dbAllowedCidrsV6: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    remove: Schema.optional(
      Schema.Struct({
        dbAllowedCidrs: Schema.optional(Schema.Array(Schema.String)),
        dbAllowedCidrsV6: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/projects/{ref}/network-restrictions",
    }),
  ) as unknown as Schema.Codec<V1PatchNetworkRestrictionsInput>;

// Output Schema
export interface V1PatchNetworkRestrictionsOutput {
  entitlement: "disallowed" | "allowed";
  config: { dbAllowedCidrs?: { address: string; type: "v4" | "v6" }[] };
  old_config?: { dbAllowedCidrs?: { address: string; type: "v4" | "v6" }[] };
  updated_at?: string;
  applied_at?: string;
  status: "stored" | "applied";
}
export const V1PatchNetworkRestrictionsOutput =
  /*@__PURE__*/ Schema.Struct({
    entitlement: Schema.Literals(["disallowed", "allowed"]),
    config: Schema.Struct({
      dbAllowedCidrs: Schema.optional(
        Schema.Array(
          Schema.Struct({
            address: Schema.String,
            type: Schema.Literals(["v4", "v6"]),
          }),
        ),
      ),
    }),
    old_config: Schema.optional(
      Schema.Struct({
        dbAllowedCidrs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              address: Schema.String,
              type: Schema.Literals(["v4", "v6"]),
            }),
          ),
        ),
      }),
    ),
    updated_at: Schema.optional(Schema.String),
    applied_at: Schema.optional(Schema.String),
    status: Schema.Literals(["stored", "applied"]),
  }) as unknown as Schema.Codec<V1PatchNetworkRestrictionsOutput>;

// The operation
/**
 * [Alpha] Updates project's network restrictions by adding or removing CIDRs
 *
 * @param ref - Project ref
 */
export const v1PatchNetworkRestrictions = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1PatchNetworkRestrictionsInput,
  outputSchema: V1PatchNetworkRestrictionsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
