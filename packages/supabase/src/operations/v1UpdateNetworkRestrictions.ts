import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdateNetworkRestrictionsInput {
  ref: string;
  dbAllowedCidrs?: string[];
  dbAllowedCidrsV6?: string[];
}
export const V1UpdateNetworkRestrictionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    dbAllowedCidrs: Schema.optional(Schema.Array(Schema.String)),
    dbAllowedCidrsV6: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/network-restrictions/apply",
    }),
  ) as unknown as Schema.Codec<V1UpdateNetworkRestrictionsInput>;

// Output Schema
export interface V1UpdateNetworkRestrictionsOutput {
  entitlement: "disallowed" | "allowed";
  config: { dbAllowedCidrs?: string[]; dbAllowedCidrsV6?: string[] };
  old_config?: { dbAllowedCidrs?: string[]; dbAllowedCidrsV6?: string[] };
  status: "stored" | "applied";
  updated_at?: string;
  applied_at?: string;
}
export const V1UpdateNetworkRestrictionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlement: Schema.Literals(["disallowed", "allowed"]),
    config: Schema.Struct({
      dbAllowedCidrs: Schema.optional(Schema.Array(Schema.String)),
      dbAllowedCidrsV6: Schema.optional(Schema.Array(Schema.String)),
    }),
    old_config: Schema.optional(
      Schema.Struct({
        dbAllowedCidrs: Schema.optional(Schema.Array(Schema.String)),
        dbAllowedCidrsV6: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.Literals(["stored", "applied"]),
    updated_at: Schema.optional(Schema.String),
    applied_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<V1UpdateNetworkRestrictionsOutput>;

// The operation
/**
 * [Beta] Updates project's network restrictions
 *
 * @param ref - Project ref
 */
export const v1UpdateNetworkRestrictions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpdateNetworkRestrictionsInput,
    outputSchema: V1UpdateNetworkRestrictionsOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
